import { useState, useRef } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./dashboard.module.css";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const editorRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handlePublish = () => {
    const bodyContent = editorRef.current.innerHTML;
    console.log({
      title,
      image,
      body: bodyContent,
    });
    handleClose();
  };

  return (
    <div className={styles.dashboardMainSection}>
      <Header />

      <Container className={styles.dashboardContainer}>
        <Row className="mb-4">
          <Col className="d-flex justify-content-between align-items-center">
            <h3 className={styles.sectionTitle}>Current Blogs</h3>
            <Button className={styles.newPostBtn} onClick={handleShow}>
              + New Post
            </Button>
          </Col>
        </Row>

        {/* Blog List */}
        <Row>
          {[1, 2].map((blog, i) => (
            <Col md={6} key={i} className="mb-3">
              <Card className={styles.blogCard}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300"
                  className={styles.blogImage}
                />
                <Card.Body>
                  <Card.Title>Sample Blog Title {i + 1}</Card.Title>
                  <Card.Text>
                    This is a short preview of the blog content.
                  </Card.Text>
                  <div className={styles.cardButtons}>
                    <Button variant="outline-success" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Fullscreen Modal for New Blog */}
      <Modal
        show={show}
        onHide={handleClose}
        fullscreen
        className={styles.blogModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  className={styles.inputField}
                  onChange={(e) => setImage(e.target.files[0]?.name || null)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter blog title"
                  className={styles.inputField}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Body</Form.Label>
                <div className={styles.editorToolbar}>
                  <Button variant="light" size="sm" onClick={() => applyFormat("formatBlock", "H1")}>H1</Button>
                  <Button variant="light" size="sm" onClick={() => applyFormat("formatBlock", "H2")}>H2</Button>
                  <Button variant="light" size="sm" onClick={() => applyFormat("bold")}>Bold</Button>
                  <Button variant="light" size="sm" onClick={() => applyFormat("italic")}>Italic</Button>
                  <Button variant="light" size="sm" onClick={() => applyFormat("insertUnorderedList")}>List</Button>
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

              <Button className={styles.postBtn} onClick={handlePublish}>
                Publish
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
}
