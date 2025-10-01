import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Container, Row, Col, Spinner, Alert, Badge, Button } from 'react-bootstrap';
import { pdfBlogService } from '@/lib/pdfBlogService';
import styles from './pdfBlogDetail.module.css';

export default function PdfBlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [pdfBlog, setPdfBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadPdfBlog();
    }
  }, [id]);

  const loadPdfBlog = async () => {
    setLoading(true);
    const result = await pdfBlogService.getPdfBlogById(id);
    
    if (result.success) {
      setPdfBlog(result.data);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleBackToBlogs = () => {
    router.push('/pdfBlogs');
  };

  if (loading) {
    return (
      <div className={styles.pdfBlogDetailMain}>
        <Container className="py-5">
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Loading article...</p>
          </div>
        </Container>
      </div>
    );
  }

  if (error || !pdfBlog) {
    return (
      <div className={styles.pdfBlogDetailMain}>
        <Container className="py-5">
          <Alert variant="danger" className="text-center">
            <h4>Article not found</h4>
            <p>{error || 'The requested article could not be found.'}</p>
            <Button variant="primary" onClick={handleBackToBlogs}>
              Back to Articles
            </Button>
          </Alert>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.pdfBlogDetailMain}>
      
      <div className={styles.pdfBlogDetailContainer}>
        <Container>
          {/* Back Button */}
          <Row className="mb-4">
            <Col>
              <Button 
                variant="outline-primary" 
                onClick={handleBackToBlogs}
                className={styles.backButton}
              >
                ← Back to Articles
              </Button>
            </Col>
          </Row>

          {/* Blog Header */}
          <Row>
            <Col lg={12} className="mx-auto">
              <article className={styles.blogArticle}>
                {/* Meta Information */}
                <div className={styles.blogMeta}>
                  <Badge bg="success" className="me-2">Article</Badge>
                  <span className={styles.publishDate}>
                    Published on {formatDate(pdfBlog.created_at)}
                  </span>
                  {pdfBlog.updated_at !== pdfBlog.created_at && (
                    <span className={styles.updateDate}>
                      • Updated on {formatDate(pdfBlog.updated_at)}
                    </span>
                  )}
                </div>

                {/* Blog Title */}
                <h1 className={styles.blogTitle}>{pdfBlog.title}</h1>

                {/* PDF Content as Blog Post */}
                <div className={styles.blogContent}>
                  <iframe
                    src={`${pdfBlog.pdf_url}#toolbar=0&navpanes=0&scrollbar=1`}
                    className={styles.pdfContentFrame}
                    title={pdfBlog.title}
                  />
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
}