import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import styles from "./login.module.css";
import bcrypt from 'bcryptjs';

import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validate input
      if (!formData.email || !formData.password) {
        throw new Error('Please fill in all fields');
      }

      // Query admin user from Supabase
      const { data: adminUser, error: dbError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', formData.email.toLowerCase())
        .single();

      if (dbError || !adminUser) {
        throw new Error('Invalid email or password');
      }

      console.log("YEE", adminUser, formData.password)
      // Verify password
      const isPasswordValid = await bcrypt.compare(formData.password, adminUser.password_hash);
      
      if (!isPasswordValid) {
        throw new Error('Invalid email or password');
      }

      // Login successful
      const adminInfo = {
        id: adminUser.id,
        email: adminUser.email,
        loginTime: new Date().toISOString()
      };

      login(adminInfo);
      
      // Redirect to dashboard
      router.push('/dashboard');

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginMainSection}>

      <Container className={styles.loginContainer}>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <div className={styles.loginBox}>
              <h2 className={styles.title}>Admin Login</h2>
              
              {error && (
                <Alert variant="danger" className="mb-3">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter admin email" 
                    className={styles.inputField}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Enter password" 
                    className={styles.inputField}
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </Form.Group>

                <Button 
                  variant="success" 
                  type="submit" 
                  className={styles.loginBtn}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" />
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </Button>
              </Form>
              
              {/* Demo credentials */}
              <div className={styles.demoCredentials}>
                <small className="text-muted">
                  Demo: admin@surgeonup.com / admin123
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}