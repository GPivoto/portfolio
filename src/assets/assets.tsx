import codeIcon from "../assets/code-icon.png"
import codeIconDark from "../assets/code-icon-dark.png"
import figma from "../assets/figma.png"
import git from "../assets/git.png"
import gitHubDark from "../assets/githubDark.svg"
import vsCode from "../assets/vscode.png"
import projectIcon from "../assets/project-icon.png"
import projectIconDark from "../assets/project-icon-dark.png"
import eduIcon from "../assets/edu-icon.png"
import eduIconDark from "../assets/edu-icon-dark.png"
import geia from "../assets/geia.png"
import virtualR from "../assets/virtualR.png"
import techstore from "../assets/techstore.png"
import projetoNext from "../assets/projetoNext.png"

export const aboutGabriel = [
    {icon: codeIcon, iconDark: codeIconDark, title: "Front End", text: "HTML, CSS, JavaScript, Typescript, React Js, Next Js, Tailwind CSS"},
    {icon: eduIcon, iconDark: eduIconDark, title: "Formação", text: "Cursando Engenharia de Software no INATEL"},
    {icon: projectIcon, iconDark: projectIconDark, title: "Projetos", text: "Envolvido em projetos acadêmicos e empresariais com foco em front-end e otimização"},
]

export const ferramentas = [
    {icon: vsCode, alt: "VS Code"},
    {icon: gitHubDark, alt: "Git Hub"},
    {icon: git, alt: "Git"},
    {icon: figma, alt: "Figma"},

]

export const projetos = [
  {
    title: "GEIA JR",
    href: "https://geiajr.com/",
    image: geia,
    description: "Site institucional desenvolvido para a empresa júnior GEIA, com foco em apresentar seus serviços e identidade.",
  },
  {
    title: "VirtualR",
    href: "https://virtual-r-five-umber.vercel.app/",
    image: virtualR,
    description: "Projeto criado para aprimorar minhas habilidades com React e Tailwind CSS, explorando animações e layout responsivo.",
  },
  {
    title: "Techstore",
    href: "https://techstore-github-io.vercel.app/",
    image: techstore,
    description: "Protótipo de e-commerce focado em tecnologia, desenvolvido com React e Tailwind CSS.",
  },
  {
    title: "Leora",
    href: "LeoraHair.com",
    image: projetoNext,
    description: "Projeto real de e-commerce desenvolvido para um cliente, utilizando Next.js e MongoDB para construção de um sistema dinâmico e escalável. (em desenvolvimento)",
  },
];
