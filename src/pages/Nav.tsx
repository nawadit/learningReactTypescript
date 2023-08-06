import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      {!show && (
        <div
          onClick={() => {
            setShow(true);
          }}
          className=" hidden sm:block cursor-pointer h-fit w-fit  bg-opacity-60 hover:scale-110 hover:shadow-sm bg-violet-400 rounded-full mt-3 fixed top-0 left-1 right-1  max-w-fit justify-center align-middle items-center  ease-in-out origin-left delay-200 overflow-hidden p-2 font-bold text-gray-900  py-2 px-3 "
        >
        <div>
          Menu
        </div>
        </div>
      )}
      <div
        className={`${
          show ? "" : "hidden"
        } flex bg-violet-400 rounded-full mt-3 fixed top-0 left-1 right-1 w-full  sm:max-w-fit justify-center align-middle items-center  ease-in-out origin-left delay-200 overflow-hidden p-2`}
      >
        <Link
          to="/"
          className=" block font-bold text-gray-900 cursor-pointer hover:scale-105 origin-left py-2 px-3 "
        >
          Home
        </Link>
        <Link
          to="/templatePath"
          className=" block font-bold text-gray-900 cursor-pointer hover:scale-105 origin-left py-2 px-3 "
        >
          About
        </Link>
        <Link
          to="/templatePath"
          className=" block font-bold text-gray-900 cursor-pointer hover:scale-105 origin-left py-2 px-3 "
        >
          Play
        </Link>
        <Link
          to="/templatePath"
          className=" block font-bold text-gray-900 rounded-full bg-violet-300 cursor-pointer hover:scale-105 origin-left py-2 px-3"
        >
          Notes
        </Link>
        <Link
          to="/templatePath"
          className=" block font-bold text-gray-900 cursor-pointer hover:scale-105 origin-left py-2 px-3 "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
