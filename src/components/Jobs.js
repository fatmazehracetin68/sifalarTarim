import theme from "@/styles/thema";
import Image from "next/image";
import React from "react";

const Jobs = () => {
  return (
    <div className="flex w-full justify-center items-center ">
      <div
        style={{ backgroundColor: theme.Colors.darkblue }}
        className=" w-full flex flex-wrap justify-center items-center gap-4 p-4"
      >
        {[
          { title: "Tarım", src: "/tarım.jpeg" },
          { title: "Hayvancılık", src: "/hayvancılık.webp" },
          { title: "Akaryakıt", src: "/akaryakıt.jpeg" },
          { title: "Nakliyat", src: "/tır1.jpeg" },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-red-800 w-60 h-80 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="py-3 font-bold">{item.title}</h3>
            <div className="bg-red-600 w-full h-full relative overflow-hidden ">
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="p-4 rounded-bl-[80px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
