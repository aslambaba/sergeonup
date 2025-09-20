import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./login.module.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <div className={styles.loginMainSection}>
      <Header />

      <Container className={styles.loginContainer}>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <div className={styles.loginBox}>
              <h2 className={styles.title}>Login</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    className={styles.inputField}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    className={styles.inputField}
                  />
                </Form.Group>

                <Button 
                  variant="success" 
                  type="submit" 
                  className={styles.loginBtn}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
