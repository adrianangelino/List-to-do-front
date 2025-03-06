import { Link } from "react-router-dom"; // Importando Link para navegação
import TarefaForm from "../../components/TarefaForm"; // Importando o TarefaForm corretamente

function Home() {
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TarefaForm /> {/* Renderizando o TarefaForm */}
      <Link to="/tarefa">
        <button className="button">Ver Tarefas</button>
      </Link>
    </div>
  );
}

export default Home;
