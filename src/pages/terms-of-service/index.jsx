import Header from "@/components/header/header"
import styles from "./tos.module.css"
import RobinImg from "./images/robin-profile.png"
import TamImg from "./images/tam-profile.png"
import Bar from "./images/bar.png"
import Image from "next/image";
import Footer from "@/components/footer/footer";


export default function TOS(){
    return (
      <div className={styles.TosMainSection}>
        <h1>Terms of Service (TOS)</h1>

        <div className={styles.TosTextContainer}>
          <div className={styles.TosCOCSection}>
            <h2>OUR CODE OF CONDUCT</h2>
            <h1>WE PLEDGE:</h1>
            <p>We will act with 100% integrity</p>
            <p>We will always be honest and ethical</p>
            <p>What we say will be correct and truthful</p>
            <p>We will treat you with respect. We are cheerful.</p>
            <p>We won’t pressure you to buy any of our services.</p>
            <p>But they are always here for you. You just have to ask.</p>
            <p>We don’t hold grudges or take revenge. We leave that to Karma</p>
            <p>
              We won’t share your information with anyone without your consent.
            </p>
          </div>
          <div className={styles.COCImageSec}>
            <Image src={RobinImg} alt="Logo" width={250} height={310} />
            <Image src={Bar} alt="Logo" width={500} height={70} />
            <Image src={TamImg} alt="Logo" width={250} height={310} />
          </div>
        </div>

        <div className={styles.TosTextContainer2}>
          <div className="title-section">
            <p>
              Welcome to <span style={{ color: "#006633" }}>Surge-on Up</span>.
              By using our services,{" "}
              <span style={{ color: "#006633" }}>you agree</span> to these Terms
              of Service. Please read them{" "}
              <span style={{ color: "#006633" }}>carefully</span>.
            </p>
            <h3>1. INTRODUCTION</h3>
            <p>
              <span style={{ color: "#006633" }}>Surge-on Up</span> provides
              online consultancy services, including
              <span style={{ color: "#006633" }}>
                connecting Aesthetic Surgeons with Clients
              </span>
              . These Terms of Service govern your{" "}
              <span style={{ color: "#006633" }}>use of our services</span>.
            </p>

            <h3>2. SERVICES</h3>
            <p>We offer various services, including:</p>
            <ul>
              <li>
                "<span style={{ color: "#006633" }}>Ten Clients</span> Within A
                Month Offer"
              </li>
              <li>
                "<span style={{ color: "#006633" }}>Free Website Audit</span>{" "}
                Offer"
              </li>
              <li>
                "<span style={{ color: "#006633" }}>Cut Card Costs App</span>{" "}
                Demonstration Offer"
              </li>
            </ul>
            <p>
              We may{" "}
              <span style={{ color: "#006633" }}>add or remove Services</span>,
              from time to time at our sole discretion.
            </p>

            <h4>3. PAYMENT TERMS</h4>
            <h5>3.1. Free Website Audit Offer</h5>
            <p>
              The <span style={{ color: "#006633" }}>Free Website Audit</span>{" "}
              Offer is comprehensive and complete{" "}
              <span style={{ color: "#006633" }}>
                without charge or obligation
              </span>
              . It consists of multiple separate Search Engine Optimisation
              (SEO) Audits, including:
            </p>
            <ol>
              <li>
                Client's{" "}
                <span style={{ color: "#006633" }}>
                  Google Business Profile
                </span>{" "}
                (GBP)
              </li>
              <li>
                <span style={{ color: "#006633" }}>Keywords</span>
              </li>
              <li>
                <span style={{ color: "#006633" }}>Traffic</span>
              </li>
              <li>
                <span style={{ color: "#006633" }}>Backlinks</span>
              </li>
              <li>
                <span style={{ color: "#006633" }}>Domain Authority</span> (DA)
              </li>
              <li>
                Listings in{" "}
                <span style={{ color: "#006633" }}>Business Directories</span>
              </li>
              <li>
                <span style={{ color: "#006633" }}>Load Speed</span>
              </li>
              <li>
                <span style={{ color: "#006633" }}>Image Checks</span>
              </li>
              <li>
                <span style={{ color: "#006633" }}>Description Checks</span>
              </li>
            </ol>
            <h5>3.2 Ten Clients in Month Offer</h5>
            <p>
              <span style={{ color: "#006633" }}>Payment</span> for this offer
              is <span style={{ color: "#006633" }}>due upfront</span> but in
              the unlikely event that we{" "}
              <span style={{ color: "#006633" }}>
                do not deliver 10 Clients within 30 days
              </span>{" "}
              we{" "}
              <span style={{ color: "#006633" }}>GUARANTEE a FULL REFUND.</span>
            </p>
            <p>
              3.2.1 Length of Commitment We are always here for you.{" "}
              <span style={{ color: "#006633" }}>Your commitment to us</span> is{" "}
              <span style={{ color: "#006633" }}>ONE MONTH at a time</span>.
            </p>
            <h5>3.3. Cut Card Costs Demonstration Offer</h5>
            <p>
              The <span style={{ color: "#006633" }}>Supplier</span> has
              promised to offer a{" "}
              <span style={{ color: "#006633" }}>Demonstration</span> of their
              Cut Card Costs App within 24 hours. Although this is beyond our
              control, if the Client informs us that they have not received a
              demonstration within 24 hours, we will chase it for them. There is
              no <span style={{ color: "#006633" }}>charge or obligation</span>{" "}
              for this offer. It is under the Terms Of Service (TOS) of Coherent
              Healthcare Ltd.
            </p>
            <h5>3.4. Disclaimer</h5>
            <p>
              If the Client takes out{" "}
              <span style={{ color: "#006633" }}>a subscription</span> and does
              not{" "}
              <span style={{ color: "#006633" }}>
                cancel it within 3 months
              </span>
              , the Supplier will{" "}
              <span style={{ color: "#006633" }}>pay us £9</span> for every
              later month the subscription runs. This is{" "}
              <span style={{ color: "#006633" }}>not</span> why we make this
              offer to our Clients. it is{" "}
              <span style={{ color: "#006633" }}>superb value</span> for them.
            </p>
            <h4>4. NO REPRODUCTION WITHOUT PERMISSION</h4>
            <p>
              <span style={{ color: "#006633" }}>No</span> Surge-on Up{" "}
              <span style={{ color: "#006633" }}>content</span> may be{" "}
              <span style={{ color: "#006633" }}>copied</span>, reproduced,
              republished, uploaded, posted, transmitted, distributed, used for
              public or commercial purposes, or{" "}
              <span style={{ color: "#006633" }}>downloaded in any way</span>{" "}
              unless{" "}
              <span style={{ color: "#006633" }}>written permission</span> is
              expressly granted by{" "}
              <span style={{ color: "#006633" }}>
                Robin Grantham. Modification
              </span>{" "}
              of the content or use of the content for any other purpose is a
              <span style={{ color: "#006633" }}>
                violation of the copyright
              </span>{" "}
              and other proprietary rights of Robin Grantham and Surge-on Up.
              Such use or modification may be subject to monetary{" "}
              <span style={{ color: "#006633" }}>damages and penalties</span>.
              You <span style={{ color: "#006633" }}>may not distribute</span>,
              modify, transmit or use the content of the Site or any Content,
              including any software, tools, graphics and/or sound files, for
              public or commercial purposes without the{" "}
              <span style={{ color: "#006633" }}>express written permissi</span>
              on of Robin Grantham.
            </p>
            <h4>5. CHANGES</h4>
            <div className="sub-section">
              <h5>5.1 Changes to Charges</h5>
              <p>
                These charges may be{" "}
                <span style={{ color: "#006633" }}>revised</span> up or down
                from time to time. At our sole discretion.
              </p>
            </div>
            <div className="sub-section">
              <h5>5.2 Changes to Terms</h5>
              <p>
                We may <span style={{ color: "#006633" }}>update</span> these
                Terms of Service from time to time. We will
                <span style={{ color: "#006633" }}> notify</span> you of any
                changes by posting the new Terms on our website.
              </p>
            </div>
            <h4 className="contact-heading">CONTACT US</h4>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a href="mailto:robin@surgeeonup.com?subject=TOS%20ENQUIRY">
                <span style={{ color: "#006633" }}>robin@surgeeonup.com</span>
              </a>{" "}
              with <span style={{ color: "#006633" }}>“TOS ENQUIRY”</span> in
              the subject line.
            </p>
            <p className="disclaimer-notice">
              <span style={{ color: "#006633" }}>No Sales Pitches</span>,
              thanks, you will be{" "}
              <span style={{ color: "#006633" }}>
                blocked. AESTHETIC SURGEONS
              </span>{" "}
              only.
            </p>
            <p className="last-updated">LAST UPDATED: Saturday 31 May 2025</p>
          </div>
        </div>
      </div>
    );
}