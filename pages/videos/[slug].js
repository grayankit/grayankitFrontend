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
        <div className="md:flex lg:flex hidden flex-col border-2 border-black float-right h-5/6 overflow-scroll w-2/6">
          <ul className="list-none">
            <li className="border-2 border-purple-600 text-lg text-gray-600 text-center m-2 hover:cursor-pointer hover:text-white hover:bg-gray-600">
              <span className="text-lg">Introduction to python</span>
            </li>
            <li className="border-2 border-purple-600 text-lg text-gray-600 text-center m-2 hover:cursor-pointer hover:text-white hover:bg-gray-600">
              <span className="text-lg">Python Installation</span>
            </li>
            <li className="border-2 border-purple-600 text-lg text-gray-600 text-center m-2 hover:cursor-pointer hover:text-white hover:bg-gray-600">
              <span>Data types in python</span>
            </li>
          </ul>
        </div>
        {/* for displaying the video */}
        <div className="border-black border-2 max-w-fitxl md:h-4/5 lg:h-4/5 overflow-hidden h-72">
          <iframe
            src="https://www.youtube.com/embed/rmIoA9DlaK0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="jsx-2880253090 w-full h-full"
          />
        </div>
        {/* Start building navbar of content from here */}
      </section>
    </div>
  );
}

export default Slug;
