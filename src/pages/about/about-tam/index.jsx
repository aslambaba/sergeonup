import Header from "@/components/header/header";
import styles from "./abouttam.module.css";
import Img1 from "./images/Img1.png";
import Img2 from "./images/Img2.png";
import Img3 from "./images/Img3.jpg";
import Img4 from "./images/Img4.jpg";
import Img5 from "./images/Img5.jpg";
import Img6 from "./images/Img6.jpg";
import Img7 from "./images/Img7.jpg";
import Img8 from "./images/Img8.jpg";
import Image from "next/image";
import Footer from "@/components/footer/footer";


export default function AboutTam() {
  return (
    <div className={styles.AboutRobinMainContainer}>
      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img1}
            alt="Logo"
            fluid
            style={{ width: "150px", height: "160px" }}
          />
          <Image
            src={Img2}
            alt="Logo"
            fluid
            style={{ width: "100px", height: "50px" }}
          />
        </div>
        <h3>Dr Richard Chaffoo, California Hair</h3>
        <div className={styles.AboutRobinSecText}>
          <h3>
            Richard is one of the few Aesthetic Surgeons ever to be Triple-Board
            Certified
          </h3>
          <h4>
            He is the top Beverly Hills and La Jolla, San Diego Aesthetic
            Surgeon. Tam optimised his website and helped select his logo.<br/>
            “We’ve worked with Tam for several years. He is extremely
            professional in his approach to our website and online presence. His
            unparalleled SEO strategies have expanded our businesses.”
          </h4>
        </div>
      </div>

      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img3}
            alt="Logo"
            fluid
            style={{ width: "150px", height: "160px" }}
          />
          <Image
            src={Img4}
            alt="Logo"
            fluid
            style={{ width: "120px", height: "120px" }}
          />
        </div>
        <h3>Dr Zachary Farris, ZF Plastic Surgery</h3>
        <div className={styles.AboutRobinSecText}>
          <h3>Zachary is an influential Double-Certified Aesthetic Surgeon</h3>
          <h4>
            He is based in Dallas Texas and is approved to perform both Cosmetic
            and Hair Restoration procedures. RealSelf says he is one of the top
            1% influencers in plastic surgery. He has only worked with Tam since
            last October. In December, he emailed to say, “Thank you, Tam. 2024
            is the first Christmas I haven’t been worried about business leads
            for the New Year. My Diary is completely full!”
          </h4>
        </div>
      </div>

      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img5}
            alt="Logo"
            fluid
            style={{ width: "130px", height: "100px" }}
          />
          <Image
            src={Img6}
            alt="Logo"
            fluid
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <h3>Membership of Semrush and Yext</h3>
        <div className={styles.AboutRobinSecText}>
          <h3>Tam is a comprehensive and consumate SEO Professsional</h3>
          <h4>
            Google Analytics is good. it’s free but its data is a month old.
            Semrush provides live traffic and many informative tools, for
            Keywords, Backlinks and Competitors. Tam is a certified Semrush
            Technical SEO Analyst. He aced four of their exams, including AI, in
            2024. It costs £900 pa but is invaluable He is also a Member of
            Yext. It costs £500 pa but allows us to offer our Clients extra
            Business Listings at no added cost.
          </h4>
        </div>
      </div>

      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img7}
            alt="Logo"
            fluid
            style={{ width: "220px", height: "120px" }}
          />
          <Image
            src={Img8}
            alt="Logo"
            fluid
            style={{ width: "220px", height: "50px" }}
          />
        </div>
        <h3>VoyageLA</h3>
        <div className={styles.AboutRobinSecText}>
          <h3>“VoyageLA” is a Niche Los Angeles Magazine</h3>
          <h4>
            A niche Californian magazine, VoyageLA, plans to interview Tam in
            2025. It is based in Culver City, once home to the legendary MGM
            Film Studios, close to Beverly Hills and Hollywood. Founded a decade
            ago it celebrates Individuals. The interview is one in their
            Inspiring Stories series, that spotlight creative and innovative LA
            denizens. It introduces trailblazing Entrepreneurs and Artists to
            its young, edgy audience.
          </h4>
        </div>
      </div>
    </div>
  );
}
