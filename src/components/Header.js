import theme from "@/styles/thema";
import React from "react";

const Header = () => {
  return (
    <div
      className="p-5 flex flex-row justify-around items-center "
      style={{ backgroundColor: theme.Colors.darkblue }}
    >
      <div className=" p-5">
        <p className="text-2xl font-bold italic">ŞİFALAR AKARYAKIT</p>
      </div>
      <div>
        <ul className="flex justify-around ">
          <li className="hover:scale-110">
            <a>Anasayfa</a>
          </li>
          <li className="mx-5 hover:scale-110">
            <a>Hakkımızda</a>
          </li>
          <li className="hover:scale-110">
            <a>İletişim</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
