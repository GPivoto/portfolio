import Image from "next/image";
import fotoGabriel from "../assets/gabriel.png";
import { aboutGabriel, ferramentas } from "@/assets/assets";

export function AboutMe() {
  return (
    <section
      id="about"
      className="px-8 sm:px-14 md:px-20 mt-20 md:mt-25 scroll-mt-25"
    >
      <h2 className="text-center text-3xl md:text-5xl lg:text-6xl">
        <span className="dark:text-dark">Sobre</span>{" "}
        <span className="text-purple-100">Mim</span>
      </h2>

      <div className="flex w-full mx-auto flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 my-10 lg:my-0">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-10 max-w-4xl mt-0 lg:mt-18 text-base md:text-lg dark:text-dark">
            Sou desenvolvedor front-end em formação, com grande vontade de
            aprender e evoluir a cada projeto. Faço parte da CP2eJr, empresa
            júnior do INATEL, onde atuo como desenvolvedor front-end no Núcleo
            de Desenvolvimento (ND). Atualmente, também estou exercendo o papel
            de gerente de projeto, apoiando os trainees em seu desenvolvimento e
            contribuindo para a organização das entregas. Busco constantemente
            otimizar processos e gerar valor por meio de soluções criativas, bem
            estruturadas e alinhadas com as necessidades do cliente.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {aboutGabriel.map((item, index) => (
              <li
                key={index}
                className=" border-[0.5px] dark:bg-purple-100 border-gray-400 dark:border-purple-100 rounded-xl p-6 cursor-pointer hover:bg-purple-100/50 hover:-translate-y-1 duration-500 hover:shadow-black group"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="w-7 mt-3 block dark:hidden"
                />
                <Image
                  src={item.iconDark}
                  alt={item.title}
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700  group-hover:text-black dark:text-dark dark:group-hover:text-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600  group-hover:text-black dark:text-dark dark:group-hover:text-dark">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 text-center lg:text-start md:text-lg dark:text-dark">
            Ferramentas que eu uso{" "}
          </h4>
          <ul className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            {ferramentas.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                {item.alt === "Git Hub" ? (
                  <>
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      className="w-7 md:w-8 block dark:hidden"
                    />
                    <Image
                      src={item.iconDark}
                      alt={item.alt}
                      className="w-7 md:w-8 hidden dark:block"
                    />
                  </>
                ) : (
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    className="w-7 md:w-8"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
