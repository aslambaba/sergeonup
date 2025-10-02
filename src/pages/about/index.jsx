import Header from "@/components/header/header";
import styles from "./about.module.css";
import { Col, Container, Row } from "react-bootstrap";
import RobinProfile from "./images/robin-profile.png";
import TamProfile from "./images/tam-profile.png";
import Logo from "./images/logo.png";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Link from "next/link";


export default function AboutPage(){
    return (
      <div className={styles.AboutMainContainer}>
        <h2>ABOUT</h2>
        <Container fluid>
          <div className={styles.AboutSec1Container}>
            <Row>
              <Col lg={6}>
                <div className={styles.AboutSec1}>
                  <div className={styles.ImageContainer}>
                    <Image src={RobinProfile} alt="Logo" fluid />
                    <Image
                      src={Logo}
                      alt="Logo"
                      fluid
                      style={{ width: "138px", height: "94px" }}
                    />
                  </div>
                  <h3>Robin Grantham, CEO, Surge-on Up</h3>
                  <div className={styles.AboutSec1Text}>
                    <h3>Robin Grantham is both Creator and Tech</h3>
                    <h4>
                      A Visionary CEO and BAFTA-Nominated Film Makeup Artist of
                      25 years, he is used to dealing one-on-one with Hollywood
                      high-flyers. He aced a programming exam with 100% and DJs
                      on the Net .
                    </h4>
                  </div>
                  <Link href={"/about/about-robin"}>
                    <button>Learn more about Robin</button>
                  </Link>
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.AboutSec1}>
                  <div className={styles.ImageContainer}>
                    <Image src={TamProfile} alt="Logo" fluid />
                    <Image
                      src={Logo}
                      alt="Logo"
                      fluid
                      style={{ width: "138px", height: "94px" }}
                    />
                  </div>
                  <h3>Tam Moudden, Tech Director, Surge-on Up</h3>
                  <div className={styles.AboutSec1Text}>
                    <h3>Tam Moudden is THE Web IASEO Specialist</h3>
                    <h4>
                      An Optimisation Master par excellence. He has a BA in
                      Computer Science from Cambridge and 25 years experience
                      helping Aesthetic Surgeons, from Beverly Hills to
                      Barcelona and beyond.
                    </h4>
                  </div>
                  <Link href={"/about/about-tam"}>
                    <button>Learn more about Tam</button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
}