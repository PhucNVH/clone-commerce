import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Layout() {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen text-gray-900 max-w-bc-large mx-auto font-gotham">
      <Header />

      <section className="first  text-center md:text-left">
        <div className="container mx-auto py-12 px-12 md:px-6">
          <div className="flex flex-wrap text-white justify-around -mx-3">
            <div className="w-full md:w-1/2 flex flex-col justify-center xl:items-start md:items-center pr-0 md:pr-8">
              <h1 className=" text-h1-40px leading-bc-50px font-extrabold">
                A commerce engine tailor-made for WordPress
              </h1>
              <p className="mt-5 my-6 text-xl font-thin">
                Scalable headless commerce on WordPress is one plugin away
              </p>
              <p className="">
                <a className="bg-near-black text-h1-15px tracking-1px rounded-md uppercase font-medium px-30px py-20px inline-block leading-4">
                  Join the Wordpress Product Tour
                </a>
              </p>
            </div>

            <div className="w-full md:w-1/2 pl-6">
              <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/bigcommerce-wordpress-ecommerce-plugin@2x.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="second bg-near-black text-white flex flex-col justify-center items-center my-0">
        <div className="container w-10/12 px-15px">
          <div className="pt-16 pb-12 px-4 text-center">
            <h1 className="font-bold text-2xl text-center mb-4">
              Download the report: The New Era of Commerce is Headless
            </h1>
            <Link
              className="text-h1-15px uppercase tracking-widest arrow"
              to="/"
            >
              Download now
            </Link>
          </div>
        </div>
      </section>

      <section className="third pt-16 px-6 md:px-0 pb-12">
        <img
          className="mx-auto"
          src="https://grow.bigcommerce.com/rs/695-JJT-333/images/logo-wall-headless-lk-om-fw-bt.png"
        />
      </section>

      <section className="forth my-14 flex justify-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between max-w-6xl px-3">
            <div className="w-full md:w-5/12 text-center md:text-left">
              <h1 className=" font-semibold text-h1-40px leading-bc-50px mb-6">
                The best of WordPress and ecommerce combined
              </h1>
              <h3 className=" font-medium text-2xl mb-3">Content + Commerce</h3>
              <p className="font-light text-base text-gray-700 mb-6">
                You`ve built a beautiful thing. Branding that differentiates,
                content that brings customers back, and a site that flows
                perfectly. With our WordPress ecommerce plugin, you don`t have
                to compromise that beauty for fully customiz able commerce.
              </p>
              <h3 className="font-medium text-2xl mb-3">
                Experience + Shopping
              </h3>
              <p className="font-light text-base text-gray-700  mb-4">
                BigCommerce for WordPress lets you focus on tailoring your
                front-end experience without treating ecommerce like an
                afterthought. Our plugin blends ecommerce functionality with the
                carefully crafted WordPress experience you`ve already built —
                meeting your customers` expectations every step of the way.
              </p>
              <h3 className="font-medium text-2xl mb-3">
                Multiple Sites + One Control Panel
              </h3>
              <p className="font-light text-base text-gray-700 mb-6">
                Even if you sell across multiple WordPress sites, you shouldn`t
                have to manage them all in separate places. BigCommerce gives
                you a single control panel to manage your catalog, orders, and
                shipping, all from one place. Streamline your admin experience
                and spend less time managing ecommerce on WordPress.
              </p>
            </div>
            <div className="w-full md:w-5/12">
              <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/content-and-commerce-experiences-on-wordpress.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="fifth bg-near-black py-16 text-white flex flex-wrap my-16 ">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex flex-wrap justify-between text-left px-3">
            <div className="w-full md:w-1/2 pr-3">
              <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/herobanners/B2B-Support-Agent-BigCommerce-Enterprise-Ecommerce.png" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center pl-3">
              <h1 className="font-bold text-4xl leading-bc-50px">
                Questions about how we can help your business?
              </h1>
              <p className="font-light text-lg my-6">
                Our sales and support teams are available via phone, live chat
                and email.
              </p>
              <Link className="text-xl arrow" to="/">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sixth flex flex-col items-center">
        <div className=" container px-3">
          <div className="text-center mb-12">
            <div className="mx-auto w-full md:w-7/12 mb-4">
              <h1 className=" font-bold text-h1-40px leading-bc-50px">
                The benefits of headless, with the ease of a plugin
              </h1>
            </div>
            <div className="mx-auto w-full md:w-10/12 md:px-24">
              <p className="font-light leading-bc-para-text">
                Scale your business with WordPress on the front-end and allow
                BigCommerce to free up server resources from things like catalog
                management, processing payments, and managing fulfillment
                logistics on the back-end.
              </p>
            </div>
          </div>
          <div className="container">
            <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/bigcommerce-wordpress-diagram@2x.png" />
          </div>
        </div>
      </section>
      <section className="my-16 text-center md:text-left">
        <div className="container mx-auto flex flex-wrap px-3">
          <div className="md:w-1/3 my-8 pr-4">
            <h3 className="font-semibold pb-2 text-2xl">
              Let us handle PCI compliance
            </h3>
            <p className="text-base font-light leading-bc-27px">
              BigCommerce powers your checkout experience, taking on the burden
              of PCI compliance on our platform.
            </p>
          </div>
          <div className="md:w-1/3  my-8 pr-4">
            <h3 className="font-semibold pb-2 text-2xl">
              Avoid draining resources
            </h3>
            <p className="text-base font-light leading-bc-27px">
              Processing orders and running ecommerce operations shouldn`t
              affect the uptime and speed of your site. Hosted on Google Cloud
              Platform, BigCommerce handles the heavy commerce lifting, bringing
              you the ability to scale without losing speed or uptime.
            </p>
          </div>
          <div className="md:w-1/3 my-8 ">
            <h3 className="font-semibold pb-2 text-2xl">
              Simplify catalog management
            </h3>
            <p className="text-base font-light leading-bc-27px">
              No need to code or install additional apps to support commerce
              features as your business scales. Utilize the full power of the
              BigCommerce feature set in the open-source environment you already
              love.
            </p>
          </div>
        </div>
      </section>
      <section className="" style={{ backgroundColor: "#F6F7F9" }}>
        <div className="container mx-auto flex flex-wrap my-8 px-3">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center pr-4 pb-4">
            <p className="font-medium text-2 leading-bc-27px text-p-20px text-center md:text-left">
              “We are providing our customers with an elevated ecommerce
              experience that represents our brand well, and enhances the real
              world experience at Surf Ranch. We’re so proud of it. Brick and
              mortar surf shops are the foundation of our surfing culture. But
              to expand on that digitally with a WordPress ecommerce experience
              like this as the world’s premier surfing destination is something
              we’re thrilled by.”
            </p>
            <p className="font-light text-lg uppercase">
              Chris Grow, Global Marketing Manager, Firewire Surfboards
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/bigcommerce-wordpress-kelly-slater@2x.png" />
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-near-black text-white px-16 py-16  ">
        <div className="container mx-auto px-3">
          <div className="w-full md:w-7/12 mx-auto text-center pb-6">
            <h1 className="font-bold text-4xl text-center leading-bc-50px">
              A radically different approach to WordPress Ecommerce
            </h1>
          </div>
          <div className="flex flex-wrap  text-center md:text-left">
            <div className="w-full md:w-1/3 py-8 pr-6">
              <h3 className="font-bold text-2xl mb-2">
                Made the WordPress Way
              </h3>
              <p className="text-base font-light leading-bc-27px">
                From the beginning, we set out to build our integration the
                WordPress Way: deliver value to the community, build it with
                WordPress experts, and offer something developers can make their
                own.
              </p>
            </div>
            <div className="w-full md:w-1/3 py-8 pr-6">
              <h3 className="font-bold text-2xl mb-2">
                Designed to support your unique vision
              </h3>
              <p className="text-base font-light leading-bc-27px font-gotham">
                No iFrames or Javascript necessary — get full catalog data
                access within WordPress and shape your store as you see fit.
                Simply hook into our WordPress ecommerce plugin and drive your
                storefront experience forward.
              </p>
              <Link className="font-semibold block text-h1-15px uppercase my-4 arrow pt-3">
                Access dev docs
              </Link>
            </div>
            <div className="w-full md:w-1/3 py-8">
              <h3 className="font-bold text-2xl mb-2">
                Unrestricted access to key plugin files
              </h3>
              <p className="text-base font-light leading-bc-27px font-gotham">
                Have a highly customized theme and site? We`ve got you covered.
                Our plugin supports WordPress’ standard method of overriding
                template files so you can modify out-of-the-box designs.
                Customize your product cards, lists, and cart without risking
                plugin updates that will undo your changes.
              </p>
              <Link className="font-semibold block text-h1-15px uppercase my-4 arrow pt-3">
                Access dev docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto flex flex-wrap justify-between px-6 md:px-0 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-15px">
            <h1 className="font-bold text-4xl pb-2">
              AMP-Enabled and Gutenberg Ready
            </h1>
            <h3 className=" font-bold text-2xl my-3">Built for speed</h3>
            <p className="font-light text-base">
              BigCommerce for WordPress is now AMP-enabled! Deliver the fastest
              ecommerce page load speeds possible with AMP for WordPress enabled
              on your site.
            </p>
            <h3 className="font-bold text-2xl my-3 pt-2">
              Built for the future
            </h3>
            <p className="font-light text-base">
              BigCommerce for WordPress lets you focus on tailoring your
              front-end experience without treating ecommerce like an
              afterthought. Our plugin blends ecommerce functionality with the
              carefully crafted WordPress experience you`ve already built —
              meeting your customers` expectations every step of the way.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-15px">
            <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/wordpress-ecommerce-plugin-firewire-wysiwyg@2x.png?mtime=20190313174326" />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col mx-8 mb-16 text-center">
        <div className="container px-15px">
          <div className="w-full md:w-7/12 mx-auto px-15px">
            <p className="font-semibold text-p-20px my-4 leading-bc-27px">
              {'"'}I’m impressed BigCommerce supported Gutenberg immediately on
              release. They were ahead of the curve and if they continue to
              innovate ahead of others they could be an even bigger powerhouse.
              {'"'}
            </p>
            <p className="uppercase">
              Patrick Rauland, Ecommerce Educator at LinkedIn Learning
            </p>
          </div>
        </div>
      </section>
      <section className="mb-16 mt-12">
        <div className="container mx-auto px-15px">
          <div className="text-center md:text-left">
            <h1 className="text-center font-bold text-h1-40px pb-16 leading-bc-50px">
              The CMS you need. The cost-of-ownership you love.
            </h1>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-4">
                <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/wordpress-ecommerce-plugin-product-list.png" />
                <p className="font-semibold text-p-20px leading-bc-27px py-4">
                  {'"'}Relative to our sales, the cost of BigCommerce is
                  negligible. The PayPal Braintree rates alone can easily pay
                  for what your store costs.{'"'}
                </p>
                <p className="font-light text-base uppercase">
                  John McCann, CEO, Spectrum Audio
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 pl-3 md:pl-24">
                <h3 className=" font-medium text-h-25px mb-3">
                  Take a load off with a separate back-end system
                </h3>
                <p className="font-light text-base mb-4">
                  Save in hosting costs and headaches with a separate system for
                  ecommerce. The BigCommerce integration takes the pressure of
                  ecommerce activities off of your WordPress site. Make catalog
                  updates and manage orders without affecting your site
                  performance.
                </p>
                <h3 className="font-medium text-2xl mb-3">
                  Save on credit card rates
                </h3>
                <p className="font-light text-base mb-4">
                  Get the lowest pre-negotiated credit card processing rates for
                  SaaS ecommerce. Plus, take advantage of no-hassle, competitive
                  card rates with PayPal, powered by Braintree. Through
                  Braintree, you can also enable Apple Pay and Visa Checkout.
                </p>

                <h3 className="font-medium text-2xl my-3">
                  Ship without spending a fortune
                </h3>
                <p className="font-light text-base">
                  Access the industry’s lowest shipping rates for global
                  carriers, advanced shipping rules including LTL freight
                  management, and multi-warehouse third-party logistics
                  providers all through BigCommerce’s pre-built integrations and
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-section-bottom">
        <div className="container mx-auto flex flex-col px-8 md:px-0 text-center md:text-left">
          <div className="flex flex-wrap py-8">
            <div className="w-full md:w-1/2 px-15px flex flex-col">
              <h1 className=" text-h1-40px font-bold leading-h1-bottom pr-4">
                To build the best, we went to the WordPress experts
              </h1>
              <p className="text-base font-light my-2">
                Leading WordPress agency, Modern Tribe, helped BigCommerce build
                our highly extensible plugin solution for WordPress ecommerce.
                From the very beginning, Modern Tribe set out to build an
                integration that reflects the WordPress culture of empowerment,
                inclusion, and individuality.
              </p>
              <p className="text-xl font-medium my-3">
                {'"'}The BigCommerce commitment to open SaaS was a big driver in
                our decision to take on the project. The free integration lives
                within and is supported through the WordPress.org plugin
                directory. BigCommerce does the development the WordPress way
                and supports the WordPress way as well.{'"'}
              </p>
              <p className="uppercase font-light text-base">
                Travis Totz, Director of New Projects, Modern Tribe
              </p>
            </div>
            <div className="w-full md:w-1/2 px-15px flex items-center">
              <img
                className="my-auto "
                src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/wordpress-ecommerce-plugin-modern-tribe.png"
              />
            </div>
          </div>
          <Link className="text-center uppercase text-h1-15px font-semibold my-8 tracking-1px arrow-blue">
            Find a WordPress commerce partner
          </Link>
        </div>
      </section>

      <section className="py-8 bg-section-bottom ">
        <div className="container mx-auto flex flex-col justify-center items-start px-15px">
          <div className="text-center md:text-left">
            <h1 className="text-h1-40px font-bold text-center pb-6 leading-bc-50px">
              Calling all developers, designers and WordPress devotees
            </h1>
            <div className="flex flex-wrap items-start">
              <div className="w-full md:w-1/3 pr-8 pb-8">
                <h3 className="text-p-20px font-bold">
                  Designer or WordPress Agency?
                </h3>
                <p className="text-base font-light">
                  Join our partner program and help us push the boundaries of
                  what`s possible with WordPress and ecommerce.
                </p>
              </div>
              <div className="w-full md:w-1/3 pr-8 pb-8">
                <h3 className="text-p-20px font-bold">
                  Got a plugin? Develop themes?
                </h3>
                <p className="text-base font-light">
                  Our plugin was built the WordPress way and is meant to work
                  with existing plugins and themes. Learn how to get your plugin
                  or theme compatible and we`ll feature y ou on our site and
                  readme.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-p-20px font-bold">Hosting Provider?</h3>
                <p className="text-base font-light">
                  The BigCommerce for WordPress plugin is open source and built
                  to offer turnkey customer and site deployment. You keep the
                  front-end hosting subscription; we handle the commerce
                  backend.
                </p>
              </div>
            </div>
            <Link className="block mx-auto text-center md:text-center uppercase text-h1-15px font-semibold my-8 tracking-1px arrow-blue">
              Become a bigcommerce partner
            </Link>
          </div>
        </div>
      </section>
      <section className="py-8 font-bold">
        <div className="container mx-auto flex flex-col px-15px text-center md:text-left">
          <h1 className="font-bold text-h1-40px py-6 ">Resources</h1>
          <Link className="text-p-15px font-medium uppercase arrow-blue mb-4">
            View all
          </Link>
          <div className="flex flex-wrap justify-between items-center w-full">
            <div className="w-full md:w-1/2 ">
              <h2 className="text-p-20px font-medium mb-3 ">PRODUCT TOUR</h2>
              <h2 className="text-h-25px mb-4">BigCommerce for WordPress</h2>
              <Link className="arrow-blue mb-4">Read More</Link>
            </div>
            <div className="w-full md:w-5/12 p">
              <h2 className="text-p-20px font-medium mb-3">REPORT</h2>
              <h2 className="text-h-25px mb-4">
                The New Era of Commerce is Headless
              </h2>
              <Link className="arrow-blue mb-4">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-section-bottom py-8 font-bold mb-8">
        <div className="container mx-auto flex flex-col px-15px  text-center md:text-left">
          <h1 className="font-bold text-h1-40px py-6"> BigCommerce Blog</h1>
          <Link className="text-p-15px font-medium uppercase arrow-blue">
            Visit Blog
          </Link>
          <div className="flex flex-wrap justify-between items-center w-full">
            <div className="w-full md:w-1/2">
              <h2 className="text-p-20px font-medium mb-4">
                ECOMMERCE TECHNOLOGY
              </h2>
              <h2 className="text-h-25px mb-4">
                The Role of WordPress Ecommerce in the Coming Content and
                Commerce Era
              </h2>
              <Link className="arrow-blue mb-4">Read More</Link>
            </div>
            <div className="w-full md:w-5/12">
              <h2 className="text-p-20px font-medium mb-3">
                ECOMMERCE SUCCESS STORIES
              </h2>
              <h2 className="text-h-25px mb-4">
                11-Time World Surf Champion’s Surfboard Brand Adopts Headless
                Commerce Into Global Strategy
              </h2>
              <Link className="arrow-blue mb-4">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <main className="w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main> */}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
