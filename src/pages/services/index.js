import Header from "@/components/header/header";
import styles from "./services.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import WhatsappLogo from "./images/whatsapp.png";
import ChartImg from "./images/chart.jpg";
import LogoSeries from "./images/logoseries.jpg"
import Services from "@/components/services/services";
import Footer from "@/components/footer/footer";

export default function Service() {
    return (
      <div className={styles.ServicesMainSection}>
        <Header />
        <h2>Services</h2>
        <Container>
          <div className={styles.ServiceMainSec1}>
            <div className={styles.ServiceSec1}>
              <Row>
                <Col lg={8}>
                  <div>
                    <table>
                      <thead>
                        <tr style={{ backgroundColor: "#CCFFFF" }}>
                          <td>$</td>
                          <td style={{ color: "#006633" }}>£</td>
                          <td className={styles.tableText}>
                            WHAT WE CAN DO FOR YOU NO.1
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "#33FFCC" }}>
                          <td>FREE!</td>
                          <td style={{ color: "#006633" }}>FREE!</td>
                          <td className={styles.tableText2}>
                            FREE WEBSITE AUDIT
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={styles.whatsappSection}>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                    <h3>
                      CLICK ME! <br /> To ORDER
                    </h3>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles.ServiceSec2}>
              <p>
                <span className={styles.green}>Tam Moudden</span> is THE most{" "}
                <span className={styles.green}>prestigious</span> WEBSITE
                OPTIMISATION SPECIALIST for{" "}
                <span className={styles.green}>Aesthetic Surgeons</span>. His{" "}
                <span className={styles.green}>BA</span> in{" "}
                <span className={styles.green}>Computer Science</span>
                from <span className={styles.green}>Cambridge</span> laid the
                foundation for his{" "}
                <span className={styles.green}>quarter of a century</span>
                of practical research and implementation. He has helped the{" "}
                <span className={styles.green}>
                  top global Aesthetic Surgeons
                </span>{" "}
                from <span className={styles.green}>Beverly Hills</span> to
                Barcelona and beyond to boss their{" "}
                <span className={styles.green}>Marketing Agencies</span>.
              </p>
            </div>
            <div className={styles.ServiceSec3}>
              <Row>
                <Col lg={9}>
                  <p>
                    We’re currently offering a{" "}
                    <span className={styles.green}>FREE, no obligation</span>{" "}
                    full{" "}
                    <span className={styles.green}>EO Technical Audit</span>S of
                    your website. It’s{" "}
                    <span className={styles.green}>comprehensive</span>: it
                    includes your{" "}
                    <span className={styles.green}>Google & Bing</span> Business
                    Profiles, Keywords, Traffic, Backlinks, Domain Authority,
                    Load Speed, and much more.
                  </p>
                </Col>
                <Col lg={3}>
                  <h3>GET YOUR FREE AUDIT</h3>

                  <div className={styles.whatsappSectionSmall}>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                    <h3>
                      CLICK ME! <br /> To ORDER
                    </h3>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* MainSection2 */}

          <div className={styles.ServiceMainSec2}>
            <div className={styles.ServiceSec1}>
              <Row>
                <Col lg={8}>
                  <div>
                    <table>
                      <thead>
                        <tr style={{ backgroundColor: "#CCFFFF" }}>
                          <td>$</td>
                          <td style={{ color: "#006633" }}>£</td>
                          <td className={styles.tableText}>
                            WHAT WE CAN DO FOR YOU NO.2
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "#33FFCC" }}>
                          <td>5973</td>
                          <td style={{ color: "#006633" }}>4404</td>
                          <td className={styles.tableText2}>
                            10 CLIENTS A MONTH
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={styles.whatsappSection}>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                    <h3>
                      CLICK ME! <br /> To ORDER
                    </h3>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles.ServiceSec2}>
              <p>
                <span className={styles.green}>NEW!</span> SURGE-ON UP{" "}
                <span className={styles.green}>GUARANTEES</span> to get you{" "}
                <span className={styles.green}>10</span> quality{" "}
                <span className={styles.green}>Clients</span> within
                <span className={styles.green}>30 days</span>. Highly motivated
                Clients-to-be, actively seeking the exact Procedures or Services
                you offer. Ready to engage with you. NOT casual web surfers.
                Twenty-five years of data-driven marketing and proven Client
                acquisition techniques means we’re confident of delivering.
              </p>
            </div>
            <div className={styles.ServiceSec3}>
              <Row>
                <Col lg={12}>
                  <p>
                    You only{" "}
                    <span className={styles.green}>COMMIT a MONTH</span> at a
                    time. No Lock-Ins.{" "}
                    <span className={styles.green}>No one else</span>
                    gives you{" "}
                    <span className={styles.green}>results in a month</span>. We
                    think you might want to return. Again and again. It’s{" "}
                    <span className={styles.green}>your call</span>. Get at
                    least a{" "}
                    <span className={styles.green}>nine times return</span> on
                    your investment (<span className={styles.green}>ROI</span>).
                    We are so certain we can deliver you{" "}
                    <span className={styles.green}>10 Clients in 30 days</span>,
                    we will give you{" "}
                    <span className={styles.green}>your money back</span> if we
                    don’t succeed.
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          {/* MainSection3 */}

          <div className={styles.ServiceMainSec3}>
            <div className={styles.ServiceSec1}>
              <Image src={ChartImg} />
            </div>
            <div className={styles.ServiceSec2}>
              <p>
                You will get Backlinks, increasing Domain Authority, more
                quality Traffic, <span className={styles.green}>£500’</span>s
                worth each of both Business Listings & Image optimisations.{" "}
                <span className={styles.green}>ALL INCLUDED</span> - no Extras,
                no Hidden Charges.
              </p>
              <p>
                If you are weary of paying your{" "}
                <span className={styles.green}>Marketing Agency</span> for
                mediocre results, we are your Champions! We will{" "}
                <span className={styles.green}>arm</span> you and{" "}
                <span className={styles.green}>challenge</span>
                them to take effective{" "}
                <span className={styles.green}>action</span> for you. We’ll{" "}
                <span className={styles.green}>SUPERCHARGE</span> your business!
              </p>
              <p>
                <span className={styles.green}>What’ve you got to lose</span>?
                NOTHING! This is a <span className={styles.green}>NO-RISK</span>{" "}
                Investment! How can we make this super- ordinary offer? Because
                we’ve the best{" "}
                <span className={styles.green}>
                  Medical Search Engine Optimisation
                </span>{" "}
                (SEO) <span className={styles.green}>Expert</span> ever - with
              </p>
            </div>
            <div className={styles.ServiceSec3}>
              <Row>
                <Col lg={9}>
                  <p>
                    a <span className={styles.green}>BA</span> in{" "}
                    <span className={styles.green}>Computer Science</span> and{" "}
                    <span className={styles.green}>25 years</span> of experience
                    - - -<span className={styles.green}>Tam Moudden</span>.
                  </p>
                </Col>
                <Col lg={3}>
                  <div className={styles.whatsappSectionSmall}>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                    <h3>
                      CLICK ME! <br /> To ORDER
                    </h3>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* MainSection4 */}

          <div className={styles.ServiceMainSec4}>
            <div className={styles.ServiceSec1}>
              <Row>
                <Col lg={8}>
                  <div>
                    <table>
                      <thead>
                        <tr style={{ backgroundColor: "#CCFFFF" }}>
                          <td>$</td>
                          <td style={{ color: "#006633" }}>£</td>
                          <td className={styles.tableText}>
                            WHAT WE C A N DO FOR YOU No. 3
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "#33FFCC" }}>
                          <td>{"<124"}</td>
                          <td style={{ color: "#006633" }}>{"<97"}</td>
                          <td className={styles.tableText2}>
                            CUT CARD COSTS pm
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={styles.whatsappSection}>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                    <h3>
                      CLICK ME! <br /> To ORDER
                    </h3>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles.ServiceSec2}>
              <p>
                <span className={styles.green}>Jared was a CLINIC OWNER</span>,
                just like you. He ran Healthcare & Wellness Clinics. But Card
                Transaction Fees plagued him.
              </p>
              <p>
                Some UK Healthcare Practices spend{" "}
                <span className={styles.green}>£50,000 A YEAR</span> on
                collecting payments. It was{" "}
                <span className={styles.green}>too much</span>. He felt the
                money could be better spent than lining the Credit Card
                Companies’ coffers. On improving the{" "}
                <span className={styles.green}>Client Experience</span> and
                Clinical Facilities, for example.
              </p>
              <p>
                He formed a Team of other Owners. They had over 20 years of
                experience between them. They created a{" "}
                <span className={styles.green}>secure app</span> to transfer
                funds between Banks in 7 seconds. No set up costs, no machines.
              </p>
            </div>
            <div className={styles.ServiceSec3}>
              <Row>
                <Col lg={8}>
                  <p>
                    Would YOU like <span className={styles.green}>NO</span>{" "}
                    processing <span className={styles.green}>fees</span>? Then
                    scrap them - - -
                    <span className={styles.green}>FOREVER!</span>
                  </p>
                </Col>
                <Col lg={4}>
                  <div
                    className={styles.whatsappSectionSmall}
                    style={{
                      backgroundColor: "#33FFCC",
                      border: "4px solid #3366FF",
                      borderRadius: "20px",
                    }}
                  >
                    <h6
                      style={{ fontSize: "14px !important", fontWeight: "400" }}
                    >
                      DISCLAIMER: If you subscribe for 3 months. I’ll get £9 a
                      month in commission. But that’s not why I recommend it.
                      It’s because it’s a great deal!
                    </h6>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* MainSection5 */}

          <div className={styles.ServiceMainSec5}>
            <div className={styles.ServiceSec1FORLAST}>
              <Image src={LogoSeries} style={{ width: "100% !important" }} />
            </div>
            <div className={styles.ServiceSec2}>
              <p>
                All major <span className={styles.green}>Banks approve</span>{" "}
                it. It’s yours for a modest monthly subscription of{" "}
                <span className={styles.green}>LESS THAN $130</span>-£100.
              </p>
              <p>
                You <span className={styles.green}>wont be tied down</span>. You
                can go back to paying through the nose if you like. You only{" "}
                <span className={styles.green}>commit</span> a{" "}
                <span className={styles.green}>month</span> at a time, the same
                as our 10-Client offer. To paraphrase Eddie Izzard, “What’s
                you’re choice. Cake or Death?”{" "}
                <span className={styles.green}>You’re the Boss</span>. Get your
                money! Just
                <span className={styles.green}>one thing</span> to do, to{" "}
                <span className={styles.green}>see for yourself</span>.
              </p>
            </div>
            <div className={styles.ServiceSec3}>
              <Row>
                <Col lg={9}>
                  <p>
                    <span className={styles.green}>CLICK</span> the TO{" "}
                    <span className={styles.green}>ORDER</span> button to get
                    your{" "}
                    <span className={styles.green}>
                      FREE, NO-OBLIGATION DEMONSTRATION
                    </span>{" "}
                    within 24 hours. It takes less than 10 minutes to
                    experience.
                  </p>
                </Col>
                <Col lg={3}>
                  <div className={styles.whatsappSectionSmall}>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                    <h3>
                      CLICK ME! <br /> To ORDER
                    </h3>
                    <Image src={WhatsappLogo} alt="WhatsappLogo" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
}