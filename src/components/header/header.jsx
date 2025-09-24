import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./header.module.css";
import MainLogo from "./images/logo.jpg";
import BootAchat from "./images/bookAchat.png";
import ProfitNF from "./images/profitornofee.png";
import MainLogo2 from "./images/musicnote.png";

export default function Header() {
  return (
    <Container>
      <div className={styles.HeaderMain}>
        <Row>
          {/* Logo */}
          <Col lg={2} md={2} sm={2} xs={2} className="px-1">
            <Image
              className={styles.mainLogo}
              src={MainLogo}
              alt="Logo"
              fluid
            />
          </Col>

          {/* Menu Section */}
          <Col lg={8} md={8} sm={8} xs={8} className="px-1">
            <div className={styles.menuItemSec}>
              <Row>
                <Col lg={12}>
                  <ul>
                    <li className={styles.home}>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>{" "}
                      <Image
                        className={styles.musicnoteIcon}
                        src={MainLogo2}
                        alt="Note"
                      />
                    </li>
                  </ul>
                </Col>
                <Col lg={12}>
                  <div className={styles.conatinerNoFee}>
                    <Image src={ProfitNF} width={"70%"} alt="Logo" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Book a Chat Section */}
          <Col lg={2} md={2} sm={2} xs={2} className="px-1">
            <Image
              className={styles.mainLogo}
              src={BootAchat}
              alt="Logo"
              fluid
            />
          </Col>

          {/* <Col lg={2}></Col> */}
        </Row>
      </div>
    </Container>
  );
}
