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
      <section className="h-fit">
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
        <div className="border-gray-500 border-1 max-w-fitxl md:h-4/5 md:min-h-max lg:h-4/5 lg:min-h-max overflow-hidden h-72">
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
        <div className="mx-2 px-3 mb-40">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center mt-4">Installing Python</h1>
          <p className="mb-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem placeat possimus labore quod quas exercitationem officiis, soluta neque veniam autem voluptates id laborum dolorem quidem explicabo quis, facere fugit voluptatem. Doloribus molestias officiis natus sit soluta! Illo aliquid soluta exercitationem! Numquam et fugit eaque quia eius ab dolorum corporis veritatis cupiditate reiciendis beatae autem, distinctio aperiam corrupti labore eos enim mollitia saepe magni, quis assumenda non! Alias, harum! Sapiente quas, deserunt possimus repellendus eaque nam? Necessitatibus doloremque nemo, ex non maxime illo dignissimos quibusdam quidem! Quibusdam animi vero reprehenderit sequi magnam, placeat, eveniet molestiae delectus odit, laborum accusantium quod?</p>
        </div>
      </section>
    </div>
  );
}

export default Slug;
