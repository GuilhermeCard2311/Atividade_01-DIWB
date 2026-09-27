import './App.css'
import Cabecalho from "./components/Cabecalho";

const App = () =>{
  return(
    <div>
      <Cabecalho />
      <h1>Minha primeira aplicação React</h1>
      <h1>Bem vindo as aulas de <span className="destaque">DWBE</span></h1>
    </div>
  ); 
}

export default App;
