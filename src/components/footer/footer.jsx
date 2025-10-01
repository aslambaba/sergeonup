import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.css";
import FB from "./images/facebook.jpg";
import INSTA from "./images/instagram.jpg";
import LI from "./images/linkedin.jpg";
import PINT from "./images/pintrest.jpg";
import TOP from "./images/top.jpg";
import Link from "next/link";



export default function Footer() {
  return (
    <Container fluid className="p-0">
      <div className={styles.FooterMain}>
        <Row>
          <div className={styles.FooterMainSec}>
            {/* Logo */}
            <Col lg={2}>
              <Link href="/privacy">
                <h1>PRV</h1>
              </Link>
            </Col>

            {/* Menu Section */}
            <Col lg={8}>
              <div className={styles.menuItemSec}>
                <Link
                  href="https://www.facebook.com/surgeonup1/"
                  target="_blank"
                >
                  <Image src={FB} height={70} width={70} alt="Logo" />
                </Link>
                <Link
                  href="https://www.instagram.com/surgeonup/"
                  target="_blank"
                >
                  <Image src={INSTA} height={70} width={70} alt="Logo" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/robin-grantham/"
                  target="_blank"
                >
                  <Image src={LI} height={70} width={70} alt="Logo" />
                </Link>
                <Link
                  href="https://uk.pinterest.com/surgeonup/"
                  target="_blank"
                >
                  <Image src={PINT} height={70} width={70} alt="Logo" />
                </Link>
                <a href="tel:+447356075678">
                  <Image src={TOP} height={70} width={70} alt="Logo" />
                </a>
              </div>
            </Col>

            {/* Book a Chat Section */}
            <Col lg={2}>
              <Link href="/terms-of-service">
                <h1>TOS</h1>
              </Link>
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
