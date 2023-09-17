import React from "react";
import Group7img1 from "../images/Group7img1.png";
import Group7img2 from "../images/Group7img2.png";
import Group7img3 from "../images/Group7img3.png";
import Group7img4 from "../images/Group7img4.png";
import Group7logo from "../images/Group7logo.png";

const Associates_card = [
  { img: Group7img1 },
  { img: Group7img2 },
  { img: Group7img3 },
  { img: Group7img4 },
];
const Associates = () => {
  return (
    <>
      <div
        className="flex flex-col flex-wrap p-3"
        style={{ background: "#A1E3D8" }}
      >
        <div className="basis-2/12 flex flex-row justify-between p-2 ">
          <div className="p-2 " style={{ color: "#4C696D" }}>
            <p className="text-4xl font-bold">Find Trusted Associate</p>
            <p className="text-2xl">
              Find the best Fliqa Associate for your special day.
            </p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-semibold">
              See More {">"}
              {">"}
            </p>
          </div>
        </div>
        <div className="basis-10/12 p-2 flex flex-row justify-around content-center  flex-wrap mb-5 gap-y-5">
          {Associates_card.map((e) => (
            <div
              className="flex flex-col"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                borderRadius: "24px",
              }}
            >
              <img src={e.img} alt="" />
              <div
                className="flex flex-row justify-around bg-black p-1"
                style={{
                  borderBottomRightRadius: "24px",
                  borderBottomLeftRadius: "24px",
                }}
              >
                <div className="text-white p-1">
                  <p>Name Title</p>
                  <p>Location</p>
                </div>
                <img src={Group7logo} alt="" className="w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Associates;
