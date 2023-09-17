import React from "react";
import Rectangle208 from "../images/Rectangle208.png";
import Rectangle209 from "../images/Rectangle209.png";
import Group4img1 from "../images/Group4img1.png";

const Awards = () => {
  return (
    <>
      <div
        className="flex flex-row flex-wrap md:p-4 sm:p-2"
        style={{
          background: "#DDF8F3",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          width: "98%",
          margin: "2rem auto",
        }}
      >
        <div
          className="md:basis-1/2 sm:basis-full flex flex-row justify-around content-center flex-wrap p-2"
          style={{
            background: "#4E99A4",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          }}
        >
          <img
            src={Rectangle208} alt="" style={{width: "300px", padding:'5px'}} />
          <img src={Rectangle209} alt="" style={{width: "300px",padding:'5px'}}  />
        </div>
        <div className="md:basis-1/2 sm:basis-full flex flex-row flex-wrap p-1 justify-center border ">
          <div className="lg:basis-1/2 sm:basis-full flex flex-col justify-around content-center border p-4 gap-y-3">
            <div
              className="flex flex-row justify-around p-1"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Group4img1}
                alt=""
                style={{ height: "63px", width: "auto" }}
              />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="flex flex-row justify-around p-1"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Group4img1}
                alt=""
                style={{ height: "63px", width: "auto" }}
              />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="flex flex-row justify-around p-1"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Group4img1}
                alt=""
                style={{ height: "63px", width: "auto" }}
              />
              <span className="self-center">4.9/5</span>
            </div>
          </div>
          <div className="lg:basis-1/2 sm:basis-full flex flex-col justify-around content-center  p-4 gap-y-3">
            <div
              className="flex flex-row justify-around p-1"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Group4img1}
                alt=""
                style={{ height: "63px", width: "auto" }}
              />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="flex flex-row justify-around p-1"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Group4img1}
                alt=""
                style={{ height: "63px", width: "auto" }}
              />
              <span className="self-center">4.9/5</span>
            </div>
            <div
              className="flex flex-row justify-around p-1"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Group4img1}
                alt=""
                style={{ height: "63px", width: "auto" }}
              />
              <span className="self-center">4.9/5</span>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Awards;
