import "./App.css";
import NumAleatorio from "./component/NumAleatorio";
import Card1 from "./component/Card1";
import Card2 from "./component/Card2";
import Veiculos from "./component/Veiculos";
import CaracteristicasVeiculos from "./component/CaracteristicasVeiculos";

function App() {
  return (
    <main id="cards">
      <h1>React: Componentes Básicos</h1>
      <NumAleatorio min={30} max={50}></NumAleatorio>
      <Card1
        title="Exemplo 1 - Passagem de parâmetros  via props"
        text="Estou utlizando React"
      ></Card1>
      <Card2
        title="Exemplo 2 - Passagem de outro componente"
        text="Geração de números aleatórios"
      >
        <NumAleatorio min={30} max={50}></NumAleatorio>
      </Card2>

      <Veiculos titulo="Veículos" motor="1.0">
        <CaracteristicasVeiculos
          motor="Combustão"
          cambio="Manual"
          carroceria="Sedan"
        ></CaracteristicasVeiculos>
        <CaracteristicasVeiculos
          motor="Elétrico"
          cambio="Automático"
          carroceria="Hatch"
        ></CaracteristicasVeiculos>
      </Veiculos>
    </main>
  );
}

export default App;
