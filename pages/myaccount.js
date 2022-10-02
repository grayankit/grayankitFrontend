import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Myaccount() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
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
