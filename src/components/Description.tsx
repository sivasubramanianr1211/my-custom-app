// Description.tsx

import React from "react";
import DoubleImg from "../assets/do.png";
import MrImg from "../assets/mr.jpg";
import AaImg from "../assets/aa.jpg";
import SsrImg from "../assets/profile-img.jpg";
import JjImg from "../assets/jj.png";
import useWindowSize from "../utils/useWindowSize";

const Description: React.FC = () => {
  const { width: windowWidth } = useWindowSize();
  const isMobile: boolean = windowWidth !== undefined && windowWidth < 768;
  return (
    <section id="description" className="">
      <h2
        style={{ textAlign: "center" }}
        className="text-[18px] border-2 text-center rounded-[8px] p-2"
      >
        தேர்தல் நாள் - 19-04-2024
      </h2>
      <p className="text-[18px] text-center mt-[10px]">
        நடைபெற இருக்கும் நாடாளுமன்ற தேர்தலில்{" "}
        <span
          className="text-[20px]"
          style={{
            textShadow: "0 0 3px #3bc9f3",
          }}
        >
          {" "}
          சிவகங்கை
        </span>{" "}
        தொகுதியில்{" "}
        <span
          className="text-[20px]"
          style={{
            textShadow: "0 0 3px #3bc9f3",
          }}
        >
          {" "}
          அதிமுக
        </span>{" "}
        வெற்றி வேட்பாளர் மண்ணின் மைந்தர் மதிப்பிற்குரிய பனங்குடி
        <span className="flex justify-center items-center gap-[6px]">
          திரு.
          <b
            className="text-[#fff] text-[26px] "
            style={{
              textShadow: "0 0 15px red, 0 0 15px white, 0 0 15px black",
            }}
          >
            {" "}
            A.சேவியர்தாஸ்
          </b>{" "}
        </span>{" "}
        அவர்களுக்கு இரட்டை இலைச் சின்னத்தில்{" "}
        <span className="flex justify-center">
          <img
            className="rounded-[8px]"
            height={"70px"}
            width={"70px"}
            src={DoubleImg}
            alt=""
          />
        </span>{" "}
        வாக்களித்து பெருவாரியான வாக்குகள் வித்தியாசத்தில் வெற்றி பெறச்
        செய்யுமாறு தொகுதி மக்கள் அனைவரையும் மிகவும் பணிவன்புடன்
        கேட்டுக்கொள்கிறோம்
      </p>
      <p className="mt-[20px] text-center text-[26px]">வாழ்த்துக்களுடன்</p>
      <div className=" mt-[6px] justify-center gap-[20px] cursor-pointer">
        <div className="p-2">
          {/* <img
            className="rounded-[8px] border-2 border-[#fff]"
            height={"120px"}
            width={"120px"}
            src={AaImg}
            alt=""
          /> */}
          <div className="text-[20px] text-center mt-2">
            பனங்குடி{" "}
            <div>
              {" "}
              <b
                className="text-[#fff] text-[18px] "
                style={{
                  textShadow: "0 0 15px red, 0 0 15px white, 0 0 15px black",
                }}
              >
                {" "}
                திரு. A. அந்தோணி அவர்கள்
              </b>{" "}
            </div>
          </div>
        </div>
        <div className="p-2">
          {/* <img
            className="rounded-[8px] border-2 border-[#fff]"
            height={"120px"}
            width={"120px"}
            src={MrImg}
            alt=""
          /> */}
          <div className="text-[20px] text-center mt-1">
            {" "}
            மேப்பல்
            <div>
              <b
                className="text-[#fff] text-[18px] "
                style={{
                  textShadow: "0 0 15px red, 0 0 15px white, 0 0 15px black",
                }}
              >
                {" "}
                திரு. M. ராஜ்குமார் அவர்கள்
              </b>{" "}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex mt-[10px] p-0 w-[100%] gap-[10px]  justify-center cursor-pointer">
        <div className="p-0">
          <img
            className="rounded-[50%] border-2 border-[#fff]"
            height={"60px"}
            width={"60px"}
            src={JjImg}
            alt=""
          />
          <div className="text-[8px] text-center mt-2  ">
            பனங்குடி <div>திரு. J. ஜெயக்குமார்</div>
          </div>
        </div>
        <div className="p-0">
          <img
            className="rounded-[50%] border-2 border-[#fff]"
            height={"60px"}
            width={"60px"}
            src={SsrImg}
            alt=""
          />
          <div className="text-[8px] text-center mt-2">
            பாகை<div> R. சிவ சுப்ரமணியன்</div>
          </div>
        </div>
        <div className="p-0">
          <img
            className="rounded-[50%] border-2 border-[#fff]"
            height={isMobile ? "60px" : "60px"}
            width={isMobile ? "60px" : "60px"}
            src={AaImg}
            alt=""
          />
          <div className="text-[8px] text-center mt-2">
            பனங்குடி<div> A. அருள் பிரகாஷ்</div>
          </div>
        </div>
        <div className="p-0">
          <img
            className="rounded-[50%] border-2 border-[#fff]"
            height={"60px"}
            width={"60px"}
            src={MrImg}
            alt=""
          />
          <div className="text-[8px] text-center mt-2">
            மேப்பல்<div> R. வைசால் மாணிக்கம்</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
