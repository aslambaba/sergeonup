import Header from "@/components/header/header";
import styles from "./contact.module.css";
import Image from "next/image";
import WhatsAppImg from "./images/whatsapp.png";
import ChatWithRobin from "./images/chatWithRobin.jpg";
import Footer from "@/components/footer/footer";


export default function Contact() {
    return (
      <div className={styles.contactMainSection}>
        <h2>Contact</h2>
        <h4>SURGEONS: Robin is here for you 24/7, if need be, on WhatsApp</h4>

        <div className={styles.contactWrappeer}>
          <div className={styles.contactTextSec1}>
            <p>
              <span style={{ color: "#006633" }}>
                BUSINESS HOURS: 8am - 4pm PST
              </span>{" "}
              (9am - 12mn BST) Mon to Fri BUT IF IT’S{" "}
              <span style={{ color: "#006633" }}>URGENT</span>, you can contact{" "}
              <span style={{ color: "#006633" }}>ANYTIME</span> 24/7/365
            </p>
            <br />
            <div className={styles.Contact3ContentAlignment}>
              <p>Text, voice or video, its your call</p>
              <Image src={WhatsAppImg} alt="Logo" width={50} height={50} />
              <p>
                We can chat{" "}
                <span style={{ color: "#006633" }}>about anything</span> you
                like, <br /> even just to pass the time of day!
              </p>
            </div>
            <p>
              If its a Website SEO issue we’ll resolve it for Clients within 24
              hours, no charge
            </p>
            <p>
              <span style={{ color: "#006633" }}>No Suppliers</span>, thanks,
              you will be{" "}
              <span style={{ color: "#006633" }}>
                blocked - - - A E S T H E T IC S U R G E O N S only!
              </span>
            </p>
          </div>
          <div className={styles.contactTextSec1}>
            <div className={styles.Contact3ContentAlignment}>
              <h5 style={{ color: "#006633" }}>LIKE A FREE CONSULTATION?</h5>
              <Image src={ChatWithRobin} alt="Logo" width={100} height={50} />
              <h5>BOOK A SCHEDULED 10+ MINS SLOT</h5>
            </div>
          </div>

          <div
            className={styles.contactTextSec1}
            style={{ marginBottom: "15px" }}
          >
            <div className={styles.Contact3ContentAlignment0}>
              <h5>
                <span style={{ color: "#006633" }}>W H A T ‘ S Y O U R</span>{" "}
                <br /> What things do you like about our Website? What do you
                dislike?
              </h5>
              <Image src={WhatsAppImg} alt="Logo" width={50} height={50} />
              <h5>
                <span style={{ color: "#006633" }}>O P I N I O N ?</span> <br />{" "}
                How can we improve? What other Services would you like?
              </h5>
            </div>

            <div className={styles.Contact3ContentAlignment2}>
              <h5>
                <span style={{ color: "#006633", fontSize: "18px", fontWeight: "bold" }}>
                  WHAT’S YOUR OPINION?
                </span>
                <br />
                <Image src={WhatsAppImg} alt="Logo" width={50} height={50} />
                <br />
                Do you like or dislike anything about our Website? How could we
                improve? Any other Services would you like to see?
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
}