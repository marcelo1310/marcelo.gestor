import { Header } from "./components/header";
import { Home } from "./components/home";
import { Sobre } from "./components/sobre";

function App() {
  return (
    <div className="m-3 max-w-[1200px]">
      <Header />
      <Home />
      <Sobre />
    </div>
  );
}

export default App;
