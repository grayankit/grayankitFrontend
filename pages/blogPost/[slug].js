import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function Slug(props) {
    function createMarkup(content) {
      return { __html: content };
    }
    
  const router = useRouter();
  const { slug } = router.query;
  // console.log(slug)
  return (
    <div>
      <Head>
        <title>{slug} | Grayankit.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {props.data.data.map((item) => {
        return (
          <section className="text-gray-60" key={item.attributes.slug}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center mt-4" key={item.attributes.slug}>
              {item.attributes.Title}
            </h1>
            {<div dangerouslySetInnerHTML={createMarkup(item.attributes.Content)} className="text-center text-lg" key={item.attributes.slug}></div>}
          </section>
        );
      })}
    </div>
  );
}
//Fetching the courses
export async function getServerSideProps(context) {
  let res = await fetch(
    "http://strapi.grayankit.codes:1337/api/blogs?filters[slug]=" + context.query.slug,
  );
  let data = await res.json();
  // console.log(data);

  return {
    props: { data: data },
  };
}

export default Slug;
