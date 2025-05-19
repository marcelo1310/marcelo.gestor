import imgHero from "../../assets/img/img-hero.jpg";

export function Home() {
  return (
    <section
      id="hero"
      className="text-[var(--branco)] w-full min-h-[600px] mt-25 flex flex-col items-center text-center lg:gap-7"
    >
      <h1
        className="text-4xl font-bold mt-8 border-amber-100 text-[var(--verde)]
      lg:text-5xl order-1"
      >
        Mais Visibilidade, Mais Clientes, Mais Vendas
      </h1>

      <div className="flex flex-col min-w-[70%] items-center justify-center lg:flex-row lg:w-[90%] xl:max-w-[80%] order-2">
        <img
          src={imgHero}
          alt="Imagem inicial"
          className="w-full lg:m-w-1/2 mt-1 rounded-md"
        />

        <p className=" text-lg text-justify m-2 font-semibold lg:text-2xl mb-6 w-full lg:m-4  md:leading-10 lg:leading-15">
          Eu ajudo negócios a atrair clientes todos os dias. Vejo de perto o
          esforço de quem empreende e entendi que, com os anúncios certos, é
          possível transformar não só um negócio, mas uma vida inteira.
        </p>
      </div>

      <a
        href="https://wa.me/message/B3VCHP5M4BW5E1"
        target="_blank"
        className="bg-[var(--verde)] text-white mt-1 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out order-3"
      >
        📲 Fale comigo no WhatsApp
      </a>
    </section>
  );
}
