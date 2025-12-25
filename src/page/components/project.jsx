import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
    const datas = [
        { title: "WEB MY PERPUSTAKAAN", to: "/notfound", icon: "fas fa-book" },
        { title: "WEB TOKO KUE", to: "/notfound", icon: "fas fa-birthday-cake" },
        { title: "WEB ANIME", to: "/notfound", icon: "fas fa-film" },
        { title: "WEB WAIFU RATE", to: "/notfound", icon: "fas fa-heart" },
    ];

  return (
  <div className="w-full flex justify-center p-4 min-h-screen bg-black animate-bg">
    <div className="w-[1000px] h-full bg-[#0d0d0d] text-white rounded-3xl shadow-2xl pb-10 pt-8 flex flex-col items-center border border-[#1a1a1a] fade-up">

        {/* BUTTON KEMBALI */}
        <Link
        to="/"
        className="absolute top-5 right-5 bg-[#161616] border border-[#2a2a2a] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-[#1f1f1f] flex items-center justify-center"
        >
        ✕
        </Link>

      <h1 className="text-lg font-semibold tracking-wide">
        MY PROJECTS
      </h1>

      {/* GRID MENU */}
      <div className="mt-6 w-full px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {datas.map((item, index) => (
          <Link key={index} to={item.to}>
            <div className="w-full py-5 rounded-xl bg-[#161616] border border-[#2a2a2a] text-gray-300 hover:bg-[#1f1f1f] transition flex flex-col items-center justify-center gap-2 text-sm text-center">

              <i className={`${item.icon} text-gray-400 text-xl`}></i>

              <span className="tracking-wide text-[13px] px-1">
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  </div>
);

};

export default Project;
