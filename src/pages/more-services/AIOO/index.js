import Link from "next/link";
import styles from "../ms-styles.module.css";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import logo from "../images/logo.jpg";
import Tapme from "../images/tapme.png";
import Pricing2 from "../images/pricing2.png";


export default function MoreServices() {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Link href={"/more-services"}>
          <button>More Services</button>
        </Link>
      </div>
      <div className={styles.moreServices}>
        <div className={styles.moreServicesContainer}>
          <div className={styles.singleServiceDesContainer}>
            <h3>AIOO</h3>
            <p>
              Google&apos;s AI Overviews represent the future of search, already
              starting to appear above even Paid Ads (PPC)! <br /> This is where
              tomorrow&apos;s Clients will find you.
              <br />As search evolves, AI Overviews will dominate discovery.
              When someone searches &quot;best facelift surgeon&quot;,
              Google&apos;s AI blends &ldquo;mentions&rdquo; from all
              authoritative sources. You must be among them.
              <br /> AIOO positions you for this inevitable shift. Practices
              optimised now will gain massive visibility as AI-driven search
              becomes the norm,
              <br /> It will build the trust that is so crucial for Surgeons
              through recommendations.
              <br />
              This isn&apos;t just another marketing trend—it&apos;s the next
              era of digital discovery.
              <br /> Most Surgeons haven&apos;t heard of AIOO. Jump on now, ride
              the wave with Surge-on Up!
              <Image src={logo} height={12} width={15} alt="Logo" />
            </p>
          </div>
        </div>
        <div className={styles.tapmeContainer}>
          <Image src={Pricing2} className={styles.tapme} alt="Logo" />
        </div>
        <div className={styles.tapmeContainer}>
          <Image src={Tapme} className={styles.tapme} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
