import React from "react";
import Group8img1 from "../images/Group8img1.png";
import Group8img2 from "../images/Group8img2.png";
import Group8img3 from "../images/Group8img3.png";
import Group8img4 from "../images/Group8img4.png";

const Servies_card = [
  { img: Group8img1, des: "Pre Wedding Photoshoot" },
  { img: Group8img2, des: "Wedding Photoshoot" },
  { img: Group8img3, des: "Portfolio Shoot" },
  { img: Group8img4, des: "Birthday Baby Folio " },
];

const Servies = () => {
  return (
    <>
      <div className="flex flex-col p-4 flex-wrap">
        <div className="basis-2/12 p-3 my-2">
          <p
            style={{ color: "#4C696D", lineHeight: "42px" }}
            className="text-4xl font-bold"
          >
            Our Featured Services{" "}
          </p>
          <p>Discover the range of services provided by FliqaIndia</p>
        </div>
        <div className="basis-10/12 flex flex-row justify-around flex-wrap gap-y-5">
          {Servies_card.map((e) => (
            <div
              className="flex flex-col justify-center content-center p-2"
              style={{
                // background: "#DDF8F3",
                boxShadow: "0px 6px 7px rgba(0, 0, 0, 0.39)",
                borderRadius: "10px",
              }}
            >
              <img src={e.img} alt="" className="w-64 h-fit opacity-100" />
              <div className="p-2">
                <p className="text-center">{e.des}</p>
                <div className="flex flex-row justify-center p-1">
                  <div className="h-px bg-black w-11/12"></div>
                </div>
                <p className="text-center">Starting at 25,000 (One Day)</p>
              </div>
              <div className="flex  justify-center mb-3 mt-2">
                <p
                  className="w-8/12 bg-red-500 text-center p-1 text-white"
                  style={{ background: "#4E99A4", borderRadius: "10px" }}
                >
                  Know More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Servies;
