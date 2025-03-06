import { useTarefa } from "../hooks/useTarefa";

function TarefaForm() {
  const { formData, handleSubmit, handleChange } = useTarefa();

  console.log("Form Data:", formData); // Para verificar se os dados estão sendo atualizados

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="tarefa"
        placeholder="Tarefa"
        value={formData.tarefa}
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={formData.descricao}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="button">Adicionar</button>
    </form>
  );
}

export default TarefaForm;
