import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/header/header";
import styles from "./blog.module.css";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { blogService } from "@/lib/blogService";
import blogImg from "./images/blogTitle.png"; // Fallback image

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const result = await blogService.getAllBlogs();
      if (result.success) {
        setBlogs(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load blogs');
    }
    setLoading(false);
  };

  // Extract text content from HTML
  const extractTextFromHTML = (html, maxLength = 50) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Responsive Image Component with proper sizing
  const BlogImage = ({ src, alt, isFeatured = false, className = "" }) => {
    const [imgError, setImgError] = useState(false);

    const imageStyle = {
      objectFit: 'cover',
      borderRadius: '8px',
      width: '100%',
      height: '300px',
      maxWidth: '100%',
      // CSS will handle responsive heights
    };

    // If external URL and not error, use regular img tag
    if (src && src.includes('supabase.co') && !imgError) {
      return (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isFeatured ? 'featured-img' : 'small-img'}`}
          style={imageStyle}
          onError={() => setImgError(true)}
        />
      );
    }

    // Use Next.js Image for local images or as fallback
    return (
      <Image
        src={imgError || !src ? blogImg : src}
        width={isFeatured ? 380 : 180}
        height={isFeatured ? 200 : 100}
        alt={alt}
        className={`${className} ${isFeatured ? 'featured-img' : 'small-img'}`}
        style={imageStyle}
        onError={() => setImgError(true)}
      />
    );
  };

  if (loading) {
    return (
      <div className={styles.BlogsMain}>
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.BlogsMain}>
        <div className="text-center py-5">
          <h4 className="text-danger">Error: {error}</h4>
          <p>Unable to load blogs. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className={styles.BlogsMain}>
        <h2>Blog</h2>
        <div className="text-center py-5">
          <h4>No blogs available</h4>
          <p className="text-muted">Check back soon for new content!</p>
        </div>
      </div>
    );
  }

  // Separate blogs for different sections
  const featuredBlogs = blogs.slice(0, 2); // First 2 blogs for large display
  const otherBlogs = blogs.slice(2); // Remaining blogs for small display

  return (
    <div className={styles.BlogsMain}>
      <h2>Blog</h2>
      <div className={styles.BlogsMainSec}>
        <Container>
          {/* Featured Blogs Section - Large Display */}
          {featuredBlogs.length > 0 && (
            <Row className="mb-4">
              {featuredBlogs.map((blog) => (
                <Col lg={6} md={6} sm={12} key={blog.id} className="mb-3">
                  <Link href={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ cursor: 'pointer' }}>
                      <h3>{blog.title}</h3>
                      <div className={styles.BlogsSec}>
                        <h4>{extractTextFromHTML(blog.body, 60)}</h4>
                        <BlogImage 
                          src={blog.image_url}
                          alt={blog.title}
                          isFeatured={true}
                        />
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
              
              {/* Fill empty space if only 1 featured blog */}
              {featuredBlogs.length === 1 && (
                <Col lg={6} md={6} sm={12}>
                  <div className="text-center text-muted py-5">
                    <p>More featured content coming soon!</p>
                  </div>
                </Col>
              )}
            </Row>
          )}

          {/* Other Blogs Section - Small Display */}
          {otherBlogs.length > 0 && (
            <Row>
              {otherBlogs.map((blog) => (
                <Col lg={3} md={6} sm={12} key={blog.id} className="mb-3">
                  <Link href={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ cursor: 'pointer' }}>
                      <h3 style={{ fontSize: '1.2rem' }}>{blog.title}</h3>
                      <div className={styles.BlogsSec}>
                        <h6>{extractTextFromHTML(blog.body, 40)}</h6>
                        <BlogImage 
                          src={blog.image_url}
                          alt={blog.title}
                          isFeatured={false}
                        />
                        <div className="mt-2">
                          <small className="text-muted">
                            {new Date(blog.created_at).toLocaleDateString()}
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
              
              {/* Fill empty columns to maintain grid layout */}
              {Array.from({ length: (4 - (otherBlogs.length % 4)) % 4 }, (_, index) => (
                <Col lg={3} md={6} sm={12} key={`empty-${index}`} className="mb-3">
                  <div className="text-center text-muted py-3" style={{ opacity: 0.5 }}>
                    {/* Empty space */}
                  </div>
                </Col>
              ))}
            </Row>
          )}

          {/* Show message if no other blogs */}
          {featuredBlogs.length > 0 && otherBlogs.length === 0 && (
            <Row>
              <Col>
                <div className="text-center text-muted py-4">
                  <p>More blog posts coming soon!</p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
}