import { Link } from "react-router-dom";


const Footer = () => {
  return (
    // <!-- Component: Five Columns Footer with Logo -->
    <div>
      <footer className="text-start text-slate-500 relative bottom-0 left-0">
        {/* <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border text-whiteborder-slate-200 bg-[#070B23]">
          <div className="sm:container px-3 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-4"
                aria-labelledby="footer-header">
                <Link className="flex items-center gap-2 mb-3  cursor-pointer" to="#">
                  <img src={"logo"} className="h-12 sm:h-16 rounded-full" alt="" />
                  <span className="text-3xl text-white font-playfair-display">Job Portal </span>
                </Link>
                <p className="text-left"> Order your comfort at reasonable price </p>
              </div>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2 bg-transparent"
                aria-labelledby="footer-product-5-logo">
                <h3 className="mb-6 font-medium text-white text-xl font-noto-serif"> Product  </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link href="#" className="cursor-pointer"> Features </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className="cursor-pointer"> Customers </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Why us? </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Pricing </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-5-logo">
                <h3 className="mb-6 font-medium text-white text-xl font-noto-serif">  Docs & Help </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Documentation </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer">  Customer Care </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> What&apos;s New </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> FAQ&apos;s </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Help Center </Link>
                  </li>
                </ul>
              </nav>
              <nav className="col-span-2 md:col-span-4 lg:col-span-2" >
                <h3 className="mb-6 text-white text-xl font-noto-serif">  About us</h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer">  About us </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Careers </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Report a Bug </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Women&apos;s Day Special </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Feedback </Link>
                  </li>
                </ul>
              </nav>
              <nav className="col-span-2 md:col-span-4 lg:col-span-2">
                <h3 className="mb-6 font-medium text-white text-xl font-noto-serif"> Get in touch </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer">  Contact
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer"> Support </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer">  Partners </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link to="#" className=" cursor-pointer">  Join research  </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
