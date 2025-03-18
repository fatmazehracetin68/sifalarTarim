import theme from "@/styles/thema";
import React from "react";
import Link from "next/link";

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
            <Link href="/">Anasayfa</Link>
          </li>
          <li className="mx-5 hover:scale-110">
            <Link href="/about">Hakkımızda</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/contact">İletişim</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
