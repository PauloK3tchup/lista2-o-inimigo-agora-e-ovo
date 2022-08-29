import axios from "axios";
export default class EditorasApi {
  async buscarTodasEditoras() {
    const response = await axios.get(
      "https://morbivros.herokuapp.com/editoras"
    );
    return response.data;
  }

  async buscarEditora(id) {
    const response = await axios.get(
      `https://morbivros.herokuapp.com/editoras/${id}`
    );
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post(
      "https://morbivros.herokuapp.com/editoras",
      editora
    );
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(
      `https://morbivros.herokuapp.com/editoras/${id}`
    );
    return response.data;
    editora;
  }

  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://morbivros.herokuapp.com/editoras/${editora.id}`,
      editora
    );
    return response.data;
  }
}
