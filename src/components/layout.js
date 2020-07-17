import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 container mx-auto">
      <Header />

      <section className="first">
        <div className="flex text-white mx-40 my-10">
          <div>
            <h1 className="text-4xl font-bold">
              A commerce engine tailor-made for WordPress
            </h1>
            <p className="my-5 text-xl font-light">
              Scalable headless commerce on WordPress is one plugin away
            </p>
            <button className="bg-black px-8 py-3 rounded-md">
              Join the Wordpress Product Tour
            </button>
          </div>
          <div>
            <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/bigcommerce-wordpress-ecommerce-plugin@2x.png" />
          </div>
        </div>
      </section>

      <section className="second bg-black h-64 text-white flex flex-col justify-center items-center my-0">
        <h1 className="font-bold text-2xl">
          Download the report: The New Era of Commerce is Headless
        </h1>
        <Link className="text-xl" to="/">
          Download now
        </Link>
      </section>

      <section className="third">
        <img
          className="mx-auto my-10"
          src="https://grow.bigcommerce.com/rs/695-JJT-333/images/logo-wall-headless-lk-om-fw-bt.png"
        />
      </section>

      <section className="forth flex justify-center">
        <div className="w-1/2 px-16">
          <h1 className="font-bold text-4xl">
            The best of WordPress and ecommerce combined
          </h1>
          <h3 className=" font-bold text-2xl my-3">Content + Commerce</h3>
          <p className="font-light text-xl">
            You`ve built a beautiful thing. Branding that differentiates,
            content that brings customers back, and a site that flows perfectly.
            With our WordPress ecommerce plugin, you don`t have to compromise
            that beauty for fully customiz able commerce.
          </p>
          <h3 className="font-bold text-2xl my-3">Experience + Shopping</h3>
          <p className="font-light text-xl">
            BigCommerce for WordPress lets you focus on tailoring your front-end
            experience without treating ecommerce like an afterthought. Our
            plugin blends ecommerce functionality with the carefully crafted
            WordPress experience you`ve already built — meeting your customers`
            expectations every step of the way.
          </p>
          <h3 className="font-bold text-2xl my-3">
            Multiple Sites + One Control Panel
          </h3>
          <p className="font-light text-xl">
            Even if you sell across multiple WordPress sites, you shouldn`t have
            to manage them all in separate places. BigCommerce gives you a
            single control panel to manage your catalog, orders, and shipping,
            all from one place. Streamline your admin experience and spend less
            time managing ecommerce on WordPress.
          </p>
        </div>
        <div className="w-1/2">
          <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/content-and-commerce-experiences-on-wordpress.png" />
        </div>
      </section>

      <section className="fifth bg-black px-32 py-16 text-white flex">
        <div className="px-16 w-1/2">
          <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/herobanners/B2B-Support-Agent-BigCommerce-Enterprise-Ecommerce.png" />
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-4xl">
            Questions about how we can help your business?
          </h1>
          <p className="font-light my-6">
            Our sales and support teams are available via phone, live chat and
            email.
          </p>
          <Link className="text-xl" to="/">
            Contact us
          </Link>
        </div>
      </section>
      <section className="sixth px-36">
        <div className="text-center">
          <h1 className="font-bold text-4xl">
            The benefits of headless, with the ease of a plugin
          </h1>
          <p className="font-light text-xl">
            Scale your business with WordPress on the front-end and allow
            BigCommerce to free up server resources from things like catalog
            management, processing payments, and managing fulfillment logistics
            on the back-end.
          </p>
        </div>
        <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/bigcommerce-wordpress-diagram@2x.png" />
      </section>
      <section className="flex">
        <div className="mx-8">
          <h3 className="font-bold text-2xl">Let us handle PCI compliance </h3>
          <p className="text-lg font-light">
            BigCommerce powers your checkout experience, taking on the burden of
            PCI compliance on our platform.
          </p>
        </div>
        <div className="mx-8">
          <h3 className="font-bold text-2xl">Avoid draining resources</h3>{" "}
          <p className="text-lg font-light">
            Processing orders and running ecommerce operations shouldn`t affect
            the uptime and speed of your site. Hosted on Google Cloud Platform,
            BigCommerce handles the heavy commerce lifting, bringing you the
            ability to scale without losing speed or uptime.
          </p>
        </div>
        <div className="mx-8">
          <h3 className="font-bold text-2xl">Simplify catalog management</h3>
          <p className="text-lg font-light">
            No need to code or install additional apps to support commerce
            features as your business scales. Utilize the full power of the
            BigCommerce feature set in the open-source environment you already
            love.
          </p>
        </div>
      </section>
      <section className="flex" style={{ backgroundColor: "#F6F7F9" }}>
        <div className="flex flex-col items-center justify-center mx-32 w-1/2">
          <p className="font-bold text-xl">
            “We are providing our customers with an elevated ecommerce
            experience that represents our brand well, and enhances the real
            world experience at Surf Ranch. We’re so proud of it. Brick and
            mortar surf shops are the foundation of our surfing culture. But to
            expand on that digitally with a WordPress ecommerce experience like
            this as the world’s premier surfing destination is something we’re
            thrilled by.”
          </p>
          <p className="font-light text-lg">
            Chris Grow, Global Marketing Manager, Firewire Surfboards
          </p>
        </div>
        <div className="w-1/2">
          <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/bigcommerce-wordpress-kelly-slater@2x.png" />
        </div>
      </section>
      <section className="flex flex-col bg-black text-white px-16 py-16">
        <div>
          <h1 className="font-bold text-4xl text-center">
            A radically different approach to WordPress Ecommerce
          </h1>
        </div>
        <div className="flex">
          <div className="mx-8">
            <h3 className="font-bold text-2xl">Made the WordPress Way</h3>
            <p className="text-lg font-light">
              From the beginning, we set out to build our integration the
              WordPress Way: deliver value to the community, build it with
              WordPress experts, and offer something developers can make their
              own.
            </p>
          </div>
          <div className="mx-8">
            <h3 className="font-bold text-2xl">
              Designed to support your unique vision
            </h3>{" "}
            <p className="text-lg font-light">
              No iFrames or Javascript necessary — get full catalog data access
              within WordPress and shape your store as you see fit. Simply hook
              into our WordPress ecommerce plugin and drive your storefront
              experience forward.
            </p>
          </div>
          <div className="mx-8">
            <h3 className="font-bold text-2xl">
              Unrestricted access to key plugin files
            </h3>
            <p className="text-lg font-light">
              Have a highly customized theme and site? We`ve got you covered.
              Our plugin supports WordPress’ standard method of overriding
              template files so you can modify out-of-the-box designs. Customize
              your product cards, lists, and cart without risking plugin updates
              that will undo your changes.
            </p>
          </div>
        </div>
      </section>

      <section className="forth flex justify-center px-16">
        <div className="w-1/2 px-8">
          <h1 className="font-bold text-4xl">
            AMP-Enabled and Gutenberg Ready
          </h1>
          <h3 className=" font-bold text-2xl my-3">Built for speed</h3>
          <p className="font-light text-xl">
            BigCommerce for WordPress is now AMP-enabled! Deliver the fastest
            ecommerce page load speeds possible with AMP for WordPress enabled
            on your site.
          </p>
          <h3 className="font-bold text-2xl my-3">Built for the future</h3>
          <p className="font-light text-xl">
            BigCommerce for WordPress lets you focus on tailoring your front-end
            experience without treating ecommerce like an afterthought. Our
            plugin blends ecommerce functionality with the carefully crafted
            WordPress experience you`ve already built — meeting your customers`
            expectations every step of the way.
          </p>
        </div>
        <div className="w-1/2">
          <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/wordpress-ecommerce-plugin-firewire-wysiwyg@2x.png?mtime=20190313174326" />
        </div>
      </section>
      <section className="flex items-center justify-center  flex-col px-16">
        <div className="w-1/2">
          <p className="font-bold text-2xl my-8">
            ``I’m impressed BigCommerce supported Gutenberg immediately on
            release. They were ahead of the curve and if they continue to
            innovate ahead of others they could be an even bigger powerhouse.``
          </p>
          <p className="font-light text-xl">
            Patrick Rauland, Ecommerce Educator at LinkedIn Learning
          </p>
        </div>
      </section>
      <section className="forth flex flex-col items-center justify-center px-16">
        <h1 className="font-bold text-5xl">
          The CMS you need. The cost-of-ownership you love.
        </h1>
        <div className="flex">
          <div className="w-1/2">
            <img src="https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/wordpress-ecommerce-plugin-product-list.png" />
            <p className="font-bold text-xl">
              Relative to our sales, the cost of BigCommerce is negligible. The
              PayPal Braintree rates alone can easily pay for what your store
              costs.
            </p>
            <p className="font-light text-xl">
              John McCann, CEO, Spectrum Audio
            </p>
          </div>
          <div className="w-1/2 px-8">
            <h3 className=" font-bold text-2xl my-3">
              Take a load off with a separate back-end system
            </h3>
            <p className="font-light text-xl">
              Save in hosting costs and headaches with a separate system for
              ecommerce. The BigCommerce integration takes the pressure of
              ecommerce activities off of your WordPress site. Make catalog
              updates and manage orders without affecting your site performance.
            </p>
            <h3 className="font-bold text-2xl my-3">
              Save on credit card rates
            </h3>
            <p className="font-light text-xl">
              Get the lowest pre-negotiated credit card processing rates for
              SaaS ecommerce. Plus, take advantage of no-hassle, competitive
              card rates with PayPal, powered by Braintree. Through Braintree,
              you can also enable Apple Pay and Visa Checkout.
            </p>

            <h3 className="font-bold text-2xl my-3">
              Ship without spending a fortune
            </h3>
            <p className="font-light text-xl">
              Access the industry’s lowest shipping rates for global carriers,
              advanced shipping rules including LTL freight management, and
              multi-warehouse third-party logistics providers all through
              BigCommerce’s pre-built integrations and partnerships.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className="font-bold text-4xl">Resources</h1>
        <Link className="uppercase">View all</Link>
        <div className="flex justify-around items-center w-full">
          <div>
            <h2>PRODUCT TOUR</h2>
            <h2>BigCommerce for WordPress</h2>
            <Link>Read More</Link>
          </div>
          <div>
            <h2>REPORT</h2>
            <h2>The New Era of Commerce is Headless</h2>
            <Link>Read More</Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <h1 className="font-bold text-4xl"> BigCommerce Blog</h1>
        <Link className="uppercase">Visit Blog</Link>
        <div className="flex justify-around items-center w-full">
          <div>
            <h2>ECOMMERCE TECHNOLOGY</h2>
            <h2>
              The Role of WordPress Ecommerce in the Coming Content and Commerce
              Era
            </h2>
            <Link>Read More</Link>
          </div>
          <div>
            <h2>ECOMMERCE SUCCESS STORIES</h2>
            <h2>
              11-Time World Surf Champion’s Surfboard Brand Adopts Headless
              Commerce Into Global Strategy
            </h2>
            <Link>Read More</Link>
          </div>
        </div>
      </section>
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
