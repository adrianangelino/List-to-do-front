import React from 'react';
import { useTarefa } from '../../hooks/useTarefa';
import TarefaItem from '../../components/TarefaItem';

function TarefaList() {
  const { tarefas, fetchTarefas, loading, error, handleDelete, handleRealizada } = useTarefa();

  React.useEffect(() => {
    fetchTarefas();
  }, [fetchTarefas]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="tarefa-list">
      {tarefas.map((tarefa) => (
        <TarefaItem
          key={tarefa.id}
          tarefa={tarefa}
          handleDelete={handleDelete}
          handleRealizada={handleRealizada} // Passando o handleRealizada
        />
      ))}
    </div>
  );
}

export default TarefaList;
