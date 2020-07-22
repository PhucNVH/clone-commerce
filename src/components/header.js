import { Link } from "gatsby";
import React from "react";

function Header() {
  return (
    <header className="bg-white header flex flex-col">
      <div className="h-8 w-full  bg-header-top"></div>
      <div className="flex-grow">
        <div className="container mx-auto px-15px h-full flex flex-wrap items-center justify-start">
          <Link to="/" className="mb-2 brand-image">
            <img
              src={
                "https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/logos/bc-logo-dark.svg"
              }
            />
          </Link>
          <nav className="w-1/2 hidden md:flex md:items-center h-full justify-start header-text font-extrabold">
            {[
              {
                route: `/`,
                title: `Solutions`,
              },
              {
                route: `/`,
                title: `Products`,
              },
              {
                route: `/`,
                title: `Customers`,
              },
              {
                route: `/`,
                title: `Partners`,
              },
              {
                route: `/`,
                title: `Resources`,
              },
            ].map((link) => (
              <button
                key={link.title.toString()}
                className="header-nav-item block no-underline md:inline-block md:mt-0 hover:bg-bg-nav-hover h-full px-4 py-4 text-sm font-medium "
              >
                {link.title}
                <div className="hidden">
                  <ul>
                    <li>ABC</li>
                    <li>DEF</li>
                    <li>GHK</li>
                  </ul>
                </div>
              </button>
            ))}
          </nav>
          <button
            className="bg-blue-800 text-white font-semibold text rounded text-xs px-6 py-2 ml-auto uppercase float-right tracking-wider"
            style={{ backgroundColor: "#0d52ff" }}
          >
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
