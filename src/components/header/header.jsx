import React, { useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./header.module.css";
import MainLogo from "./images/logo.jpg";
import BootAchat from "./images/bookAchat.png";
import ProfitNF from "./images/profitornofee.png";
import MainLogo2 from "./images/musicnote.png";
import MusicControlPopup from "@/click/MusicControlPopup/MusicControlPopup";
import { useMusic } from "@/context/MusicContext";
import Link from "next/link";
import { useRouter } from 'next/router'; // Step 1: Import useRouter

export default function Header() {
  // 1. MusicContext se naya function lein
  // const { askForMusicPreference, musicEnabled } = useMusic();
  const { musicEnabled, askForMusicPreference, setShowPlayer } = useMusic();

  const [showMusicControl, setShowMusicControl] = useState(false);
  const router = useRouter(); // Step 2: Initialize router

  const handleMusicIconClick = () => {
    if(musicEnabled){
          setShowMusicControl(true);

    }else{
      askForMusicPreference();
    }
  };

  return (
    <>
      <div className={styles.stickyHeader}>
        <Container>
          <div className={styles.HeaderMain}>
            <Row>
              {/* Logo */}
              <Col lg={2} md={2} sm={2} xs={2} className="px-1">
                <Link href="/about">
                  <Image
                    className={styles.mainLogo}
                    src={MainLogo}
                    alt="Logo"
                    fluid
                  />
                </Link>
              </Col>

              {/* Menu Section */}
              <Col lg={8} md={8} sm={8} xs={8} className="px-1">
                <div className={styles.menuItemSec}>
                  <Row>
                    <Col lg={12}>
                      <ul>
                        {/* Step 3: Apply conditional class */}
                        <li className={router.pathname === "/" ? styles.active : ""}>
                          <a href="/">Home</a>
                        </li>
                        <li className={router.pathname === "/services" ? styles.active : ""}>
                          <a href="/services">Services</a>
                        </li>
                        <li className={router.pathname === "/about" ? styles.active : ""}>
                          <a href="/about">About</a>
                        </li>
                        <li className={router.pathname === "/blogs" ? styles.active : ""}>
                          <a href="/blogs">Blog</a>
                        </li>
                        <li className={router.pathname === "/contact" ? styles.active : ""}>
                          <a href="/contact">Contact</a>{" "}
                          <Image
                            className={styles.musicnoteIcon}
                            src={MainLogo2}
                            alt="Note"
                            onClick={handleMusicIconClick}
                            style={{ cursor: "pointer" }}
                          />
                        </li>
                      </ul>
                    </Col>
                    <Col lg={12}>
                      <div className={styles.conatinerNoFee}>
                        <Link href="/services">
                          <Image src={ProfitNF} width={"70%"} alt="Logo" />
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* Book a Chat Section */}
              <Col lg={2} md={2} sm={2} xs={2} className="px-1">
                <Link href="/contact">
                  <Image
                    className={styles.mainLogo}
                    src={BootAchat}
                    alt="Logo"
                    fluid
                  />
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Music Control Popup */}
      <MusicControlPopup
        show={showMusicControl}
        onHide={() => setShowMusicControl(false)}
      />
    </>
  );
}