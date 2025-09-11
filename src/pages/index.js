import styles from "@/styles/Home.module.css";
import Header from "@/components/header/header";
import Landing from "@/components/landing/landing";
import Services from "@/components/services/services";

export default function Home() {
  return (
    <>
      <Header />
      <Landing/>
      <Services/>
    </>
  );
}
