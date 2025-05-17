import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import eu from "../../assets/img/eu.jpg"

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const links = [
    { nome: "Início", href: "#hero" },
    { nome: "Sobre", href: "#quem-sou" },
    { nome: "Benefícios", href: "#beneficios" },
    { nome: "Cases", href: "#cases" },
    { nome: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 flex justify-between text-[var(--branco)] items-center w-full h-[100px] bg-[var(--marrom)] px-6 border- border-b-[var(--cinza)] shadow-md shadow-white/2 z-10">
      <div id="logo" className="flex items-center">
        <img src={eu} alt="Logo" className="h-10 rounded-2xl" />
      </div>

      <nav className="flex items-center">
        {/* Botão de menu mobile */}
        <button onClick={toggleMenu} className="md:hidden z-50">
          {menuAberto ? <IoClose size={35} /> : <IoMenu size={35} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 2xl:gap-10">
          {links.map((link) => (
            <li key={link.nome}>
              <a
                href={link.href}
                className="hover:bg-[var(--verde)] px-4 py-2 rounded transition text-lg lg:text-1xl"
              >
                {link.nome}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Mobile */}
        <div
          className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-6 bg-[var(--marrom)]/95 backdrop-blur-sm transition-all duration-1000 ease-in-out
            ${menuAberto ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-[50px]"}
            md:hidden`}
        >
          <ul className="text-center text-xl">
            {links.map((link) => (
              <li key={link.nome} className="mb-4">
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="block px-6 py-2 hover:bg-[var(--verde)] rounded transition-all duration-300"
                >
                  {link.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}





/*
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <header
      id="cabecalho"
      className="flex justify-between w-full h-[100px] border-b-1 border-b-[var(--chumbo)]"
    >
      <div id="logo" className="flex w-30 items-center justify-center">
        <img src="" alt="" />
      </div>

      <div className="w-25 flex justify-center">
        <nav className="flex w-full text-center justify-center">
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden flex absolute top-8 right-8"
          >
            <IoMenu size={35}/>
          </button>

          <ul className=" hidden md:flex">
            <li>
              <a href="#"  className=" hover:bg-[var(--verde)]">
                Início
              </a>
            </li>
            <li>
              <a href="#"  className="hover:bg-[var(--verde)]">
                Sobre
              </a>
            </li>
            <li>
              <a href="#"  className="hover:bg-[var(--verde)]">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[var(--verde)]">
                Cases
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-[var(--verde)]">
                Contato
              </a>
            </li>
          </ul>

          <div
            className={`
        fixed top-0 left-0 w-full h-screen
        flex transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        backdrop-blur-sm bg-[var(--grafite)]/90
        ${
          menuAberto
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-[50px]"
        }
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/30 before:z-[-1]
       md:hidden
      `}
          >
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className={menuAberto ? "flex absolute top-8 right-8" : "hidden"}
            >
              <IoClose size={35}/>
            </button>
            <ul className="mt-15 w-full flex flex-col">
              {menuAberto && (
                <>
                  <li className="flex">
                    <a href="#" className=" w-full p-2 hover:bg-[var(--verde)] transition-all duration-[500ms]">
                      Início
                    </a>
                  </li>
                  <li className="flex">
                    <a href="#" className="w-full p-2 hover:bg-[var(--verde)] transition-all duration-[500ms]">
                      Sobre
                    </a>
                  </li>
                  <li className="flex">
                    <a href="#" className="w-full p-2 hover:bg-[var(--verde)] transition-all duration-[500ms]">
                      Benefícios
                    </a>
                  </li>
                  <li className="flex">
                    <a href="#"  className="w-full p-2 hover:bg-[var(--verde)] transition-all duration-[500ms]">
                      Cases
                    </a>
                  </li>
                  <li className="flex">
                    <a href="#"  className="w-full p-2 hover:bg-[var(--verde)] transition-all duration-[500ms]">
                      Contato
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

*/