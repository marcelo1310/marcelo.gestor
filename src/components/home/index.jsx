import imgHero from "../../assets/img/img-hero.jpg";

export function Home() {
  return (
    <section
      id="hero"
      className="flex text-[var(--branco)] w-full min-h-[600px] mt-25 justify-center bg-cover bg-center lg:gap-7 rounded-md"
      style={{ backgroundImage: `url(${imgHero})` }}
    >
      <div className="flex flex-col max-w-[90%] text-center items-center gap-15 mt-10">
        <h1
          className="text-3xl font-bold border-amber-100 text-[var(--verde)]
      lg:text-5xl"
        >
          Mais Visibilidade, Mais Clientes, Mais Vendas
        </h1>
        <p className="text-2xl">
          Tráfego pago simples, eficaz e feito sob medida para negócios que
          querem vender mais.
        </p>

        <a
          href="https://wa.me/message/B3VCHP5M4BW5E1"
          target="_blank"
          className="bg-[var(--verde)] text-white mt-1 px-15 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          📲 Quero vender mais
        </a>

        <p className="text-lg lg:text-2xl mb-6 w-full lg:m-4  md:leading-10 lg:leading-15">
          Eu ajudo negócios a atrair clientes todos os dias. Vejo de perto o
          esforço de quem empreende e entendi que, com os anúncios certos, é
          possível transformar não só um negócio, mas uma vida inteira.
        </p>
      </div>
    </section>
  );
}
