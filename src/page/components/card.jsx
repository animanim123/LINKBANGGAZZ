import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const menuEN = [
    { title: "Projects", to: "/projects", icon: "fas fa-code" },
    { title: "Portfolio", to: "/notfound", icon: "fas fa-briefcase" },
    { title: "About Me", to: "/notfound", icon: "fas fa-user" },
    { title: "FAQ's", to: "/notfound", icon: "fas fa-question-circle" },
    { title: "Blog", to: "/notfound", icon: "fas fa-pen" },
    { title: "Services", to: "/notfound", icon: "fas fa-tools" },
    { title: "Contact", to: "/notfound", icon: "fas fa-envelope" },
  ];

  const menuID = [
    { title: "Projek", to: "/projects", icon: "fas fa-code" },
    { title: "Portofolio", to: "/notfound", icon: "fas fa-briefcase" },
    { title: "Tentang Saya", to: "/notfound", icon: "fas fa-user" },
    { title: "FAQ", to: "/notfound", icon: "fas fa-question-circle" },
    { title: "Blog", to: "/notfound", icon: "fas fa-pen" },
    { title: "Layanan", to: "/notfound", icon: "fas fa-tools" },
    { title: "Kontak", to: "/notfound", icon: "fas fa-envelope" },
  ];

  const socials = [
    { icon: "fab fa-youtube", link: "https://www.youtube.com/@ninopreset4739" },
    { icon: "fab fa-github", link: "https://github.com/BAGASHIDAYAT07" },
    { icon: "fab fa-tiktok", link: "https://www.tiktok.com/@ninopreset2" },
    { icon: "fab fa-instagram", link: "https://www.instagram.com/bang.gazzz" },
    { icon: "fab fa-facebook", link: "/notfound" },
    { icon: "fab fa-linkedin", link: "/notfound" },
  ];

  const profile = {
    img: "/pp.jpeg",
    name: "BANG GAZZ DEV",
    roleEN: "Fullstack Web & Game Developer",
    roleID: "Pengembang Website & Game Fullstack",
  };

  const menu = isEnglish ? menuEN : menuID;

  return (
    <div className="w-full flex justify-center items-center p-4 min-h-screen bg-black animate-bg">
      <div className="w-[420px] h-full bg-[#0d0d0d] text-white rounded-3xl shadow-2xl pb-10 pt-12 flex flex-col items-center border border-[#1a1a1a] fade-up">

        {/* BUTTON TRANSLATE */}
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="absolute top-5 right-5 bg-[#161616] border border-[#2a2a2a] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-[#1f1f1f]"
        >
          {isEnglish ? "ID" : "EN"}
        </button>

        {/* FOTO */}
        <img
          src={profile.img}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover border border-gray-700 shadow"
        />

        {/* NAMA */}
        <h1 className="mt-4 text-lg font-semibold tracking-wide">
          {profile.name}
        </h1>

        {/* ROLE */}
        <p className="text-[11px] text-gray-400 mt-1 tracking-wide text-center">
          {isEnglish ? profile.roleEN : profile.roleID}
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-4 text-xl text-gray-300">
          {socials.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:opacity-70 transition"
            >
              <i className={item.icon}></i>
            </Link>
          ))}
        </div>

        {/* MENU BUTTON */}
        <div className="mt-5 w-full px-8 flex flex-col gap-3">
          {menu.map((item, index) => (
            <Link key={index} to={item.to}>
              <button className="w-full py-3 rounded-xl bg-[#161616] border border-[#2a2a2a] text-gray-300 hover:bg-[#1f1f1f] transition flex items-center justify-between px-4 text-sm">
                <i className={`${item.icon} text-gray-400 text-base`}></i>

                <span className="flex-1 text-center tracking-wide">
                  {item.title}
                </span>

                <i className="fas fa-chevron-right text-gray-500 text-xs"></i>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <img src="../public/char.png" alt="" srcset="" className="fixed bottom-0 right-20 w-70 fade-up hidden lg:block" />
    </div>
  );
};

export default Card;
