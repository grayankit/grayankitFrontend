import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Myaccount() {
  const [token, settoken] = useState("user")
  const router = useRouter()

  useEffect(() => {
    settoken(localStorage.getItem('token'))
    if(!token){
      router.push("/")
    }
  })
  
  return (
    <div className="container">
      <h1 className="text-purple-600 text-2xl text-center font-bold" token={token}>Change What We Know About You</h1>
    </div>
  )
}

export default Myaccount
