import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="flex content-center cursor-pointer">
          <Link to="./" className="self-center">
            <p className="text-2xl intellia_heading text-white">
              Debug
            </p>
          </Link>
        </div>

        <ul className="app__navbar-links list-none flex justify-center content-center">
          {["signup", "signin"].map((item) => (
            <li
              className="app__flex p-text flex flex-col cursor-pointer mx-4"
              key={`link-${item}`}
            >
              <div />
              <Link to={`/${item}`} className="text-black">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.95, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["SignUp", "SignIn"].map((item) => (
                  <li key={item}>
                    <Link to={`./${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;