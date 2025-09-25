import { AuthProvider } from '@/context/AuthContext'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "../styles/Home.module.css"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <AuthProvider>
      <main className={styles.mainContent}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
    <Footer/>
    </>
  )
}