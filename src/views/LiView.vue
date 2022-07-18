<script>
import axios from 'axios';

export default {
  data() {
    return {
      novo_livro: "",
      nova_categoria: "",
      novo_preco: "",
      nova_data: "",
      novo_n_pag: "",
      novo_idioma: "",
      novo_isbn: "",
      novo_autor: "",
      nova_editora: "",
      livros: [],
      categorias: [],
      autores: [],
      editoras: [],
    };
  },
  async created() {
    await this.buscarTodosLivros();
    await this.buscarTodasCategorias();
    await this.buscarTodosAutores();
    await this.buscarTodasEditoras();
    },
  methods: {
    async buscarTodosLivros(){
    const livros = await axios.get("http://localhost:4000/livros");
    this.livros = livros.data;
    },
    async buscarTodasCategorias(){
    const categorias = await axios.get("http://localhost:4000/categorias");
    this.categorias = categorias.data;
    },
    async buscarTodosAutores(){
    const autores = await axios.get("http://localhost:4000/autores");
    this.autores = autores.data;
    },
    async buscarTodasEditoras(){
    const editoras = await axios.get("http://localhost:4000/editoras");
    this.editoras = editoras.data;
    },
    async salvar() {
      if (
        this.novo_livro !== "" &&
        this.novo_preco !== "" &&
        this.nova_data !== "" &&
        this.novo_n_pag !== "" &&
        this.novo_idioma !== "" &&
        this.novo_isbn !== "" &&
        this.novo_autor !== "" &&
        this.novo_editora !== "" &&
        this.nova_categoria !== ""
      ) {
        const livro = {
          nome: this.novo_livro,
          categoria: this.nova_categoria,
          preco: this.novo_preco,
          data: this.nova_data,
          paginas: this.novo_n_pag,
          idioma: this.novo_idioma,
          isbn: this.novo_isbn,
          autor: this.novo_autor,
          editora: this.nova_editora,
        }
        const livro_criado = await axios.post("http://localhost:4000/livros", livro);
        this.livros.push(livro_criado.data)
      } else {
        alert("cu");
      }
    },
    async excluir(livro) {
      await axios.delete(`http://localhost:4000/livros/${livro.id}`)
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <h1 class="title">Cadastrar livro:</h1>
    <div class="inputs">
      <input
        type="text"
        placeholder="Nome do livro"
        id="nome_livro"
        v-model="novo_livro"
        @keypress.enter="salvar"
      />
      <select name="Selecione o Autor" v-model="novo_autor" id="autor">
        <option v-for="autor in autores" :key="autor.id" :value="autor.nome">{{ autor.nome }}</option>
      </select>
      <select name="Selecione a categoria" v-model="nova_categoria" id="categoria">
        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.nome">{{ categoria.nome }}</option>
      </select>
      <input
        type="number"
        placeholder="Número de página"
        id="n_paginas"
        v-model="novo_n_pag"
        @keypress.enter="salvar"
      />
      <input
        type="number"
        placeholder="Preço"
        id="n_preco"
        v-model="novo_preco"
        @keypress.enter="salvar"
      />
      <input
        type="date"
        placeholder="Data de lançamento"
        id="n_data"
        v-model="nova_data"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Idioma do livro"
        id="nome_idioma"
        v-model="novo_idioma"
        @keypress.enter="salvar"
      />
      <select name="Selecione a Editora" v-model="nova_editora" id="editora">
        <option v-for="editora in editoras" :key="editora.id" :value="editora.nome">{{ editora.nome }}</option>
      </select>
      <input
        type="text"
        placeholder="ISBN"
        id="ISBN"
        v-model="novo_isbn"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="lista">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Autor</th>
            <th>categorias</th>
            <th>Quant. Pág.</th>
            <th>Preço</th>
            <th>Data de lançamento</th>
            <th>Idioma</th>
            <th>Editora</th>
            <th>ISBN</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.nome">
            <th>{{ livro.nome }}</th>
            <th>{{ livro.autor }}</th>
            <th>{{ livro.categoria }}</th>
            <th>{{ livro.paginas }}</th>
            <th>{{ livro.preco }}</th>
            <th>{{ livro.data }}</th>
            <th>{{ livro.idioma }}</th>
            <th>{{ livro.editora }}</th>
            <th>{{ livro.isbn }}</th>
            <th>
              <button>✎</button>
              <button @click="excluir(livro)">☠</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<style scoped>
table {
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(0, 0, 0) 0px 0px 0px 3px;
  text-align: center;
  margin: 15px;
}

table thead {
  background-color: rgb(0, 0, 0);
  color: white;
}

table thead th {
  font-weight: bolder;
}

table tbody tr:nth-child(odd) {
  background-color: crimson;
  color: rgb(255, 255, 255);
}

th {
  padding: 10px;
  width: fit-content;
}

.lista {
  display: flex;
  justify-content: center;
}

.inputs {
  justify-content: center;
}

.inputs input,
select {
  border-radius: 10px;
  padding: 15px;
  border: solid 1px;
  width: 80%;
  display: table;
  margin: 10px auto;
}
.inputs button {
  border-radius: 10px;
  padding: 15px;
  border: 0ch;
  display: table;
  margin: 10px 167px;
  color: white;
  background-color: crimson;
  font-weight: bold;
  transition: 0.25s;
}

.inputs button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.title {
  text-align: center;
}
</style>
