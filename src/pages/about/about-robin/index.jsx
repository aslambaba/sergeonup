import Header from "@/components/header/header";
import styles from "./aboutrobin.module.css";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.jpg";
import Img3 from "./images/img3.png";
import Img4 from "./images/img4.jpg";
import Img5 from "./images/img5.jpg";
import Img6 from "./images/img6.jpg";
import Img7 from "./images/img7.jpg";
import Image from "next/image";
import Footer from "@/components/footer/footer";


export default function AboutRobin() {
  return (
    <div className={styles.AboutRobinMainContainer}>
      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img1}
            alt="Logo"
            fluid
            style={{ width: "180px", height: "120px" }}
          />
          <Image
            src={Img2}
            alt="Logo"
            fluid
            style={{ width: "100px", height: "50px" }}
          />
        </div>
        <h3>Robin and John in Verona</h3>
        <div className={styles.AboutRobinSecText}>
          <h3>
            Robin was the Chief Makeup Artist on “Inspector Morse”. He worked on
            30 of them.
          </h3>
          <h4>
            When Robin made John Thaw up for the first time, John asked him what
            was the last thing he’d worked on. Self aggrandisement was the
            Film-Biz norm but despite having a Bond under his belt, Robin
            replied, candidly,,“ Mini-cabbing, John”. His honesty led to a long
            working friendship together. John offered him all the remaining 32
            episodes, apart from the one in Australia, which wasn’t in his gift.
          </h4>
        </div>
      </div>

      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img3}
            alt="Logo"
            fluid
            style={{ width: "180px", height: "120px" }}
          />
          <Image
            src={Img4}
            alt="Logo"
            fluid
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <h3>
          The Microsoft Network Account at SITEL A Nokia 5146 from Mobiles
          Direct
        </h3>
        <div className={styles.AboutRobinSecText}>
          <h3>
            Robin worked on the fledgling Internet and rode the crest of the
            mobile phone wave
          </h3>
          <h4>
            He passed a C Programming Exam with a perfect score, and worked on
            all aspects of the MSN Account and eventually led the Team, until
            redundancy struck. Early access to MS Office allowed him to learn to
            code Excel. He then worked at Mobiles Direct in Isleworth, slashing
            late deliveries from 15% down to 1.5%. But the remainder bugged him.
            He wrote a macro to collate phone data from the Company’s mainframe
            and Customer details in Excel and email Claims every day. He saved
            them £40k pa.
          </h4>
        </div>
      </div>

      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img5}
            alt="Logo"
            fluid
            style={{ width: "180px", height: "120px" }}
          />
          <Image
            src={Img6}
            alt="Logo"
            fluid
            style={{ width: "100px", height: "50px" }}
          />
        </div>
        <h3>A mug saying “I am a genius”</h3>
        <div className={styles.AboutRobinSecText}>
          <h3>
            This was a gift from his favourite Manager on completion of his
            initial task
          </h3>
          <h4>
            At LeasePlan UK, Robin’s first challenge was to improve the time
            Compaq Computer Drivers had to wait to learn which cars were
            available from the pool. it had been a bete nior that had plagued
            his new Manager, Lucy, for several years. He wrote a macro to cut a
            flagged subset and email it in seconds. She was so pleased, that in
            an unforgettable and endearing gesture, she gave him the mug above.
          </h4>
        </div>
      </div>

      <div className={styles.AboutRobinSec}>
        <div className={styles.ImageContainer}>
          <Image
            src={Img7}
            alt="Logo"
            fluid
            style={{ width: "140px", height: "140px" }}
          />
          <Image
            src={Img6}
            alt="Logo"
            fluid
            style={{ width: "100px", height: "50px" }}
          />
        </div>
        <h3>David Brennan ex-CEO, LeasePLan UK</h3>
        <div className={styles.AboutRobinSecText}>
          <h3>
            David was the LP UK Boss when Robin worked in the Data Management
            Team
          </h3>
          <h4>
            Robin was one of the fantastic people at LeasePlan who excelled at
            his job. Always positive in his attitude and a can-do delivery
            person who got things done. From colour-coded spreadsheets, a first
            at the time, to Customer Service excellence with the Mary Gober
            training and practice - he did it all. A person you can trust and
            who everyone liked. I recommend him 100%.”
          </h4>
        </div>
      </div>
    </div>
  );
}
