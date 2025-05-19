import { Header } from "./components/header";
import { Home } from "./components/home";
import { Sobre } from "./components/sobre";
import { Beneficios } from "./components/beneficios";
import { Cases } from "./components/cases";

function App() {
  return (
    <div className="m-3 max-w-[1200px]">
      <Header />
      <Home /> 
      <Beneficios />
      <Cases />
      <Sobre />
    </div>
  );
}

export default App;
