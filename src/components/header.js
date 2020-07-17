import { Link } from "gatsby";
import React from "react";

function Header() {
  return (
    <header className="bg-white h-32 flex justify-center">
      <div className="flex flex-wrap items-center justify-between mx-20 w-full">
        <div className="w-4/6 flex h-full items-center">
          <Link to="/" className="">
            <img
              src={
                "https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/logos/bc-logo-dark.svg"
              }
            />
          </Link>

          <nav className={`md:flex md:items-center h-full justify-start`}>
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
                className="header-nav-item block text-black no-underline md:inline-block md:mt-0 hover:bg-gray-300 h-full px-4 text-sm"
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
        </div>
        <button
          className="bg-blue-800 text-white font-bold rounded px-8 py-2 uppercase"
          style={{ backgroundColor: "#0d52ff" }}
        >
          Request Demo
        </button>
      </div>
    </header>
  );
}

export default Header;
