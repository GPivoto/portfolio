"use client";
import { Moon, X } from "lucide-react";
import { Button } from "./Button";
import { useState } from "react";
import menuBlack from "../assets/menu-black.png";
import Image from "next/image";

export function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <header className="shadow-black-50 w-full sticky top-0 bg-white z-50 backdrop-blur-3xl">
        <div
          id="home"
          className="max-w-400 mx-auto w-full py-3 flex justify-between items-center px-8 sm:px-14 md:px-20"
        >
          <h1 className="text-black-50 font-bold text-2xl md:text-3xl">
            <a href="#home">
              Gabriel<span className="text-purple-100">Pivoto.</span>
            </a>
          </h1>

          <nav className="hidden sm:block">
            <ul className="flex space-x-4 md:space-x-10 text-gray-100">
              <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <a
                  href="#home"
                  className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
                >
                  Home
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <a
                  href="#about"
                  className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
                >
                  Sobre mim
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <a
                  href="#projects"
                  className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
                >
                  Projetos
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <a
                  href="#contact"
                  className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
                >
                  Contato
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>

          <div className=" hidden lg:flex items-center space-x-5">
            <Moon className=" text-gray-100/80 cursor-pointer" />
            <a href="#contact">
              <Button text="Conecte-se" />
            </a>
            
          </div>

          <div className="sm:hidden flex items-center space-x-4">
            <Moon className="text-black cursor-pointer" />
            <Image
              onClick={() => setVisible(true)}
              src={menuBlack}
              alt=""
              className="w-5 h-4 cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* mobile menu */}

      <div
        className={`md:hidden z-99 fixed top-0 right-0 bottom-0 overflow-hidden bg-white border-l transition-all duration-500 ${
          visible ? "w-1/2" : "w-0"
        }`}
      >
        <div
          onClick={() => setVisible(false)}
          className="absolute right-6 top-6 cursor-pointer"
        >
          <X className="w-6 text-black" />
        </div>

        <ul className="mt-20 px-10 space-y-4">
          <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <a
              onClick={() => setVisible(false)}
              href="#home"
              className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <a
              onClick={() => setVisible(false)}
              href="#about"
              className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
            >
              Sobre mim
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <a
              onClick={() => setVisible(false)}
              href="#projects"
              className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
            >
              Projetos
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <a
              onClick={() => setVisible(false)}
              href="#contact"
              className="relative font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-purple-100 group"
            >
              Contato
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
