import React from "react";
import Group2img1 from "../images/Group2img1.png";
import Group2img2 from "../images/Group2img2.png";
import Group2img3 from "../images/Group2img3.png";
import Group2img4 from "../images/Group2img4.png";
import Group2img5 from "../images/Group2img5.png";

const SponsorCard = [
  {
    image: Group2img1,
    des: "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India",
  },
  {
    image: Group2img4,
    des: "FliqaIndia got featured on Yourstory. Click here",
  },
  {
    image: Group2img5,
    des: "FliqaIndia got featured on Yourstory. Click here",
  },
  {
    image: Group2img2,
    des: "Received awards from ImagesBazaar on leading creative industry",
  },
  {
    image: Group2img3,
    des: "Top ten in Intuit Circle Codeathon, 2020",
  },
];

const Sponsors = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center content-center  "
        style={{
          background: "#ACCBC7",
          boxShadow: "0px 9px 19px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          padding: "2rem",
          margin: "2rem auto",
          width: "98%",
        }}
      >
        <div
          className="flex flex-col justify-center content-center"
          style={{ margin: "2rem auto" }}
        >
          <h2
            className="text-center font-bold text-xl"
            style={{
              color: "#4C696D",
              lineHeight: "45px",
              fontSize: "3rem",
            }}
          >
            Our Success
          </h2>
          <p className="text-center p-3 text-lg">Journey of our success.</p>
        </div>
        <div
          className="flex flex-row justify-center content-center flex-wrap gap-6"
          style={{ lineHeight: "19px" }}
        >
          {SponsorCard.map((e) => (
            <div className="md:basis-2/12 sm:basis-full">
              <div className=" flex  flex-col  items-center">
                <div
                  className="flex justify-center content-center h-60 w-60 bg-white border"
                  style={{ borderRadius: "50%",  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", }}>
                  <img src={e.image} alt="" className="w-30 h-30 self-center"/>
                </div>
                <p className="text-center p-2 leading-relaxed"> {e.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
