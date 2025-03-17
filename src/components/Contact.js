import theme from "@/styles/thema";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-200 w-full flex justify-center items-center py-10">
      <div
        style={{ backgroundColor: theme.Colors.darkblue }}
        className="w-[90%] max-w-5xl px-10 py-5 flex flex-col lg:flex-row items-center lg:items-start"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl mb-3 mt-5 text-white font-bold">ŞİFALAR TARIM</h1>
          <h2 className="text-lg lg:text-xl text-white">
            Hayvancılık, Nakliyat, Akaryakıt <br /> İnş. San. ve Tic. LTD. ŞTİ.
          </h2>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div>
            <h2 className="text-xl text-white font-semibold">İLETİŞİM</h2>
            <div className="bg-red-800 h-1 w-20 my-2"></div>
          </div>

          <div className="space-y-4 text-white">
            <div className="flex items-center">
              <LuMapPin className="text-2xl text-red-800 mr-2" />
              <p>DURHASANLI KÖYÜ ORTAKÖY AKSARAY</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl text-red-800 mr-2" />
              <p>0545 668 76 96</p>
            </div>
            <div className="flex items-center">
              <MdEmail className="text-2xl text-red-800 mr-2" />
              <p>sifalartarim68@gmail.com</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start space-x-4 mt-5">
            <FaFacebook className="text-2xl text-white cursor-pointer hover:text-gray-300 transition" />
            <FaInstagram className="text-2xl text-white cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
