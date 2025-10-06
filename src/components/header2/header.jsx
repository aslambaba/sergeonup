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
import { useRouter } from "next/router";

export default function Header() {
  const { musicEnabled, askForMusicPreference, setShowPlayer } = useMusic();
  const [showMusicControl, setShowMusicControl] = useState(false);
  const router = useRouter();

  const handleMusicIconClick = () => {
    if (musicEnabled) {
      setShowMusicControl(true);
    } else {
      askForMusicPreference();
    }
  };

  return (
    <>
      <div className={styles.stickyHeader}>
        {/* Changed Container to div with custom class for full width */}
        <div className={styles.fullWidthContainer}>
          <div className={styles.HeaderMain}>
            {/* section1 */}
            <div className={styles.container1}>
              <Link href="/about">
                <Image
                  className={styles.mainLogo}
                  src={MainLogo}
                  alt="Logo"
                  fluid
                />
              </Link>
            </div>

            {/* section2 */}
            <div className={styles.container2}>
              <div className={styles.menuItemSec}>
                <ul>
                  <li
                    className={router.pathname === "/" ? styles.active : ""}
                    style={{ justifyContent: "left" }}
                  >
                    <a href="/">Home</a>
                  </li>
                  <li
                    className={
                      router.pathname === "/services" ? styles.active : ""
                    }
                  >
                    <a href="/services">Services</a>
                  </li>
                  <li
                    className={
                      router.pathname === "/about" ? styles.active : ""
                    }
                  >
                    <a href="/about">About</a>
                  </li>
                  <li
                    className={
                      router.pathname === "/blogs" ? styles.active : ""
                    }
                  >
                    <a href="/blogs">Blog</a>
                  </li>
                  <li
                    className={
                      router.pathname === "/contact" ? styles.active : ""
                    }
                    style={{ justifyContent: "right" }}
                  >
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
              </div>
              <div className={styles.conatinerNoFee}>
                <Link href="/services">
                  <Image src={ProfitNF} width={"70%"} alt="Logo" />
                </Link>
              </div>
            </div>

            {/* section3 */}
            <div className={styles.container3}>
              <Link href="/contact">
                <Image
                  className={styles.mainLogo}
                  src={BootAchat}
                  alt="Logo"
                  fluid
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Music Control Popup */}
      <MusicControlPopup
        show={showMusicControl}
        onHide={() => setShowMusicControl(false)}
      />
    </>
  );
}
