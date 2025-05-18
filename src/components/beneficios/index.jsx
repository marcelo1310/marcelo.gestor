import { Cards } from "../cards";

export function Beneficios() {
  const dadosDosCards = [
    {
      titulo: "Mais visibilidade",
      paragrafo:
        "Seus anúncios aparecem para as pessoas certas no momento certo",
    },
    {
      titulo: "Aumento nas vendas",
      paragrafo: "Atrai clientes interessados e prontos para comprar",
    },
    {
      titulo: "Resultados rápidos",
      paragrafo:
        "Diferente do tráfego orgânico, os anúncios geram impacto imediato",
    },
    {
      titulo: "Segmentação precisa",
      paragrafo:
        "Escolha o público ideal com base em idade, localização, interesses e mais",
    },
    {
      titulo: "Controle do investimento",
      paragrafo: "Você define o orçamento e ajusta conforme os resultados",
    },
    {
      titulo: "Mensuração dos resultados",
      paragrafo: "Acompanhe métricas e otimize para melhor desempenho",
    },
    {
      titulo: "Escalabilidade",
      paragrafo:
        "Se um anúncio está funcionando bem, aumenta o alcance rapidamente.",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full min-h-[600px] mt-5 rounded-sm">
      <div className="text-center lg:max-w-[80%] mt-8">
        <h2 className="m-6 text-center text-4xl font-bold text-[var(--verde)]">
          Por que Investir?
        </h2>
        <p className="text-justify text-lg font-semibold text-[var(--branco)] lg:text-center">
          O tráfego pago é uma ferramenta fundamental para o crescimento digital
          das empresas, pois ajuda a atrair clientes em potencial e a aumentar a
          visibilidade da marca.
        </p>
      </div>

      <div className="flex flex-col items-center gap-5 w-full mt-15">
        {dadosDosCards.map((card, index) => (
            <Cards key={index} titulo={card.titulo} paragrafo={card.paragrafo}/>
        ))}
      </div>
    </section>
  );
}
