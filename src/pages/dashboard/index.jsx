import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Spinner, Alert } from 'react-bootstrap';
import { pdfBlogService } from '@/lib/pdfBlogService';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

export default function PdfBlogManagement() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  
  const [pdfBlogs, setPdfBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPdf, setEditingPdf] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    pdfFile: null
  });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    } else if (isAuthenticated) {
      loadPdfBlogs();
    }
  }, [isAuthenticated, isLoading, router]);

  const loadPdfBlogs = async () => {
    setLoading(true);
    const result = await pdfBlogService.getAllPdfBlogs();
    if (result.success) {
      setPdfBlogs(result.data);
    } else {
      setError('Failed to load PDF blogs');
    }
    setLoading(false);
  };

  const handleShowModal = (pdfBlog = null) => {
    if (pdfBlog) {
      setEditingPdf(pdfBlog);
      setFormData({
        title: pdfBlog.title,
        pdfFile: null
      });
    } else {
      setEditingPdf(null);
      setFormData({
        title: '',
        pdfFile: null
      });
    }
    setShowModal(true);
    setError(null);
    setSuccess(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPdf(null);
    setFormData({ title: '', pdfFile: null });
    setError(null);
    setSuccess(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        pdfFile: file
      }));
      setError(null);
    } else {
      setError('Please select a valid PDF file');
      e.target.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    if (!editingPdf && !formData.pdfFile) {
      setError('Please select a PDF file');
      return;
    }

    setUploading(true);

    try {
      let pdfUrl = editingPdf?.pdf_url;
      let fileName = editingPdf?.file_name;

      // Upload new PDF if provided
      if (formData.pdfFile) {
        const uploadResult = await pdfBlogService.uploadPdf(formData.pdfFile);
        
        if (!uploadResult.success) {
          throw new Error(uploadResult.error);
        }

        pdfUrl = uploadResult.url;
        fileName = uploadResult.fileName;

        // Delete old PDF if updating
        if (editingPdf?.file_name) {
          await pdfBlogService.deletePdf(editingPdf.file_name);
        }
      }

      // Create or update PDF blog
      const pdfBlogData = {
        title: formData.title,
        pdf_url: pdfUrl,
        file_name: fileName
      };

      let result;
      if (editingPdf) {
        result = await pdfBlogService.updatePdfBlog(editingPdf.id, pdfBlogData);
      } else {
        result = await pdfBlogService.createPdfBlog(pdfBlogData);
      }

      if (result.success) {
        setSuccess(editingPdf ? 'PDF blog updated successfully!' : 'PDF blog created successfully!');
        loadPdfBlogs();
        setTimeout(() => {
          handleCloseModal();
        }, 1500);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setError(err.message || 'Failed to save PDF blog');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (pdfBlog) => {
    if (!confirm(`Are you sure you want to delete "${pdfBlog.title}"?`)) {
      return;
    }

    try {
      // Delete PDF from storage
      if (pdfBlog.file_name) {
        await pdfBlogService.deletePdf(pdfBlog.file_name);
      }

      // Delete PDF blog record
      const result = await pdfBlogService.deletePdfBlog(pdfBlog.id);
      
      if (result.success) {
        setSuccess('PDF blog deleted successfully!');
        loadPdfBlogs();
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to delete PDF blog');
    }
  };

  if (isLoading || !isAuthenticated) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col>
          <h2 className="mb-0">PDF Blogs Management</h2>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => handleShowModal()}>
            + Add New PDF Blog
          </Button>
        </Col>
      </Row>

      {success && <Alert variant="success" dismissible onClose={() => setSuccess(null)}>{success}</Alert>}
      {error && <Alert variant="danger" dismissible onClose={() => setError(null)}>{error}</Alert>}

      <Card>
        <Card.Body>
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : pdfBlogs.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">No PDF blogs yet. Create your first one!</p>
            </div>
          ) : (
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pdfBlogs.map((pdfBlog, index) => (
                  <tr key={pdfBlog.id}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{pdfBlog.title}</strong>
                    </td>
                    <td>{new Date(pdfBlog.created_at).toLocaleDateString()}</td>
                    <td>
                      <Button 
                        variant="outline-primary" 
                        size="sm" 
                        className="me-2"
                        href={pdfBlog.pdf_url}
                        target="_blank"
                      >
                        View PDF
                      </Button>
                      <Button 
                        variant="outline-warning" 
                        size="sm" 
                        className="me-2"
                        onClick={() => handleShowModal(pdfBlog)}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => handleDelete(pdfBlog)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editingPdf ? 'Edit PDF Blog' : 'Add New PDF Blog'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form.Group className="mb-3">
              <Form.Label>Title *</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter PDF blog title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                PDF File {editingPdf ? '(Leave empty to keep current PDF)' : '*'}
              </Form.Label>
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required={!editingPdf}
              />
              <Form.Text className="text-muted">
                Only PDF files are allowed. Max size: 10MB
              </Form.Text>
            </Form.Group>

            {editingPdf && (
              <Alert variant="info">
                <strong>Current PDF:</strong>{' '}
                <a href={editingPdf.pdf_url} target="_blank" rel="noopener noreferrer">
                  View Current PDF
                </a>
              </Alert>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal} disabled={uploading}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={uploading}>
              {uploading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    className="me-2"
                  />
                  {editingPdf ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                editingPdf ? 'Update PDF Blog' : 'Create PDF Blog'
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}