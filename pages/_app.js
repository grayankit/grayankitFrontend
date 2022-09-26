import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <NextNProgress
    color='#7e22ce'
    height={4}
    />
    <Component {...pageProps} />
    <Footer/>

  </>
}

export default MyApp
