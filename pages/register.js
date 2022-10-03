import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

function Register() {
    //use state declaration of all variables for form
    const [firstname, setfirstname] = useState("")
    const [secondname, setsecondname] = useState("")
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [passwd, setpasswd] = useState("")
    const [conpasswd, setconpasswd] = useState("")

    async function handleRegister(e) {
		e.preventDefault()
        if(passwd == conpasswd){
            const RegisterInfo={
                fname:firstname,
                lname:secondname,
                email:email,
                username:username,
                password:passwd,
                cpasswd:conpasswd
            }
            const register = await fetch("https://strapi.grayankit.codes/api/auth/local/register",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RegisterInfo)
            })
            const registerResponse = await register.json();
            console.log(registerResponse)
			toast('Account created', { hideProgressBar: false, autoClose: 2000, type: 'success' })
			setfirstname("")
			setconpasswd("")
			setemail("")
			setsecondname("")
			setpasswd("")
			setusername("")
        }
		else{
			toast('Password and Confirm Password Do not match', { hideProgressBar: true, autoClose: 2000, type: 'error' })
		}

    }

  return (
    // you have to implement cpacha here in this page
// <!-- Container -->
		<div className="container mx-auto">
            <Head>
            <title>Register to the New World</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
			<ToastContainer />
			<div className="flex justify-center px-6 my-12">
				{/* <!-- Row --> */}
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					{/* <!-- Col --> */}
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}
					></div>
					{/* <!-- Col --> */}
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										First Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
                                        onChange={e => setfirstname(e.target.value) }
										placeholder="First Name"
                                        value={firstname}
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Last Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
                                        onChange={e => setsecondname(e.target.value) }
										placeholder="Last Name"
                                        value={secondname}
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
                                    onChange={e => setemail(e.target.value) }
									placeholder="Email"
                                    value={email}
								/>
							</div>
                            <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
									Username
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
                                    onChange={e => setusername(e.target.value) }
									placeholder="Username"
                                    value={username}
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
                                        onChange={e => setpasswd(e.target.value) }
										placeholder="******************"
                                        value={passwd}
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
										Confirm Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
                                        onChange={e => setconpasswd(e.target.value) }
										placeholder="******************"
                                        value={conpasswd}
									/>
								</div>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									onClick={(e) => handleRegister(e)}
								>
									Register Account
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div className="text-center">
								<Link href="/login">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								>
									Already have an account? Login!
								</a>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Register