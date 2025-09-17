import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <div>
        <div className={styles.mainLandingBody}>
            <div className={styles.mainLandingContainer}>
                <h3>Surgeons are HEROES!</h3>
                <h4>They transform people’s lives.</h4>
            </div>
        </div>
        <div className={styles.mainLandingBody2}>
            <div className={styles.mainLandingContainer2}>
                <p>Surge-on Up is a combination of Robin Grantham's personal consulting and Tam Moudden's AI  and Google expertise.</p>
                <p>Robin is a visionary CEO, according to not one but two Business Magazines, TradeFlock and CIS. He has 25 years’ experience working with legendary Hollywood Stars up close and personal. He has a BAFTA nomination.</p>
                <p>Tam has a Computer Science Degree from Cambridge, 25 years experience in SEO and  a recent Semrush Certification in AI0. Plus top global Aesthetic Surgeon’s plaudits from Beverly Hills to Barcelona, the UAE and beyond. </p>
            </div>
        </div>
    </div>
  );
}
