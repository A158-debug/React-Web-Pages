import React from "react";
import Group3img1 from "../images/Group3img1.png";
import Group3img2 from "../images/Group3img2.png";
import Group3img3 from "../images/Group3img3.png";
import Group3img4 from "../images/Group3img4.png";

const Wedding_card = [{ img: Group3img1,color:'#FBDADA' },{ img: Group3img2 ,color:'#FFF9D9'},{ img: Group3img3,color:'#DDE4FF' },{ img: Group3img4, color:'#DDF8F3'}];

const Wedding = () => {
  return (
    <>
      <div className="flex flex-col p-4 flex-wrap">
        <div className="basis-2/12 p-3 my-2">
          <p
            style={{ color: "#4C696D", lineHeight: "42px" }}
            className="text-4xl font-bold">
            Real Wedding
          </p>
          <p className="text-2xl p-1">List your wedding and browse portfolio</p>
        </div>
        <div className="basis-10/12 flex flex-row justify-around flex-wrap gap-y-5">
          {Wedding_card.map((e) => (
            <div
              className="flex flex-col justify-center content-center p-2 "
              style={{
                background: e.color,
                boxShadow: "0px 6px 7px rgba(0, 0, 0, 0.39)",
                borderRadius: "10px",
              }}
            >
              <img src={e.img} alt="" className="w-64 h-fit opacity-100" />
              <div className="p-2">
                <p className="font-bold">Danielle & Ronnie </p>
                <p>38 photos. Kittery,Polland</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wedding;
