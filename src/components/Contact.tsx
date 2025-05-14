'use client'

import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { Footer } from "./Footer";

export function Contact() {

  /* Usei a api do web3Forms para meu formulário */

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "15c50ac9-0bb2-4378-ade5-8d111ea9bf42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulário enviado com sucesso!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Erro", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="px-8 sm:px-14 md:px-20 mt-20 md:mt-25 scroll-mt-25"
    >
      <div className="flex flex-col items-center space-y-3">
        <h5 className="text-xl sm:text-2xl md:text-3xl">Conecte-se comigo</h5>
        <h3 className="text-3xl md:text-5xl lg:text-6xl">
          Entre em <span className="text-purple-100">Contato</span>
        </h3>
        <p className="text-center max-w-[577px] mt-2 md:leading-7">
          Adoraria ouvir você! Se tiver alguma dúvida, comentário ou sugestão,
          por favor, use o formulário abaixo.
        </p>
      </div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Digite seu nome"
            required
            name="name"
          />
          <input
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Digite seu e-mail"
            required
            name="email"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6"
          rows={6}
          placeholder="Digite sua mensagem"
          required
          name="message"
        ></textarea>
        <button
          type="submit"
          className="mx-auto cursor-pointer w-50 px-5  py-2 md:py-3  bg-purple-100 hover:bg-purple-100/90 active:bg-purple-800 text-white rounded-full flex items-center justify-center gap-2 "
        >
          Enviar agora
          <ArrowRight className="w-5 mt-1" />
        </button>

        <p className="mt-4">{result}</p>
      </form>

      <Footer />
    </section>
  );
}
