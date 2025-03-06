import React, { useState, useEffect } from 'react';
import './TarefaItem.css';

function TarefaItem({ tarefa, handleRealizada, handleDelete }) {
  const [observacao, setObservacao] = useState(tarefa.observacao || '');
  const [realizada, setRealizada] = useState(tarefa.realizada || false);

  // Exibe a observação no card depois de ser enviada
  useEffect(() => {
    if (tarefa.observacao) {
      setObservacao(tarefa.observacao); // Atualiza o estado da observação com o valor do banco
    }
  }, [tarefa.observacao]);

  const handleObservacaoChange = (e) => {
    setObservacao(e.target.value);
  };

  const handleRealizadaClick = () => {
    setRealizada(true); // Marca a tarefa como realizada no frontend
  };

  const handleEnviarClick = () => {
    handleRealizada(tarefa.id, observacao); // Envia a observação e o id para o backend
    setRealizada(true); // Marca a tarefa como realizada no frontend
  };

  return (
    <div className={`tarefa-item ${realizada ? 'realizada' : ''}`}>
      <div className="tarefa-texto">
        <h3>{tarefa.tarefa}</h3>
        <p>{tarefa.descricao}</p>
        {realizada && tarefa.observacao && (
          <p className="observacao-texto">Observação: {tarefa.observacao}</p> // Exibe a observação do banco
        )}
      </div>
      <div className="tarefa-buttons">
        {!realizada ? (
          <button onClick={handleRealizadaClick} className="realizada-btn">
            Realizada
          </button>
        ) : (
          <>
            {!tarefa.observacao && (
              <>
                <textarea
                  className="observacao-input"
                  value={observacao}
                  onChange={handleObservacaoChange}
                  placeholder="Escreva uma observação (0 a 10)"
                />
                <button onClick={handleEnviarClick} className="enviar-btn">
                  Enviar
                </button>
              </>
            )}
          </>
        )}
        <button onClick={() => handleDelete(tarefa.id)} className="excluir-btn">
          Excluir
        </button>
      </div>
    </div>
  );
}

export default TarefaItem;
