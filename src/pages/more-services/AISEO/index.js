import Link from "next/link";
import styles from "../ms-styles.module.css"
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import logo from "../images/logo.jpg";

export default function MoreServices() {

    
    return (
      <div className={styles.moreServices}>
        <div className={styles.moreServicesContainer}>
          <div className={styles.singleServiceDesContainer}>
            <h3>AISEO</h3>
            <p>
              AI Search Engines are reshaping how Clients discover Surgeons like
              you. Platforms like ChatGPT, Perplexity, and Google's AI Overview
              are now available.
              <br /> They answer millions of health queries daily. When someone
              asks, "Best rhinoplasty surgeon near me," AI doesn't just give a
              list of websites. It offers recommendations with context.
              <br />  Being featured in AI responses is the new frontier of
              digital visibility.
              <br /> AI engines prioritise authoritative, structured content
              that answers patient questions. They get their information from
              verified sources, reviews, and detailed service descriptions.
              <br /> If your practice isn't optimised for AI discovery, you're
              invisible. A growing section of Clients now trusts AI when
              searching for a Surgeon.
              <br /> The vast majority of practices haven't even started AI
              Search optimisation.<br/> Don't fall behind!  Get in now, ride the
              crest of the wave!              
              <Image src={logo} height={25} width={30} alt="Logo" />
              
            </p>
          </div>
        </div>
        <br />
        <div className={styles.moreServicesPricing}>
          <div className={styles.moreServicesPricingTable}>
            <Row>
              <Col lg={8} md={8} sm={8} xs={8}></Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <p className={styles.green} style={{ marginBottom: "0px" }}>
                  $
                </p>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <p style={{ marginBottom: "0px" }}>€</p>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={8} sm={2} xs={8}>
                <h2>The First Month:</h2>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <p className={styles.green} style={{ marginBottom: "0px" }}>
                  <span>1997</span>
                </p>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <p style={{ marginBottom: "0px" }}>
                  <span>1500</span>
                </p>
              </Col>
            </Row>
          </div>
          <div className={styles.moreServicesPricingTable}>
            <Row>
              <Col lg={8} md={8} sm={8} xs={8}>
                <h2>Monthly Updates:</h2>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <p className={styles.green} style={{ marginBottom: "0px" }}>
                  <span>993</span>
                </p>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <p style={{ marginBottom: "0px" }}>
                  <span>750</span>
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
}