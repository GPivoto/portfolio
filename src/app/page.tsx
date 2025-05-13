import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home(){
  return(
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}