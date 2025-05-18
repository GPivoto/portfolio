import { projetos } from "@/assets/assets";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="px-8 sm:px-14 md:px-20 mt-20 md:mt-25 scroll-mt-25">
      <div className="max-w-300 mx-auto w-full">
        <div className="flex flex-col items-center space-y-5 md:space-y-7">
          <p className="text-xl sm:text-2xl md:text-3xl dark:text-dark">Meu Portfólio</p>
          <h3 className="text-3xl md:text-5xl lg:text-6xl">
            <span className="dark:text-dark">Alguns</span> <span className="text-purple-100">projetos</span>
          </h3>
          <p className="text-center max-w-3xl md:text-lg leading-7 dark:text-dark">
            Esta seção reúne projetos desenvolvidos tanto para clientes quanto
            como parte do meu processo de aprendizado. Cada um representa uma
            oportunidade de aplicar boas práticas em design, usabilidade e
            performance, além de explorar novas soluções no desenvolvimento
            front-end.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-16">
          {projetos.map((item, index) => (
            <li
              key={index}
              className=" flex flex-col lg:flex-row items-center justify-center border border-gray-400 dark:border-purple-100 rounded-xl py-5 px-5 md:gap-6  hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-purple dark:text-dark"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full cursor-default flex items-center justify-center"
              >
                <Image
                  src={item.image}
                  alt="foto projeto"
                  className="w-80 cursor-pointer"
                />
              </a>

              <div className="flex flex-col gap-y-5">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-default max-w-30"
                >
                  <h4 className="cursor-pointer text-center md:text-start pt-2 uppercase flex gap-2 transition-all duration-600 ease-in-out hover:text-purple-100 group relative">
                    {item.title}{" "}
                    <ArrowRightCircle className="w-5 tex-gray-400" />{" "}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-100 transition-all duration-500 group-hover:w-full"></span>
                  </h4>
                </a>
                <p className="max-w-100">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
