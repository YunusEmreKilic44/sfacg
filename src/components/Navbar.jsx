import { ArrowUp01, BookOpen, Coins, House, SquarePen } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#e29464] py-4">
      <nav className="max-w-300 text-white mx-auto items-center">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img className="mr-7.5" src="./logo.png" alt="Logo" />
            </Link>
            <NavLink to="/">
              <span className="flex flex-col justify-center items-center px-5.5">
                <House /> <Link to="/">Anasayfa</Link>
              </span>
            </NavLink>
            <NavLink to="/books">
              <span className="flex flex-col justify-center items-center px-5.5">
                <BookOpen /> Kütüphane
              </span>
            </NavLink>
            <NavLink to="/ranking">
              <span className="flex flex-col justify-center items-center px-5.5">
                <ArrowUp01 /> Sıralama
              </span>
            </NavLink>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="./sfacg.gif"
              alt="sfacg"
            />
            <span className="text-black">Merhaba, SF visitor</span>
            <NavLink className="mx-2.5" to="/register">
              Register
            </NavLink>
            <NavLink className="mx-2.5" to="/login">
              Login
            </NavLink>
            <NavLink
              className="mx-2.5 bg-[#d86a36] h-9 flex items-center rounded-[36px] text-[15px] px-2"
              to="/vip-packages"
            >
              <Coins className="mr-1" />
              VIP Paketi Yükle
            </NavLink>
            <NavLink
              className="mx-2.5 bg-[#d86a36] h-9 flex items-center rounded-[36px] text-[15px] px-4"
              to="/write"
            >
              <SquarePen className="mr-1" />
              Kitap Yaz
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
