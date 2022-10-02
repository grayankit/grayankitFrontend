import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NextNProgress from "nextjs-progressbar";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect ,useState} from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState({value:null})
  const [key, setkey] = useState(0)
  const router = useRouter()

  useEffect(()=>{
    // console.log("Use Effect is Running")
    const token=localStorage.getItem('token')
    // console.log(token)
    if(token){
      // console.log(token)
      setuser({value:token})
      setkey(Math.random())
    }

  },[router.query])
  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setkey(Math.random())
    setuser({value:null})
    toast('Logged Out', { hideProgressBar: true, autoClose: 2000, type: 'success' })
  }
  console.log(logout)
  return <>
    <Navbar key={key} user={user.value} logout={logout}/>
    <NextNProgress
    color='#7e22ce'
    height={4}
    />
    <ToastContainer/>
    <Component {...pageProps} />
    <Footer/>

  </>
}

export default MyApp
