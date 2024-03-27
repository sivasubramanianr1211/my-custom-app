// Header.tsx

import React, { useState } from "react";
import useWindowSize from "../utils/useWindowSize";
import MgImg from "../assets/Mgr.jpg";
import JyImg from "../assets/Jaya.jpg";
import EpImg from "../assets/eps.jpg";
import PrsImg from "../assets/prs.jpg";
import GbImg from "../assets/Gb.jpg";

const Header: React.FC = () => {
  const { width: windowWidth } = useWindowSize();
  console.log(windowWidth);
  const isMobile: boolean = windowWidth !== undefined && windowWidth < 768;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="flex justify-center">
          <div
            className={`flex justify-center ${isMobile ? "gap-[10px]" : "gap-[30px]"} cursor-pointer`}
            onClick={toggleMenu}
          >
            <img
              className="rounded-[8px] border-2 border-[#00D100]"
              height={"55px"}
              width={"55px"}
              src={MgImg}
              alt=""
            />
            <img
              className="rounded-[8px] border-2 border-[#00D100]"
              height={"55px"}
              width={"55px"}
              src={JyImg}
              alt=""
            />
            <img
              className="rounded-[8px] border-2 border-[#00D100]"
              height={"55px"}
              width={"55px"}
              src={EpImg}
              alt=""
            />
            <img
              className="rounded-[8px] border-2 border-[#00D100]"
              height={"55px"}
              width={"55px"}
              src={PrsImg}
              alt=""
            />
            <img
              className="rounded-[8px] border-2 border-[#00D100]"
              height={"55px"}
              width={"55px"}
              src={GbImg}
              alt=""
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
