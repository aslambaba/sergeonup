import styles from "@/styles/Home.module.css";
import Header from "@/components/header/header";
import Landing from "@/components/landing/landing";
import Services from "@/components/services/services";
import Video from "@/components/video/video";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Landing/>
      <Services/>
      <Video/>
      <Footer/>
    </>
  );
}
