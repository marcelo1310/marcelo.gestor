import { Header } from "./components/header";
import { Home } from "./components/home";
import { Sobre } from "./components/sobre";
import { Beneficios } from "./components/beneficios";
import { Cases } from "./components/cases";
import { Contato } from "./components/contato";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="m-3 max-w-[1200px]">
      <Header />
      <Home />
      <Beneficios />
      <Cases />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
