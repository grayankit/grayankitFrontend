import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function Slug(props) {
//dangerously setting inner html
  function createMarkup(content) {
    return { __html: content };
  }
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Head>
        <title>{slug} | Grayankit.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* Mapping Data inside the page */}
      {props.data.data.map((item) => {
        return (
        <section className="h-fit mt-7">
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
          <div className="border-gray-500 border-1 max-w-fitxl md:h-auto lg:h-96 overflow-hidden h-72">
            <iframe
              src="https://www.youtube.com/embed/rmIoA9DlaK0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="jsx-2880253090 w-full h-full"
            />
          </div>
          {/* content Starts here */}
          <div className="mx-2 px-3 mb-40 mt-15">
          <nav className="mx-2 px-3 tabs flex sm:flex-row overflow-x-scroll lg:overflow-x-hidden">
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b  font-medium border-purple-700">Overview</button>
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b  font-medium border-purple-700">	Q&amp;A</button>
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b  font-medium border-purple-700">Downloads</button>
          <button className="text-gray-600 py-2 px-2 block hover:text-purple-700 focus:outline-none active:border-b font-medium border-purple-700">Announcements</button> 
          </nav>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center mt-4">{item.attributes.videoTItile}</h1>
            <p className="mb-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem placeat possimus labore quod quas exercitationem officiis, soluta neque veniam autem voluptates id laborum dolorem quidem explicabo quis, facere fugit voluptatem. Doloribus molestias officiis natus sit soluta! Illo aliquid soluta exercitationem! Numquam et fugit eaque quia eius ab dolorum corporis veritatis cupiditate reiciendis beatae autem, distinctio aperiam corrupti labore eos enim mollitia saepe magni, quis assumenda non! Alias, harum! Sapiente quas, deserunt possimus repellendus eaque nam? Necessitatibus doloremque nemo, ex non maxime illo dignissimos quibusdam quidem! Quibusdam animi vero reprehenderit sequi magnam, placeat, eveniet molestiae delectus odit, laborum accusantium quod?</p>
          </div>
        </section>
        )
      })}
    </div>
  );
}
export async function getServerSideProps(context) {
  let res = await fetch(
    "http://localhost:1337/api/tickets?filters[slug]=" + context.query.slug+"-1",
  );
  let data = await res.json();
  // console.log(data);

  return {
    props: { data: data },
  };
}

export default Slug;
