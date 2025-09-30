import { AuthProvider } from '@/context/AuthContext'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "../styles/Home.module.css"
import { MusicProvider } from '../context/MusicContext';
import WelcomeMusicPopup from '../click/WelcomeMusicPopup/WelcomeMusicPopup';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MusicProvider>
        {/* Welcome Music Popup - Shows on first load */}
        <WelcomeMusicPopup />
        
        {/* Header needs to be INSIDE MusicProvider because it uses useMusic() */}
        <Header />
        
        <main className={styles.mainContent}>
          <Component {...pageProps} />
        </main>
        
        <Footer />
      </MusicProvider>
    </AuthProvider>
  );
}