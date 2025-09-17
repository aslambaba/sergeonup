import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Container fluid className="p-0">
      <div  className={styles.FooterMain}>
        <Row>
          <div className={styles.FooterMainSec}>
            {/* Logo */}
            <Col lg={2}>
              <h1>PRV</h1>
            </Col>

            {/* Menu Section */}
            <Col lg={8}>
              <div className={styles.menuItemSec}>
                <Row></Row>
              </div>
            </Col>

            {/* Book a Chat Section */}
            <Col lg={2}>
              <h1>TOS</h1>
            </Col>
          </div>
        </Row>
        <Row>
          <Col lg={12}>
            <h3>
              Copyright Robin Gratham & Surge-on up 2025 All rights reserved
            </h3>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
