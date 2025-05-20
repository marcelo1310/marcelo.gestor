export function Dores() {
  return (
    <section className="flex flex-col items-center mt-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-[var(--verde)]">
        Você está enfrentando algum desses desafios?
      </h2>

      <ul className="space-y-6 text-lg md:text-xl max-w-3xl mx-auto">
        <li>❌ Suas vendas não batem as metas no fim do mês</li>
        <li>❌ Depende só de indicação ou do Instagram para atrair clientes</li>
        <li>❌ Posta com frequência, mas não vê resultados reais</li>
        <li>❌ Cansado de esperar pelo crescimento orgânico</li>
        <li>❌ Não sabe por onde começar com os anúncios pagos</li>
      </ul>

      <p className="mt-10 text-xl md:text-2xl font-semibold">
        Se você se identificou com 1 ou mais desses pontos,{" "}
        <span className="text-[var(--verde)]">eu posso te ajudar.</span>
      </p>
    </section>
  );
}
