import Image from "next/image";
import fotoGabriel from "../assets/gabriel.png";
import { aboutGabriel, ferramentas } from "@/assets/assets";

export function AboutMe() {
  return (
    <section id="about" className="px-8 sm:px-14 md:px-20 mt-20 md:mt-25 scroll-mt-25">
      <h2 className="text-center text-2xl sm:text-3xl md:text-6xl">
        Sobre <span className="text-purple-100">Mim</span>
      </h2>

      <div className="flex max-w-300 mx-auto flex-col lg:flex-row items-center gap-10 md:gap-20 my-10 lg:my-0">
        <div>
          <Image
            src={fotoGabriel}
            alt="Foto Gabriel"
            className="rounded-3xl h-70 lg:h-110 w-70 object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-4xl mt-0 lg:mt-18 text-base md:text-lg">
            Sou um desenvolvedor front-end em formação, com vontade de aprender
            e crescer em cada projeto. Faço parte de uma empresa júnior do INATEL chamada CP2eJr, onde sou assessor do ND(núcleo de deselvovimento) e estou
            sempre buscando formas de otimizar processos e entregar valor com
            soluções criativas e bem estruturadas.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {aboutGabriel.map((item, index) => (
              <li
                key={index}
                className=" border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-purple-100/50 hover:-translate-y-1 duration-500 hover:shadow-black group"
              >
                <Image src={item.icon} alt={item.title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700  group-hover:text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600  group-hover:text-black">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 text-center lg:text-start md:text-lg">Ferramentas que eu uso </h4>
          <ul className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            {ferramentas.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={item.icon} alt={item.alt} className="w-7 md:w-8 " />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
