// Profile.tsx

import React from "react";
import ProfileImg from "../assets/profile-img-1.jpg";

const Profile: React.FC = () => {
  return (
    <div className="items-center m-0 p-[20px]">
      <p className="flex justify-center text-center text-[17px] text-[#1b0e64] w-[100%] ">
        நம்மில் ஒருவர்!
      </p>
      <p className="flex justify-center text-center text-[17px] text-[#1b0e64] w-[100%] mb-[10px] ">
        நமக்கான ஒருவர்!
      </p>
      <div className="flex justify-center">
        <div className="border-solid border-[4px] border-[#000] rounded-[10px]">
          <div className="border-solid border-[4px] border-[#FFF] rounded-[10px]">
            <div className="border-solid border-[4px] border-[#FF0000] rounded-[10px]">
              <img
                className="rounded-[8px]"
                height={"200px"}
                width={"200px"}
                src={ProfileImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-[20px] text-[#1b0e64] p-[0px]">
        <p className="text-[17px] w-[100%] mb-[27px] ">
          <span
            style={{
              textShadow: "0 0 1px black",
            }}
          >
            சிவகங்கை
          </span>{" "}
          நாடாளுமன்ற தொகுதி{" "}
          <span
            style={{
              textShadow: "0 0 1px black",
            }}
          >
            {" "}
            அதிமுக
          </span>{" "}
          வெற்றி வேட்பாளர்{" "}
          <span className="flex items-center justify-center gap-[6px]">
            திரு
            <b
              className="text-[#fff] text-[20px] "
              style={{
                textShadow: "0 0 15px red, 0 0 15px white, 0 0 15px black",
              }}
            >
              {" "}
              A.சேவியர்தாஸ்
            </b>{" "}
          </span>
          அவர்கள்
        </p>
        <table className="table-auto w-[100%] border-collapse border border-[#1b0e64] rounded-[8px] text-[16px] font-[700]">
          <tbody>
            <tr>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                பிறந்த தேதி
              </td>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                23-01-1975
              </td>
            </tr>
            <tr>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                ஊர்
              </td>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                பனங்குடி, சிவகங்கை
              </td>
            </tr>
            <tr>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                பிரிவு
              </td>
              <td className="border-2 border-[#1b0e64]  rounded px-1 py-2">
                முக்குலத்தோர் (கள்ளர்)
              </td>
            </tr>
            <tr>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                குலதெய்வம்
              </td>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                ஸ்ரீ திருத்தி கருப்பர்
              </td>
            </tr>
            <tr>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                கழகப் பணி
              </td>
              <td className="border-2 border-[#1b0e64]  rounded px-1 py-2">
                1997ம் ஆண்டு முதல்
              </td>
            </tr>
            <tr>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                கழகப் பொறுப்பு
              </td>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                ஒன்றியச் செயலாளர், கல்லல் தெற்கு
              </td>
            </tr>
            <tr>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                மாவட்ட கௌரவத் தலைவர்
              </td>
              <td className="border-2 border-[#1b0e64] rounded px-1 py-2">
                தமிழ்நாடு வடமாடு நலச்சங்கம்
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
