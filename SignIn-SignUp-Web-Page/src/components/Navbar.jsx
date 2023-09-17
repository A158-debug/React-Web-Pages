import React from "react";
import Fliga_logo from "../images/Fliga_logo.png";
import Group1img1 from "../images/Group1img1.png";
import Group1img2 from "../images/Group1img2.png";
import Group1img4 from "../images/Group1img4.png";
import Group1img5 from "../images/Group1img5.png";
import image5 from "../images/image5.png";

const Cards = [
  { img: Group1img1, des1: "Verified Reviews", des2: "For verified reviewers" },
  { img: Group1img2, des1: "Top Articles", des2: "Helps you decide" },
  {
    img: Group1img4,
    des1: "Write Share Win Contest",
    des2: "Earn Cash for reviews",
  },
  { img: Group1img5, des1: "MouthShut for Brands", des2: "Request a demo" },
];

const Navbar = () => {
  return (
    <>
      <div
        className="text-white"
        style={{
          background: "#131514",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="md:flex md:flex-row sm:flex sm:flex-col flex-wrap">
          <div class="basis-2/12 flex flex-row flex-wrap justify-center content-center">
            <img
              src={Fliga_logo}
              alt="Fliga_logo"
              className="h-16 my-3 cursor-pointer "
            />
          </div>
          <div class="basis-6/12 flex flex-row flex-wrap justify-around items-center text-lg tracking-wide py-2 px-3  gap-x-5">
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Home</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Services</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Portfolio</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Community</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Blog</p>
            </div>
          </div>
          <div class="basis-4/12 flex flex-row justify-center content-center items-center pr-8">
            <div
              className="cursor-pointer py-2 px-5 mr-10 sm:my-2 md:my-0 rounded-lg hover:text-zinc-400"
              style={{
                background:
                  "linear-gradient(180deg, rgba(78, 153, 164, 0.95) 0%, #004D58 100%)",
              }}
            >
              Sign Up
            </div>
            <div
              className="cursor-pointer py-2 px-5 rounded-lg hover:text-zinc-400"
              style={{
                background:
                  "linear-gradient(180deg, rgba(78, 153, 164, 0.95) 0%, #004D58 100%)",
              }}
            >
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <img src={image5} alt="" />
      </div>

      <div className="flex flex-col justify-center content-center mt-4">
        <div className="my-5">
          <p
            className="font-bold text-6xl text-center"
            style={{
              fontFamily: "Jura",
              mixBlendMode: "multiply",
              color: "#000000",
              lineHeight: "76px",
              fontStyle: "normal",
            }}
          >
            India's Leading Creative Platform
          </p>
          <p
            className="text-center font-light text-3xl mt-2"
            style={{
              color: " #4C696D",
              lineHeight: "32px",
              fontFamily: "Josefin Sans",
              fontStyle: "normal",
            }}
          >
            Experience hassle free bookings. Trusted by 2500+ Customers
          </p>
        </div>
        <div className="my-10 text-center">
          <input
            type="text"
            className="w-4/12 h-8 border-2 rounded-l-lg p-2"
            placeholder="Search service, blog and many more…
"
          />
          <button
            className="text-white py-2 px-4 w-40"
            style={{
              background: "#221010",
              border: "1px solid #000000",
              borderRadius: "34px",
            }}
          >
            Search
          </button>
        </div>
        <div className="sm:flex sm:flex-col md:flex md:flex-row justify-around content-center flex-wrap gap-y-5">
          {Cards.map((e) => (
            <div className="justify-around content-center  flex flex-row p-2">
              <img src={e.img} alt="" className="h-20" />
              <div className="self-center pl-3 ">
                <p className="text-2xl font-semibold">{e.des1}</p>
                <p>{e.des2}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center my-10">
          <div className="h-px bg-black w-11/12 mt-10"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
