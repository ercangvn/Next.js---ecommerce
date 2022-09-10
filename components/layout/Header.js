import Link from "next/link";
import Image from "next/future/image";
import Head from "next/head";

const Header = () => {
  return (
    <header className="header">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <Link href="/">
        <a className="logo">
          <Image
            src="/img/vercel.svg"
            alt="Picture of the author"
            width={283}
            height={64}
            layout="intrinsic"
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
