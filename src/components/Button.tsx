import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="border border-gray-100 py-2 px-8 rounded-full gap-1 flex items-center justify-center text-gray-100 cursor-pointer hover:bg-purple-50 hover:text-white transition-colors duration-300 ease-in-out ">
      {text}
      <ArrowUpRight className="w-5 mt-1" />
    </button>
  );
}
