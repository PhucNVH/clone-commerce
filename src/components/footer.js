import React from "react";
import { Link } from "gatsby";
const listSection = [1, 2, 3, 4, 5, 6, 7, 8];
function Section() {
  return (
    <div className="">
      <div className="font-bold">Section Title</div>
      <ul className="footer-link">
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
    <footer className="bg-black text-white">
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-10 footer-nav">
        {listSection &&
          listSection.map((i) => {
            return <Section key={i} />;
          })}
      </div>
      <div className="footer-bottom flex justify-between">
        <div className="flex-initial">
          <img
            className=""
            src={"https://www.bigcommerce.com/assets/svg/bc-logo-bright.svg"}
            alt="logo"
          />
        </div>
        <div className="flex-auto flex flex-col items-end">
          <div className="fanpage">
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
          <div className="copyright">
            ©Copyright 2003 - 2020 BigCommerce Pty. Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
