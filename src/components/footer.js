import React from "react";
import { Link } from "gatsby";
const listSection = [1, 2, 3, 4, 5, 6, 7, 8];
function Section() {
  return (
    <div className="section w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-16 md:mb-20 px-0 sm:px-20  border-b border-divider sm:border-b-0">
      <div className="font-medium text-p-20px mb-3 pl-6  sm:pl-0">
        Section Title
      </div>
      <ul className="hidden sm:block footer-link text-h1-15px">
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Enterprise Pricing</Link>
        </li>
        <li>
          <Link to="/">International</Link>
        </li>
      </ul>
    </div>
  );
}
function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="container mx-auto flex flex-wrap footer-nav pt-20">
        {listSection &&
          listSection.map((i) => {
            return <Section key={i} />;
          })}
      </div>
      <div className="footer-bottom container mx-auto flex flex-wrap justify-between px-6 sm:px-20 py-8 md:pt-16 md:pb-8">
        <div className="w-full md:w-auto md:flex-initial">
          <img
            className="my-8"
            src={"https://www.bigcommerce.com/assets/svg/bc-logo-bright.svg"}
            alt="logo"
          />
        </div>
        <div className="w-full md:w-auto md:flex-auto flex flex-col items-start md:items-end justify-center">
          <div className="fanpage text-h1-15px">
            <ul>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">LinkedIn</Link>
              </li>
              <li>
                <Link to="/">YouTube</Link>
              </li>
              <li>
                <Link to="/">Pinterest</Link>
              </li>
              <li>
                <Link to="/">YouTube</Link>
              </li>
            </ul>
          </div>
          <div className="copyright text-xs " style={{ color: "#8E919C" }}>
            ©Copyright 2003 - 2020 BigCommerce Pty. Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
