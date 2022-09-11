import Link from "next/link";
import Image from "next/future/image";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <span className="header__info">
              Free shipping on{" "}
              <strong className="fw600 color--primary">weekends!</strong>
            </span>
            <nav className="header__nav">
              <Link href="login">
                <a href="#">Login</a>
              </Link>
              <Link href="login">
                <a href="#">Register</a>
              </Link>
            </nav>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <Link href="/">
              <a className="logo">
                <Image
                  src="/img/vercel.svg"
                  alt="Picture of the author"
                  width={283}
                  height={64}
                  layout="intrinsic"
                  priority
                />
              </a>
            </Link>

            <div className="header__right">
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <Link href="/">
                      <a className="menu__link">Home</a>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link href="products">
                      <a className="menu__link">Products</a>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link href="products">
                      <a className="menu__link">Categories</a>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link href="products">
                      <a className="menu__link">About</a>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link href="products">
                      <a className="menu__link">Blog</a>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link href="products">
                      <a className="menu__link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav className="header-action">
                <ul className="header-action__list">
                  <li className="header-action__item">
                    <Link href="/cart">
                      <a className="header-action__link header-action__link--cart cart-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <small>2</small>
                      </a>
                    </Link>
                    <div className="cart-summary">summary</div>
                  </li>
                  <li className="header-action__item">
                    <button className="header-action__link header-action__link--search">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header__search">
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              className="search__input"
              placeholder="Search..."
            />
            <button className="search__close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="search-overlay"></div>
    </>
  );
};

export default Header;
