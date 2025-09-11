import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./services.module.css";

import BrownStar from './images/sergonup-star.png';
import PowerImg from './images/sergonup-power.png';

import CardImg from './images/sergonup-cards.jpg';

import GoldStar from './images/sergonup-brwonstar.png';
import Agency from './images/sergonup-agency.jpg';;

import SilverStart from './images/sergonup-silverstar.png';
import OpImg from './images/sergonup-op.png';

export default function Services() {
  return (
    <div>
      <div className={styles.mainLandingBody}>
        <Container>
          <Row>
            <Col lg={3}>
              <div className={styles.sericeBox}>
                <h3>BRONZE OFFER</h3>
                <Image src={BrownStar} alt="Logo" />
                <Image src={PowerImg} alt="Logo" />
                <h4>
                  <span style={{ fontStyle: "italic" }}>GET</span>{" "}
                  <span className={styles.green}> YOUR WEBSITE FIT </span>
                </h4>
                <p style={{ textAlign: "left" }}>
                  FREE website audit from a Cambridge graduate who has optimised
                  Beverly Hills' top surgeons for over 25 years! Full AISEO
                  analysis reveals how your rivals outrank you. Tam's Semrush
                  expertise equals your digital dominance. Click now - let's
                  reveal your hidden opportunities!
                </p>
                <div style={{fontSize:"1.6rem"}}>
                  <h5>
                    <span style={{ fontWeight: 500 }}>$</span> <br /> FREE
                  </h5>
                  <h5 className={styles.green}>
                    <span style={{ fontWeight: 500 }}>£</span>
                    <br /> FREE
                  </h5>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.sericeBox}>
                <h3>OFFER</h3>
                <Row>
                  <Col lg={3}></Col>
                  <Col lg={9}>
                    <div>
                      <Image
                        style={{ width: "100%" }}
                        src={CardImg}
                        alt="Logo"
                      />
                    </div>
                  </Col>
                </Row>
                <h4 style={{ fontSize: "23px" }}>
                  <span style={{ fontStyle: "italic" }}>CUT</span>{" "}
                  <span className={styles.green}> YOUR CARD COSTS </span>
                </h4>
                <p style={{ textAlign: "left" }}>
                  Stop wasting £1000s in card fees! Other Clinic Owners created
                  a 7-second bank app that replaces transaction costs for under
                  £100 a month. It’s secure, with no setup, no contracts.  Get a
                  demo within 24 hours. Ready to keep your profits? Click now!
                </p>
                <div  style={{}}>
                  <h5>
                    <span style={{ fontWeight: 500,fontSize:"1.8rem" }}>$</span> <br /> 125
                  </h5>
                  <h5 className={styles.green}>
                    <span style={{ fontWeight: 500,fontSize:"1.8rem" }}>£</span>
                    <br /> 100
                  </h5>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.sericeBox}>
                <h3>GOLD OFFER</h3>
                <Row>
                  <Col lg={4} className="pe-0">
                    <div>
                      <Image
                        style={{ width: "100%" }}
                        src={GoldStar}
                        alt="Logo"
                      />
                    </div>
                  </Col>
                  <Col lg={8} className="ps-0">
                    <div>
                      <Image
                        style={{ width: "100%" }}
                        src={Agency}
                        alt="Logo"
                      />
                    </div>
                  </Col>
                </Row>
                <h4 style={{ marginBottom: 0 }}>
                  <span>GET 10</span>{" "}
                  <span
                    style={{ fontStyle: "italic" }}
                    className={styles.green}
                  >
                    {" "}
                    EXTRA CLIENTS{" "}
                  </span>
                </h4>
                <h6>SINGLE WEBSITE ONLY</h6>
                <p style={{ textAlign: "left" }}>
                  get 10 GUARANTEED clients in 30 days - only pay AFTER you see
                  results! Our 25-year AISEO system scales from 10x Clients a
                  month. Investment drops 25% months 5-7. New price points at 20
                  and 30 Clients. More than 30 a month on us. Ready to dominate?
                  Click to apply now!
                </p>
                <div>
                  <h5>
                    <span style={{ fontWeight: 500 }}>$</span> <br /> 5924
                  </h5>
                  <h5 className={styles.green}>
                    <span style={{ fontWeight: 500 }}>£</span>
                    <br /> 4404
                  </h5>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.sericeBox}>
                <h3>SOS RESCUE</h3>
                <Row>
                  <Col lg={4} className="pe-0">
                    <div>
                      <Image
                        style={{ width: "100%" }}
                        src={SilverStart}
                        alt="Logo"
                      />
                    </div>
                  </Col>
                  <Col lg={8} className="ps-0">
                    <div>
                      <Image style={{ width: "100%" }} src={OpImg} alt="Logo" />
                    </div>
                  </Col>
                </Row>
                <h4 style={{ marginBottom: 0 }}>
                  <span style={{ fontStyle: "italic" }}>STUCKS</span>{" "}
                  <span className={styles.green}> IN A HOLE? </span>
                </h4>
                <h6>MORE THAN ONE WEBSITE</h6>
                <p style={{ textAlign: "left" }}>
                  Multiple websites confuse Google, losing Clients! Cambridge
                  Graduate Expert Tam fixes what Surgeons from Beverly Hills to
                  the UAE can’t. 10 Clients a month guaranteed, 20 to 30
                  possible. Only pay after results. Severe website cases may
                  require an initial month to repair.
                </p>
                <div>
                  <h5>
                    <span style={{ fontWeight: 500 }}>$</span> <br /> 9947
                  </h5>
                  <h5 className={styles.green}>
                    <span style={{ fontWeight: 500 }}>£</span>
                    <br /> 7394
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
