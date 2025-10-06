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
            <h3>GBP</h3>
            <p>
              Your GBP is free 24/7/365 Marketing! It is essential for all
              Aesthetic and Restorative Surgeons.
              <br /> Almost half of all Google searches look for local results.
              A well-optimised GBP gets you into the top 3 Local Pack. It is
              prime screen real estate. It appears above regular organic search
              results and has massive visibility and click-through rates. It
              literally puts you on the map.
              <br /> It&apos;s often a Client&apos;s first impression of you. It
              displays photos, reviews, hours, your location and services that
              all build the trust that is so crucial.
              <br /> Clients can call, book, and get directions with one tap.
              GBPs with regular posts, review responses, and fresh content
              consistently outperform their competitors.
              <br /> Most practices underutilise their GBP; don&apos;t be one of
              them!
              <br /> The question isn&apos;t whether you can afford to invest in
              your GBP—it&apos;s whether you can afford not to!
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