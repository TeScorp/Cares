import logo from "../../assets/images/logo.png";
import userImg from "./../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

const navlinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/Contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  return (
    <header className="header flex items center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="LOGO" />
          </div>

          {/* NAVBAR */}

          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[14px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to="Login">
              <button className=" py-1 px-3 text-black font-[600] h-[44px] flex items-center justify-center">
                Login
              </button>
            </Link>

            <Link to="Register">
              <button className="bg-primaryColor py-1 px-3 text-white font-[600] h-[24px] flex items-center justify-center rounded-[70px]">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
