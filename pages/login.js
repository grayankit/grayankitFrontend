import React from 'react'
import Head from 'next/head'
import { useState} from 'react'
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import { setCookie } from 'nookies'
import 'react-toastify/dist/ReactToastify.css';
import Router, { useRouter } from 'next/router';


function Login() {
    const [email, setemail] = useState("")
    const [passwd, setpasswd] = useState("")
    const router = useRouter()
    async function handleLogin(e){
        e.preventDefault()
        if(email != ""){
            const loginInfo = {
                identifier: email,
                password: passwd
            }
            const login =await fetch("http://localhost:1337/api/auth/local",{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
                })
                const loginResponse = await login.json();
                console.log(loginResponse)
                setCookie(null, 'jwt', loginResponse.jwt , {
                    path: '/',
                })
                setemail("")
                setpasswd("")
                toast('Logged In', { hideProgressBar: false, autoClose: 2000, type: 'success' })
                toast('Redirecting...', { hideProgressBar: false, autoClose: 1000, type: 'warning' })
                router.push('/')
        }
        else{
            toast('Enter Email', { hideProgressBar: false, autoClose: 2000, type: 'error' })
        }
    }
  return (
    // <!-- component -->
// <!-- Container -->
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
            <Head>
            <title>Enter to the New World</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
        <ToastContainer/>
        {/* <!-- Login component --> */}
        <div className="flex shadow-md">
            {/* <!-- Login form --> */}
            <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width: '24rem', height: '32rem'}}>
            <div className="w-72">
                {/* <!-- Heading --> */}
                <h1 className="text-xl font-semibold">Welcome back</h1>
                <small className="text-gray-400">Welcome back! Please enter your details</small>

                {/* <!-- Form --> */}
                <form className="mt-4">
                <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">Email</label>
                    <input type="email" placeholder="Enter your Email or Username" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    value={email}
                    onChange={e => setemail(e.target.value) }
                    />
                </div>

                <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">Password</label>
                    <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" 
                    value={passwd}
                    onChange={e => setpasswd(e.target.value) }
                    />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                    <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                    <a href="#" className="text-xs font-semibold text-purple-700">Forgot password?</a>
                </div>

                <div className="mb-3">
                    <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                    onClick={(e) => handleLogin(e)}
                    >Sign in</button>
                </div>
                </form>

                {/* <!-- Footer --> */}
                <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                <a href="#" className="text-xs font-semibold text-purple-700">Sign up</a>
                </div>
            </div>
            </div>

            {/* <!-- Login banner --> */}
            <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{width: '24rem', height: '32rem'}}>
            <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg"/>
            </div>

        </div>
        </div>
  )
}

export default Login