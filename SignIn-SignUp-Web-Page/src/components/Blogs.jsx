import React from "react";
import Group9img1 from '../images/Group9img1.png'
const Blogs = () => {
  return (
    <>
      <div
        className="flex flex-col flex-wrap p-2 "
        style={{ background: "#DDF8F3" }}
      >
        <div className="flex basis-2/12">
          <div>
            <p>Our Blogs</p>
            <p>Check out our Latest Blog</p>
          </div>
        </div>
        <div className="flex basis-10/12 flex-row">
          <div className="basis-7/12 flex-row flex-wrap flex">
            <img src={Group9img1} alt="" className="w-2/4 " />
            <img src={Group9img1} alt="" className="w-2/4" />
          </div>
          <div className="basis-5/12 flex flex-col flex-wrap">
            <div className="basis-2/12 flex flex-row justify-between">
              <p>Trending Now</p>
              <p>View All</p>
            </div>
            <div className="basis-10/12 flex flex-col flex-wrap">
              <div className="flex flex-row justify-center content-center">
                <img src={Group9img1} alt="" className="w-32" />
                <div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam a placeat quae repellendus animi eius minima
                    quibusdam dolor impedit ipsa?
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center content-center">
                <img src={Group9img1} alt="" className="w-32" />
                <div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam a placeat quae repellendus animi eius minima
                    quibusdam dolor impedit ipsa?
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center content-center">
                <img src={Group9img1} alt="" className="w-32" />
                <div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam a placeat quae repellendus animi eius minima
                    quibusdam dolor impedit ipsa?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
