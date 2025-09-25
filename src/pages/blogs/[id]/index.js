import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Container, Row, Col, Spinner, Alert, Badge, Button } from 'react-bootstrap';
import { blogService } from '@/lib/blogService';
import Image from 'next/image';
import styles from './blogDetail.module.css';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadBlog();
    }
  }, [id]);

  const loadBlog = async () => {
    setLoading(true);
    const result = await blogService.getBlogById(id);
    
    if (result.success) {
      setBlog(result.data);
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
    router.push('/blogs');
  };

  if (loading) {
    return (
      <div className={styles.blogDetailMain}>
        <Container className="py-5">
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Loading blog...</p>
          </div>
        </Container>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className={styles.blogDetailMain}>
        <Container className="py-5">
          <Alert variant="danger" className="text-center">
            <h4>Blog not found</h4>
            <p>{error || 'The requested blog post could not be found.'}</p>
            <Button variant="primary" onClick={handleBackToBlogs}>
              Back to Blogs
            </Button>
          </Alert>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.blogDetailMain}>
      
      <div className={styles.blogDetailContainer}>
        <Container>
          {/* Back Button */}
          <Row className="mb-4">
            <Col>
              <Button 
                variant="outline-primary" 
                onClick={handleBackToBlogs}
                className={styles.backButton}
              >
                ← Back to Blogs
              </Button>
            </Col>
          </Row>

          {/* Blog Header */}
          <Row>
            <Col lg={8} className="mx-auto">
              <article className={styles.blogArticle}>
                {/* Meta Information */}
                <div className={styles.blogMeta}>
                  <Badge bg="success" className="me-2">Article</Badge>
                  <span className={styles.publishDate}>
                    Published on {formatDate(blog.created_at)}
                  </span>
                  {blog.updated_at !== blog.created_at && (
                    <span className={styles.updateDate}>
                      • Updated on {formatDate(blog.updated_at)}
                    </span>
                  )}
                </div>

                {/* Blog Title */}
                <h1 className={styles.blogTitle}>{blog.title}</h1>

                {/* Featured Image */}
                {blog.image_url && (
                  <div className={styles.featuredImageContainer}>
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className={styles.featuredImage}
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div 
                  className={styles.blogContent}
                  dangerouslySetInnerHTML={{ __html: blog.body }}
                />

                {/* Blog Footer */}
                {/* <div className={styles.blogFooter}>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div className={styles.shareSection}>
                      <span>Share this article:</span>
                      <div className={styles.shareButtons}>
                        <Button 
                          size="sm" 
                          variant="outline-primary"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: blog.title,
                                url: window.location.href
                              });
                            } else {
                              navigator.clipboard.writeText(window.location.href);
                              alert('Link copied to clipboard!');
                            }
                          }}
                        >
                          Share
                        </Button>
                      </div>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      onClick={handleBackToBlogs}
                    >
                      Read More Articles
                    </Button>
                  </div>
                </div> */}
              </article>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
}