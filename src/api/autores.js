import axios from "axios";
export default class AutoresApi {
  async buscarTodosAutores() {
    const response = await axios.get("https://morbivros.herokuapp.com/autores");
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(
      `https://morbivros.herokuapp.com/autores/${id}`
    );
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post(
      "https://morbivros.herokuapp.com/autores",
      autor
    );
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(
      `https://morbivros.herokuapp.com/autores/${id}`
    );
    return response.data;
    autor;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://morbivros.herokuapp.com/autores/${autor.id}`,
      autor
    );
    return response.data;
  }
}
