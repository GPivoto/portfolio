import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="max-w-300 w-full mx-auto mt-25 md:mt-30">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-black-50 font-bold text-2xl md:text-3xl">
         <span className="dark:text-dark">Gabriel</span><span className="text-purple-100">Pivoto.</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-250 mx-auto mt-2 md:mt-5 md:mb-2 mb-5 ">
        <div className="flex items-center space-x-2 mt-0 md:mt-3 mb-5">
          <Mail className="w-6 text-[#7c7c7c] stroke-gray-100 dark:stroke-dark" />
          <p className="text-gray-100 text-lg dark:text-dark">gabrielmpivoto10@gmail.com</p>
        </div>

        <div>
          <ul className="flex items-center gap-5">
            <a
              className="bg-purple-100 p-2 rounded-md group"
              href="https://www.linkedin.com/in/gabrielpivoto/"
              target="_blank"
            >
              <Linkedin className="w-6 fill-white stroke-white" />
            </a>

            <a
              className="bg-purple-100 p-2 rounded-md group"
              href="https://github.com/GPivoto"
              target="_blank"
            >
              <Github className="w-6 stroke-white fill-white " />
            </a>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-gray-400"></div>

      <div className="flex items-center justify-center mt-5">
        <p className="text-gray-100 text-center dark:text-dark">
          © 2025 Gabriel Pivoto. Todos direitos reservados.
        </p>
      </div>
    </footer>
  );
}
