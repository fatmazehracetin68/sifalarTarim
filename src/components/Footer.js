import theme from "@/styles/thema";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-800 h-16 flex justify-between items-center px-5">
      <div>
        Copyright © 2025
        <span className="font-bold mx-2" style={{ color: theme.Colors.darkblue }}>
          Şifalar Tarım
        </span>
        Tüm hakları saklıdır.
      </div>
      <a
        href="https://fatmazehracetin.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: theme.Colors.darkblue }}
        className="text-white italic px-4 py-2 rounded-lg transition-all ease-in-out duration-500 flex items-center group"
      >
        <span className="text-lg  transition-all duration-500  ease-in-out group-hover:hidden">
          FÇ
        </span>
        <span className="text-lg  transition-all duration-500 ease-in-out ml-2 hidden group-hover:inline">
          Fatma Zehra Çetin
        </span>
      </a>
    </div>
  );
};

export default Footer;
