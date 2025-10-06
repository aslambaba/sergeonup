import Link from "next/link";
import styles from "./ms-styles.module.css"

export default function MoreServices() {

    const moreServices = [
        { 
            title: "Google AI Overview",
            description: "Optimisation (AIOO)",
            link: "AIOO"
        },
        {
            title:"AI Search Engine",
            description:"Optimisation (AISEO)",
            link: "AISEO"
        },
        {
            title: "Google Business Profile",
            description: "Optimisation (GBPO)",
            link: "GBP"
        },
        {
            title: "Business Directory Listings",
            description: " ",
            link: "AIOO"
        },
        {
            title: "Keywords Optimisation",
            description: " ",
            link: "AIOO"
        },
        {
            title: "Backlinks Optimisation",
            description: " ",
            link: "AIOO"
        },
        {
            title: "Image Tag Optimisation",
            description: " ",
            link: "AIOO"
        },
        {
            title: "Cut Your Card Costs",
            description: " ",
            link: "AIOO"
        }
    ]

    return (
      <div className={styles.moreServices}>
        <div className={styles.moreServicesContainer}>
          {moreServices.map((item, index) => {
            return (
              <Link href={`/more-services/${item.link}`} key={index}>
              <div key={index} className={styles.singleServiceContainer}>
                <h3>{item.title}</h3>
                <h3>{item.description}</h3>
              </div></Link>
            );
          })}
        </div>
      </div>
    );
}