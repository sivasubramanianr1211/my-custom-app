// Description.tsx

import React from "react";
import DoubleImg from "../assets/do.png";
import MrImg from "../assets/mr.jpg";
import AaImg from "../assets/aa.jpg";
import SsrImg from "../assets/profile-img.jpg";
import JjImg from "../assets/jj.png";

const Description: React.FC = () => {
  return (
    <section id="description" className="p-2">
      <h2 className="text-[18px] border-2 rounded-[8px] p-2">
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
        <span className="flex  gap-[6px]">
          திரு.
          <b
            className="text-[#fff] text-[20px] "
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
      <div className="flex mt-[10px] justify-center gap-[20px] cursor-pointer">
        <div className="p-3">
          <img
            className="rounded-[8px] border-2 border-[#fff]"
            height={"120px"}
            width={"120px"}
            src={AaImg}
            alt=""
          />
          <div className="text-[10px] text-center mt-2">
            பனங்குடி <div>திரு. A. அந்தோணி</div>
          </div>
        </div>
        <div className="p-3">
          <img
            className="rounded-[8px] border-2 border-[#fff]"
            height={"120px"}
            width={"120px"}
            src={MrImg}
            alt=""
          />
          <div className="text-[10px] text-center mt-2">
            மேப்பல்<div>திரு. M. ராஜ்குமார்</div>
          </div>
        </div>
      </div>
      <div className="flex mt-[10px] justify-center gap-[20px] cursor-pointer">
        <div className="p-3">
          <img
            className="rounded-[8px] border-2 border-[#fff]"
            height={"120px"}
            width={"120px"}
            src={JjImg}
            alt=""
          />
          <div className="text-[10px] text-center mt-2">
            பனங்குடி <div>திரு. J. ஜெயக்குமார்</div>
          </div>
        </div>
        <div className="p-3">
          <img
            className="rounded-[8px] border-2 border-[#fff]"
            height={"120px"}
            width={"120px"}
            src={SsrImg}
            alt=""
          />
          <div className="text-[10px] text-center mt-2">
            பாகை<div> R. சிவசுப்ரமணியன்</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
