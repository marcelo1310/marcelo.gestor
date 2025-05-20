import moi from "../../assets/img/moi.jpg";

export function Sobre() {
  return (
    <section id="quem-sou" className="flex flex-col w-full text-center mt-5 bg-[var(--branco)] rounded-sm  order-1 lg:h-[550px]">
      <h2 className="m-6 text-4xl font-bold text-[var(--marrom)] text-center">Quem sou</h2>
      <div className="flex flex-col lg:flex-row lg:grid grid-cols-2 gap-5">
        <img src={moi} alt="Foto do Marcelo" className="w-full lg:" />
          <p className="text-lg font-semibold text-[var(--marrom)] m-5 text-justify">
           Olá! Me chamo Marcelo, sou apaixonado por tecnologia, comunicação e resultados. Atualmete curso Engenharia de Software e mergulhei no tráfego pago para ajudar negócios locais a crescerem online. Já gerenciei campanhas para fotografia e vi de perto como um bom anúncio atrai os clientes certos. Meu objetivo é tornar o marketing digital acessível, com estratégias simples e eficazes que geram mais visibilidade e vendas.
          </p>
      </div>
    </section>
  );
}
