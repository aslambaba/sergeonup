import { useState, useRef, useEffect } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./dashboard.module.css";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '@/components/ProtectedRoute';
import { blogService } from '@/lib/blogService';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
  Alert,
  Spinner,
  Badge
} from "react-bootstrap";

export default function Dashboard() {
  const { adminData, logout } = useAuth();
  const router = useRouter();
  const editorRef = useRef(null);

  // State management
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [alert, setAlert] = useState({ show: false, message: '', variant: 'success' });

  // Load blogs on component mount
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setPageLoading(true);
    const result = await blogService.getAllBlogs();
    if (result.success) {
      setBlogs(result.data);
    } else {
      showAlert('Failed to load blogs: ' + result.error, 'danger');
    }
    setPageLoading(false);
  };

  const showAlert = (message, variant = 'success') => {
    setAlert({ show: true, message, variant });
    setTimeout(() => setAlert({ show: false, message: '', variant: 'success' }), 5000);
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setCurrentBlogId(null);
    setTitle("");
    setImage(null);
    setImagePreview(null);
    if (editorRef.current) {
      editorRef.current.innerHTML = "Start writing your blog...";
    }
  };

  const handleShow = () => setShow(true);

  const handleEdit = (blog) => {
    setEditMode(true);
    setCurrentBlogId(blog.id);
    setTitle(blog.title);
    setImagePreview(blog.image_url);
    if (editorRef.current) {
      editorRef.current.innerHTML = blog.body;
    }
    setShow(true);
  };

  const handleDelete = async (blogId) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    setLoading(true);
    const result = await blogService.deleteBlog(blogId);
    
    if (result.success) {
      showAlert('Blog deleted successfully!');
      loadBlogs();
    } else {
      showAlert('Failed to delete blog: ' + result.error, 'danger');
    }
    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const handlePublish = async () => {
    if (!title.trim()) {
      showAlert('Please enter a title', 'danger');
      return;
    }

    const bodyContent = editorRef.current.innerHTML;
    if (bodyContent.trim() === '' || bodyContent.trim() === 'Start writing your blog...') {
      showAlert('Please write some content', 'danger');
      return;
    }

    setLoading(true);

    try {
      let imageUrl = imagePreview;
      let imageName = null;

      // Upload new image if selected
      if (image && typeof image === 'object') {
        const uploadResult = await blogService.uploadImage(image);
        if (uploadResult.success) {
          imageUrl = uploadResult.url;
          imageName = uploadResult.fileName;
        } else {
          showAlert('Failed to upload image: ' + uploadResult.error, 'danger');
          setLoading(false);
          return;
        }
      }

      const blogData = {
        title,
        body: bodyContent,
        image_url: imageUrl,
        image_name: imageName,
        admin_id: adminData.id
      };

      let result;
      if (editMode && currentBlogId) {
        result = await blogService.updateBlog(currentBlogId, blogData);
        showAlert(result.success ? 'Blog updated successfully!' : 'Failed to update blog: ' + result.error, result.success ? 'success' : 'danger');
      } else {
        result = await blogService.createBlog(blogData);
        showAlert(result.success ? 'Blog published successfully!' : 'Failed to publish blog: ' + result.error, result.success ? 'success' : 'danger');
      }

      if (result.success) {
        handleClose();
        loadBlogs();
      }
    } catch (error) {
      showAlert('An error occurred: ' + error.message, 'danger');
    }

    setLoading(false);
  };

  const truncateHTML = (html, maxLength = 100) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <ProtectedRoute>
      <div className={styles.dashboardMainSection}>
        <Header />

        <Container className={styles.dashboardContainer}>
          {/* Alert */}
          {alert.show && (
            <Alert variant={alert.variant} dismissible onClose={() => setAlert({ ...alert, show: false })}>
              {alert.message}
            </Alert>
          )}

          <Row className="mb-4">
            <Col className="d-flex justify-content-between align-items-center">
              <h3 className={styles.sectionTitle}>
                Current Blogs 
                <Badge bg="secondary" className="ms-2">{blogs.length}</Badge>
              </h3>
              <div>
                <Button className={styles.newPostBtn} onClick={handleShow}>
                  + New Post
                </Button>
                <Button variant="outline-danger" className="ms-2" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </Col>
          </Row>

          {/* Blog List */}
          {pageLoading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-3">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-5">
              <h5>No blogs found</h5>
              <p className="text-muted">Create your first blog post to get started!</p>
            </div>
          ) : (
            <Row>
              {blogs.map((blog) => (
                <Col md={6} lg={4} key={blog.id} className="mb-3">
                  <Card className={styles.blogCard}>
                    {blog.image_url && (
                      <Card.Img
                        variant="top"
                        src={blog.image_url}
                        className={styles.blogImage}
                        alt={blog.title}
                      />
                    )}
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>
                        {truncateHTML(blog.body)}
                      </Card.Text>
                      <div className="text-muted small mb-2">
                        Created: {new Date(blog.created_at).toLocaleDateString()}
                        {blog.updated_at !== blog.created_at && (
                          <><br />Updated: {new Date(blog.updated_at).toLocaleDateString()}</>
                        )}
                      </div>
                      <div className={styles.cardButtons}>
                        <Button 
                          variant="outline-success" 
                          size="sm"
                          onClick={() => handleEdit(blog)}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => handleDelete(blog.id)}
                          disabled={loading}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>

        {/* Fullscreen Modal for New/Edit Blog */}
        <Modal
          show={show}
          onHide={handleClose}
          fullscreen
          className={styles.blogModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {editMode ? 'Edit Blog' : 'Create New Blog'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    className={styles.inputField}
                    onChange={handleImageChange}
                  />
                  {imagePreview && (
                    <div className="mt-2">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Title *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter blog title"
                    className={styles.inputField}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Body *</Form.Label>
                  <div className={styles.editorToolbar}>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("formatBlock", "H1")}
                    >
                      H1
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("formatBlock", "H2")}
                    >
                      H2
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("formatBlock", "H3")}
                    >
                      H3
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("bold")}
                    >
                      <strong>B</strong>
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("italic")}
                    >
                      <em>I</em>
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("underline")}
                    >
                      <u>U</u>
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("insertUnorderedList")}
                    >
                      • List
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => applyFormat("insertOrderedList")}
                    >
                      1. List
                    </Button>
                  </div>
                  <div
                    ref={editorRef}
                    className={styles.editorArea}
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Start writing your blog...
                  </div>
                </Form.Group>

                <div className="d-flex gap-2">
                  <Button 
                    className={styles.postBtn} 
                    onClick={handlePublish}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        {editMode ? 'Updating...' : 'Publishing...'}
                      </>
                    ) : (
                      editMode ? 'Update Blog' : 'Publish Blog'
                    )}
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}