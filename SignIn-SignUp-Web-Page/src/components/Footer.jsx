import React from "react";
// import footerimg1 from '../images/footerimg1.png'

const Footer = () => {
  return (
    <>
      <div className="footer-img1 mb-0">
        <div className=" text-white flex flex-col justify-center lg:items-center lg:w-2/6 sm:w-full h-full ">
          <div className="">
            <p className="md:font-bold md:text-4xl sm:text-sm md:m-2 sm:p-5 lg:p-0 leading-7">
              Grow your freelancing <br />
              career with Fliqa Associate
            </p>
          </div>
          <div className="">
            <p className="font-semibold md:text-xl sm:text-sm leading-7 mt-10  sm:p-5 lg:p-0">
              Register yourself <br />
              Verification & Quality Check <br />
              Verified Associate at FliqaIndia <br />
            </p>
          </div>
        </div>
      </div>
      <div className="footer2 flex flex-col flex-wrap bg-black text-white p-5">
        <div className="basis-1/2 flex flex-row flex-wrap  my-5 ">
          <div className="md:basis-4/12 sm:basis-full">
            <p className="p-2 text-2xl">Never miss a thing</p>
            <div className="flex content-center">
              <input
                type="text"
                className="inline rounded-l-lg lg:p-2 w-1/2 sm:p-0"
                placeholder="Email Address"
              />
              <span className="lg:p-2 sm:p-0 px-4 lg:text-xl sm:text-sm bg-gray-400 rounded-r-lg cursor-pointer hover:bg-slate-500">
                Subscribe
              </span>
            </div>
            <p className="p-2 text-xl my-2">Be in touch</p>
          </div>
          <div className="md:basis-8/12 sm:basis-full flex flex-row flex-wrap">
            <div className="basis-1/2">
              <p className="text-center p-2 text-2xl  mb-3">
                Never miss a thing
              </p>
              <div className="md:flex md:flex-row sm:flex-col sm:flex  justify-around">
                <div className="leading-7 p-2 text-lg ">
                  <p>Services</p>
                  <p>Blog</p>
                  <p>Portfolio</p>
                </div>
                <div className="leading-7 p-2 text-lg">
                  <p>Tutorial</p>
                  <p>Career</p>
                  <p>Film</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2  flex justify-center">
              <div>
                <p className=" p-2 text-2xl mb-3">Never miss a thing</p>
                <p className="leading-7 p-2 text-lg">
                  Contact us <br />
                  Feedback <br />
                  FAQ <br />
                  Terms and conditions <br />
                  Privacy Policy <br />
                  Data Deletion Protocol
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center content-center  mt-5">
          <div>
            <p className="text-center lg:text-xl md:text-lg">
              {" "}
              2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED
            </p>
            <p className="text-center lg:text-xl md:text-lg">
              POWERED BY FLIQAINDIA PVT. LTD.
            </p>
            <p className="text-center lg:text-xl md:text-lg">VERSION 5.1.5</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
