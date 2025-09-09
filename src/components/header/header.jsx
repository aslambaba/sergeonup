import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./header.module.css";
import MainLogo from "./images/logo.jpg";
import MainLogo2 from "./images/musicnote.png";

export default function Header() {
  return (
    <Container>
      <Row>
        {/* Logo */}
        <Col lg={2}>
          <Image className={styles.mainLogo} src={MainLogo} alt="Logo" fluid />
        </Col>

        {/* Menu Section */}
        <Col lg={8}>
          <div className={styles.menuItemSec}>
            <Row>
              <Col lg={12}>
                <ul>
                  <li className={styles.home}>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>{" "}
                    <Image
                      className={styles.musicnoteIcon}
                      src={MainLogo2}
                      alt="Note"
                    />
                  </li>
                </ul>
              </Col>
              <Col lg={12}>
                <div className={styles.contentno2}>
                  <p>
                    <span className={styles.profitword}>PROFIT</span>
                    <span className={styles.or}>OR</span>
                    <span className={styles.no}>NO</span>
                    <span className={styles.fee}>FEE</span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        {/* Book a Chat Section */}
        <Col lg={2}>
          <div className={styles.container3}>
            <span className={styles.line1}>Book</span>
            <br />
            <span className={styles.line2}>A</span>
            <br />
            <span className={styles.line3}>Chat</span>
          </div>
        </Col>

        {/* <Col lg={2}></Col> */}
      </Row>
    </Container>
  );
}
