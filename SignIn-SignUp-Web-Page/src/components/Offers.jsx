import React from "react";
import Group5img1 from "../images/Group5img1.png";
import Group5img2 from "../images/Group5img2.png";
import Group6img1 from "../images/Group6img1.png";
import Group6img2 from "../images/Group6img2.png";
import Group6img3 from "../images/Group6img3.png";
import Group6img0 from "../images/Group6img0.png";

const offer_card = [
  { img: Group6img1, des1:'Wedding', des2:'Packages' },
  { img: Group6img2, des1:'Website', des2:'Design'},
  { img: Group6img3 ,des1:'Back', des2:'Photography'},
  { img: Group6img1 , des1:'Wedding', des2:'Packages'},
];

const Offers = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap ">
        <div className="basis-2/12 text-center mb-2"style={{color: '#4C696D',lineHeight: '42px'}}>
          <p className="font-bold text-4xl">Best Offers</p>
          <p className="font-semibold text-2xl p-2">Discover the best offers on our services</p>
        </div>
        <div className="basis-10/12 relative">
          <img src={Group5img1} alt="" className="h-50 w-full sm:hidden md:block" />
          <img src={Group5img2} alt="" className="h-40 w-full sm:hidden md:block" />
          <div className="flex flex-row flex-wrap top-16 lg:absolute sm:relative md:relative justify-around content-center w-full gap-y-5">
            {offer_card.map((e) => (
              <div
                className="flex flex-col"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "4px 5px 9px 3px rgba(0, 0, 0, 0.25)",
                  borderRadius: "11px",
                }}
              >
                <div className="relative">
                  <img
                    src={e.img}
                    alt=""
                    style={{
                      background: "rgba(0, 0, 0, 0.27)",
                      boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)",
                      borderRadius: "11px",
                    }}
                  />
                  <img
                    src={Group6img0}
                    alt=""
                    className="h-16 w-28 absolute top-52"
                  />
                  <p className="absolute top-44 text-white p-2 text-lg">Discount</p>
                  <p className="absolute top-6 left-16 text-center text-white   p-2 text-xl">{e.des1} <br />{e.des2}</p>
                  <div className="flex flex-row justify-center">
                    <div className="h-px absolute top-24 bg-white w-10/12"></div>
                  </div>
                </div>
                <p className="text-center p-4">BOOK NOW</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
