import { useState, useEffect } from "react";
import axios from "axios";

interface Tarefa {
  id: number;
  tarefa: string;
  descricao?: string;
  observacao?: string;
  realizada: boolean;
}

export function useTarefa() {
  const [formData, setFormData] = useState({ tarefa: "", descricao: "" });
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para manipular mudanças no formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para submeter o formulário e criar uma tarefa
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/tarefa", formData);
      console.log("Tarefa criada:", formData);
      setFormData({ tarefa: "", descricao: "" }); // Limpa o formulário
      fetchTarefas(); // Recarrega a lista de tarefas
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  // Função para buscar as tarefas da API
  const fetchTarefas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tarefa");
      setTarefas(response.data);
      setLoading(false);
    } catch (error) {
      setError("Erro ao carregar tarefas");
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!id || isNaN(id)) {
      console.error("ID inválido:", id);
      return;
    }
  
    const tarefaExcluida = tarefas.find(tarefa => tarefa.id === id);
    if (!tarefaExcluida) {
      console.error("Tarefa não encontrada na lista local:", id);
      return;
    }
  
    try {
      await axios.delete(`http://localhost:3000/tarefa/${id}`);
      console.log(`Tarefa excluída:`, tarefaExcluida);
      fetchTarefas(); // Atualiza a lista de tarefas após exclusão
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const handleRealizada = async (id: number, observacao: string) => {
    try {
      const response = await axios.patch(`http://localhost:3000/tarefa/${id}`, {
        realizada: true,
        observacao: observacao,
      });
      console.log(`Tarefa ${id} realizada`, response.data);
      fetchTarefas();
    } catch (error) {
      console.error("Erro ao marcar tarefa como realizada:", error);
    }
  };

  useEffect(() => {
    fetchTarefas();
  }, []);

  return { formData, handleSubmit, handleChange, tarefas, loading, error, fetchTarefas, handleDelete, handleRealizada };
}

