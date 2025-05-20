export function Contato() {
  return (
    <section id="contato" className="flex flex-col w-full min-h-[350px] items-center text-center mt-5">
      <h2 className="m-6 text-4xl font-bold text-[var(--verde)]">Vamos conversar?</h2>
      <p className="m-3 text-lg font-semibold text-[var(--branco)] lg:text-center">
        A minha estratégia é simples: impulsionar sua marca, comunicar suas
        ideias e impactar pessoas.
      </p>
      <a
          href="https://wa.me/message/B3VCHP5M4BW5E1"
          target="_blank"
          className="bg-[var(--verde)] text-white m-3 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          📲 Fale comigo no WhatsApp
        </a>
    </section>
  );
}
