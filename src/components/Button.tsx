import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="hidden dark:text-dark dark:border-dark text-nowrap lg:flex border border-gray-50 bg-p py-2 px-8 rounded-full gap-1 items-center justify-center text-gray-100 cursor-pointer hover:bg-purple-100 hover:text-white transition-colors duration-300 ease-in-out ">
      {text}
      <ArrowUpRight className="w-5 mt-1" />
    </button>
  );
}
