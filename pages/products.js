import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/future/image";
import slugify from "react-slugify";

export default function Products() {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setFake(jsonData);
    };

    fakestore();
  }, []);

  return (
    <main className="products-page">
      <Head>
        <title>Products</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="" />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <div className="container">
        <h1>Products</h1>
        <div className="row">
          {fake.map((values) => {
            return (
              <>
                <div className="col-xl-3 col-lg-4 col-6 mb-30" key={values.id}>
                  <Link href={`product/${slugify(values.title)}`}>
                    <a>
                      <div className="product">
                        <figure className="product__img">
                          <Image
                            src={values.image}
                            alt={values.title}
                            width={384}
                            height={427}
                            layout="intrinsic"
                          />
                        </figure>
                        <strong className="product__title">
                          {values.title}
                        </strong>
                        <p className="product__description">
                          {values.description}
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}
