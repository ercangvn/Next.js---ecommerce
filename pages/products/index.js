import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/future/image";
import slugify from "react-slugify";
import ReactStars from "react-stars";

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
      <div className="container mt-30">
        <h1 className="page-title mb-30">Products</h1>
        <div className="row">
          {fake.map((values) => {
            return (
              <div className="col-xl-3 col-lg-4 col-6 mb-30" key={values.id}>
                <div className="product">
                  <Link href={`product/${slugify(values.title)}`}>
                    <a>
                      <figure className="product__img">
                        <Image
                          src={values.image}
                          alt={values.title}
                          width={384}
                          height={427}
                          layout="intrinsic"
                          priority
                        />
                      </figure>
                      <strong className="product__title">
                        {values.title}
                        <small>{values.category}</small>
                      </strong>
                      <div className="product__rating">
                        <ReactStars
                          count={values.rating.rate}
                          size={16}
                          value={values.rating.rate}
                          color2={"#ffd700"}
                          edit={false}
                        />
                        <small>({values.rating.count})</small>
                      </div>
                      <p className="product__description">
                        {values.description}
                      </p>
                      <strong className="product__price">
                        ${values.price}
                        <small>${values.price * 2}</small>
                      </strong>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
