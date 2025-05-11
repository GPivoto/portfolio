"use client";

import Image from "next/image";
import fotoGabriel from "../assets/gabriel.png";
import maozinha from "../assets/hand-icon.png";
import Typewriter from "typewriter-effect";
import { Button } from "./Button";
import { ArrowRight, Download } from "lucide-react";

export function Header() {
  return (
    <section className="flex flex-col items-center justify-center mt-25 px-8 sm:px-14 md:px">
      <div className="flex flex-col items-center gap-5">
        <Image
          src={fotoGabriel}
          alt="Minha foto"
          className="size-30 md:size-40 object-cover rounded-full overflow-hidden rotate-12"
        />
        <div className="flex items-center text-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-nowrap">
            Olá, eu sou Gabriel Pivoto!
          </p>
          <Image
            src={maozinha}
            alt=""
            className="animate-wiggle-more animate-infinite animate-duration-600 animate-delay-200 size-6 md:size-8"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 sm:mt-8">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl max-w-200 text-center">
          Desenvolvedor front-end apaixonado por transformar{" "}
          <span className="text-purple-500">
            <Typewriter
              options={{
                strings: [
                  "desafios em soluções.",
                  "ideias em interfaces.",
                  "sonhos em aplicações.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-5 mt-9">
          <button className="cursor-pointer w-50 px-5 py-4  bg-purple-100 hover:bg-purple-100/90 active:bg-purple-800 text-white rounded-full flex items-center justify-center gap-2">
            <p className="text-nowrap">Entre em Contato</p>
            <ArrowRight className="w-5"/> 
          </button>
          <a href="/curriculoGabriel.pdf" download={true}>
            <button className="group cursor-pointer w-50 px-5 py-4 border border-gray-50 text-gray-100 rounded-full flex items-center justify-center gap-2">
              <p className="text-nowrap">Meu currículo</p>
              <Download className="group-hover:animate-bounce delay-200 duration-400 ease-in-out"/>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
