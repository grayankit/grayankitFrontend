import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head';

function Slug() {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>
        <Head>
        <title>{slug} | Grayankit.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen">
          <div className='flex flex-col border-2 border-black float-right h-5/6 overflow-scroll w-2/6'>
              <ul className="list-none">
                  <li className='border-2 border-purple-600 text-lg text-gray-600 text-center m-2 hover:cursor-pointer hover:text-white hover:bg-gray-600'>
                      <span className="text-lg">Introduction to python</span>
                  </li>
                  <li className='border-2 border-purple-600 text-lg text-gray-600 text-center m-2 hover:cursor-pointer hover:text-white hover:bg-gray-600'>
                      <span className="text-lg">Python Installation</span>
                  </li>
                  <li className='border-2 border-purple-600 text-lg text-gray-600 text-center m-2 hover:cursor-pointer hover:text-white hover:bg-gray-600'>
                      <span>Data types in python</span>
                  </li>
              </ul>
          </div>
          {/* for displaying the video */}
          <div className='border-black border-2 max-w-fitxl h-96 overflow-auto'>
              <h1>hello world!</h1>
          </div>
      </section>
    </div>
  )
}

export default Slug