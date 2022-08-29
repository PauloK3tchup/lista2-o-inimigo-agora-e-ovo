import axios from "axios";
export default class CategoriasApi {
  async buscarTodasCategorias() {
    const response = await axios.get(
      "https://morbivros.herokuapp.com/categorias"
    );
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(
      `https://morbivros.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post(
      "https://morbivros.herokuapp.com/categorias",
      categoria
    );
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://morbivros.herokuapp.com/categorias/${id}`
    );
    return response.data;
    categoria;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(
      `https://morbivros.herokuapp.com/categorias/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
