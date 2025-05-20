import imgCampanha from "../../assets/img/img-campanha.png"

export function Cases () {
  return (
    <section className="flex flex-col w-full items-center rounder-sm">
      <div className="text-center lg:max-w-[80%] mt-8">
        <h2 className="m-6 text-center text-4xl font-bold text-[var(--verde)]">
          O impacto do tráfego pago
        </h2>
        <p className="text-lg font-semibold text-[var(--branco)] lg:text-center">
          Confira os resultados de uma campanha de fotografias para o natal que
          gerenciei. Nela os anúncios ficaram ativos por puco mais de uma semana
          e com menos de R$ 50,00 alcancei resultados.
        </p>
      </div>

      <div className=" flex flex-col w-full border-4 mt-5 border-[var(--verde)] bg-[var(--verde)] rounded-md">
        <img src={imgCampanha} alt="imagem de uma campanha" />
        <div className="flex flex-col w-full m-1">
            <h3 className=" text-xl font-semibold mt-5">Já imaginou pagar R$ 0,13 por um cliente?</h3>
            <ul className="flex flex-col gap-3 mt-5">
                <li>Resultados: 339 visitas ao perfil</li>
                <li>Alcance: 4.057 pessoas</li>
                <li>Impressões: 6.269</li>
                <li>Custo por visita: R$ 0,13</li>
                <li>Valor investido: R$ 43,36</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
