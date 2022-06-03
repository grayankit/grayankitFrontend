import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function Slug(props) {
    function createMarkup(content) {
      return { __html: content };
    }
    
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Head>
        <title key={item.attributes.slug}>{slug} | Grayankit.me</title>
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
  let headers = {
    Authorization:
      "Bearer 609cffaf58d54dcb732e212deede744a688e32bc04823f8a6c93f77f4a16778a0c18a4a1a0735d3e0e9f0af80a43e8c5d54ac445961b586a639d280d9abf8f2a5ed9d1e790141deff54ea2dbbbcac61d6993d0178c12cae7923f464ddc8b50199e22d9daa43df742b20c783720385d9c92b4d913139f54b2a054b0b917c738ef",
  };
  let res = await fetch(
    "http://localhost:1337/api/blogs?filters[slug]=" + context.query.slug,
    {
      headers: headers,
    }
  );
  let data = await res.json();
  // console.log(data);

  return {
    props: { data: data },
  };
}

export default Slug;
