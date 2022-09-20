import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from"next/link";

function Courses(props) {
  return (
    <div>
      <Head>
        <title>Courses | Grayankit.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Free Courses to Help you go
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                This courses will help you understand the this virtual world
                more easily than you can do it alone.
              </p>
            </div>
          </div>
          {/* From here card is starting */} 
          <div className="flex flex-wrap sm:-m-4 -mx-4 bg-gray-200">
            {props.data.data.map((item)=>{
              return(
            <div className="pb-3 md:w-1/4 sm:mb-0 mb-6 bg-white m-8 rounded-2xl text-center shadow-lg hover:shadow-2xl" key={item.attributes.slug}>
              <div className="rounded-lg overflow-hidden text-center">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={item.attributes.Cover.data.attributes.name}
                  width={280}
                  height={285}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center p-5">
                {item.attributes.Title}
              </h2>
              <p className="text-base leading-relaxed mt-2 text-center p-5">
                {item.attributes.Description}
              </p>
              <Link href={`/videos/${item.attributes.slug}`}><button className="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none text-white rounded-xl text-base mt-5 md:mt-10 hover:text-lg hover:shadow-2xl">
                Start Watching
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button></Link>
            </div>)
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
//Fetching the courses
export async function getServerSideProps() {
  let headers = {
    Authorization:
      "Bearer 609cffaf58d54dcb732e212deede744a688e32bc04823f8a6c93f77f4a16778a0c18a4a1a0735d3e0e9f0af80a43e8c5d54ac445961b586a639d280d9abf8f2a5ed9d1e790141deff54ea2dbbbcac61d6993d0178c12cae7923f464ddc8b50199e22d9daa43df742b20c783720385d9c92b4d913139f54b2a054b0b917c738ef",
  };
  let res = await fetch("http://20.204.119.216:1337/api/videos?populate=*", {
    headers: headers,
  });
  let data = await res.json();
  // console.log(data);

  return {
    props: { data: data },
  };
}

export default Courses;
