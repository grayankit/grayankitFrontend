import React from "react";
import Head from "next/head";
import Link from "next/link";

const Blogs = (props) => {
  return (
    <div>
      <Head>
        <title>Blogs | Grayankit.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font overflow-hidden bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100 ">
          {/* From here blog card is starting */}
          {props.data.data.map((item =>{
            return (
            <div className="py-8 flex flex-wrap md:flex-nowrap ml-20 mr-20 px-5 " key={item.attributes.slug}>
              <div className="md:flex-grow bg-white rounded-lg shadow-md px-10 py-10 hover:shadow-xl hover:border-purple-600 hover:border-2" key={item.attributes.slug}>
                <p key={item.attributes.slug}>{item.attributes.createdAt}</p>
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {item.attributes.Title}
                </h2>
                <p className="leading-relaxed">
                  {item.attributes.Description}
                </p>
                <Link href={`/blogPost/${item.attributes.slug}`}>
                <a className="text-purple-500 inline-flex items-center mt-4 hover:cursor-pointer">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
              </div>
              </div>
            )
          }))}

          </div>
        </div>
      </section>
    </div>
  );
};
//Fetching the blogs
export async function getServerSideProps() {
  let res = await fetch("https://strapi.grayankit.codes/api/blogs", {
  });
  let data = await res.json();
  // console.log(data);

  return {
    props: { data: data },
  };
}

export default Blogs;
