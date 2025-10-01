import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { pdfBlogService } from "@/lib/pdfBlogService";
import styles from "./pdfBlog.module.css";

export default function PdfBlogs() {
  const [pdfBlogs, setPdfBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    loadPdfBlogs();
    // Detect mobile device
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const loadPdfBlogs = async () => {
    setLoading(true);
    try {
      const result = await pdfBlogService.getAllPdfBlogs();
      if (result.success) {
        setPdfBlogs(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load PDF blogs');
    }
    setLoading(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className={styles.pdfBlogsMain}>
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pdfBlogsMain}>
        <div className="text-center py-5">
          <h4 className="text-danger">Error: {error}</h4>
          <p>Unable to load blogs. Please try again later.</p>
        </div>
      </div>
    );
  }

  // Separate blogs for different sections (same as original blog design)
  const featuredBlogs = pdfBlogs.slice(0, 2);
  const otherBlogs = pdfBlogs.slice(2);

  return (
    <div className={styles.pdfBlogsMain}>
      
      <Container className={styles.pdfBlogsContainer}>
        <h2 className={styles.mainTitle}>Blog</h2>

        {pdfBlogs.length === 0 ? (
          <div className="text-center py-5">
            <h4>No blogs available</h4>
            <p className="text-muted">Check back soon for new content!</p>
          </div>
        ) : (
          <>
            {/* Featured Blogs Section - Large Display */}
            {featuredBlogs.length > 0 && (
              <Row className="mb-4">
                {featuredBlogs.map((pdfBlog) => (
                  <Col lg={6} md={6} sm={12} key={pdfBlog.id} className="mb-3">
                    <Link href={`/pdfBlogs/${pdfBlog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ cursor: 'pointer' }}>
                        <h3>{pdfBlog.title}</h3>
                        <div className={styles.blogCard}>
                          <h4>Read this article</h4>
                          <div className={styles.blogImageLarge}>
                            <div className={styles.pdfPreview}>
                              <iframe
                                src={`${pdfBlog.pdf_url}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                                className={styles.previewFrame}
                                title={pdfBlog.title}
                                scrolling="no"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
                
                {featuredBlogs.length === 1 && (
                  <Col lg={6} md={6} sm={12}>
                    <div className="text-center text-muted py-5">
                      <p>More content coming soon!</p>
                    </div>
                  </Col>
                )}
              </Row>
            )}

            {/* Other Blogs Section - Small Display */}
            {otherBlogs.length > 0 && (
              <Row>
                {otherBlogs.map((pdfBlog) => (
                  <Col lg={3} md={6} sm={12} key={pdfBlog.id} className="mb-3">
                    <Link href={`/pdfBlogs/${pdfBlog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ cursor: 'pointer' }}>
                        <h3 style={{ fontSize: '1.2rem' }}>{pdfBlog.title}</h3>
                        <div className={styles.blogCard}>
                          <h6>Read article</h6>
                          <div className={styles.blogImageSmall}>
                            {isMobile ? (
                              // Mobile: Show placeholder
                              <div className={styles.mobilePdfPlaceholder}>
                                <div className={styles.pdfIconMobile}>📄</div>
                                <p className={styles.tapToView}>Tap to view</p>
                              </div>
                            ) : (
                              // Desktop: Show iframe preview
                              <div className={styles.pdfPreview}>
                                <iframe
                                  src={`${pdfBlog.pdf_url}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                                  className={styles.previewFrame}
                                  title={pdfBlog.title}
                                  scrolling="no"
                                />
                              </div>
                            )}
                          </div>
                          <div className="mt-2">
                            <small className="text-muted">
                              {formatDate(pdfBlog.created_at)}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
                
                {Array.from({ length: (4 - (otherBlogs.length % 4)) % 4 }, (_, index) => (
                  <Col lg={3} md={6} sm={12} key={`empty-${index}`} className="mb-3">
                    <div className="text-center text-muted py-3" style={{ opacity: 0.5 }}>
                      {/* Empty space */}
                    </div>
                  </Col>
                ))}
              </Row>
            )}

            {featuredBlogs.length > 0 && otherBlogs.length === 0 && (
              <Row>
                <Col>
                  <div className="text-center text-muted py-4">
                    <p>More blog posts coming soon!</p>
                  </div>
                </Col>
              </Row>
            )}
          </>
        )}
      </Container>

    </div>
  );
}