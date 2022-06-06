import React from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

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
        <div className="md:flex lg:flex hidden flex-col float-right h-5/6 overflow-auto w-2/6 scroll-auto">
          <ul className="list-none">
            <li className="border-1 rounded-xl border-gray-400 text-lg text-gray-600 text-center m-5 p-2 hover:cursor-pointer hover:text-white hover:bg-purple-600 hover:shadow-lg hover:shadow-black hover:text-xl shadow-black shadow-md">
              <span className="text-lg">Introduction to python</span>
            </li>
            <li className="border-1 rounded-xl border-gray-400 text-lg text-gray-600 text-center m-5 p-2 hover:cursor-pointer hover:text-white hover:bg-purple-600 hover:shadow-lg hover:shadow-black hover:text-xl shadow-black shadow-md">
              <span className="text-lg">Python Installation</span>
            </li>
            <li className="border-1 rounded-xl border-gray-400 text-lg text-gray-600 text-center m-5 p-2 hover:cursor-pointer hover:text-white hover:bg-purple-600 hover:shadow-lg hover:shadow-black hover:text-xl shadow-black shadow-md">
              <span>Data types in python</span>
            </li>
          </ul>
        </div>
        {/* for displaying the video */}
        <div className="border-gray-500 border-1 max-w-fitxl md:h-4/5 lg:h-4/5 overflow-hidden h-72">
          <iframe
            src="https://www.youtube.com/embed/rmIoA9DlaK0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="jsx-2880253090 w-full h-full"
          />
        </div>
        {/* content Navba rStarts here */}
        <nav className="jsx-2880253090 mx-2 px-3 tabs flex sm:flex-row overflow-x-scroll lg:overflow-x-hidden">
          <button
            data-target="panel-1"
            className="jsx-2880253090 tab active text-gray-600 py-2 px-2 block hover:text-purple-500 focus:outline-none border-b-2 font-medium border-purple-500"
          >
            Overview
          </button>
          <button
            data-target="panel-2"
            className="jsx-2880253090 tab active text-gray-600 py-2 px-2 block hover:text-purple-500 focus:outline-none  font-medium border-purple-500"
          >
            Q&amp;A
          </button>
          <button
            data-target="panel-2"
            className="jsx-2880253090 tab active text-gray-600 py-2 px-2 block hover:text-purple-500 focus:outline-none  font-medium border-purple-500"
          >
            Downloads
          </button>
          <button
            data-target="panel-2"
            className="jsx-2880253090 tab active text-gray-600 py-2 px-2 block hover:text-purple-500 focus:outline-none  font-medium border-purple-500"
          >
            Announcements
          </button>
        </nav>
        <div className="panels">
          <div className="panel-1">
            <h1>hello</h1>
          </div>
          <div className="panel-2">
            <h1>I am pannel 2</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slug;
