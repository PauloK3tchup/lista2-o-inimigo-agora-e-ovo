<script>
export default {
  data() {
    return {
      novo_livro: "",
      novo_genero: "",
      novo_n_pag: "",
      novo_preco: "",
      novo_idioma: "",
      nova_editora: "",
      novo_isbn: "",
      livros: [
        {
          nome: "Harry Poggers",
          autor: "JK Rola",
          genero: "não binario",
          paginas: "1 morbilhão",
          preco: "23",
          data: "2012-12-12",
          idioma: "bri'ish",
          editora: "Teu Pai LTDA",
          isbn: "127-542-488-55",
        },
      ],
    };
  },
  methods: {
    salvar() {
      if (
        this.novo_livro !== "" &&
        this.novo_autor !== "" &&
        this.novo_genero !== "" &&
        this.novo_n_pag !== "" &&
        this.novo_preco !== "" &&
        this.novo_idioma !== "" &&
        this.nova_editora !== "" &&
        this.novo_isbn !== ""
      ) {
        const novo_autor = this.novo_autor;
        const novo_genero = this.novo_genero;
        this.livros.push({
          nome: this.novo_livro,
          autor: this.novo_autor,
          genero: this.novo_genero,
          paginas: this.novo_n_pag,
          preco: this.novo_preco,
          data: this.nova_data,
          idioma: this.novo_idioma,
          editora: this.nova_editora,
          isbn: this.novo_isbn,
        });
        this.novo_livro == "";
        this.novo_autor == "";
        this.novo_genero == "";
        this.novo_n_pag == "";
        this.novo_preco == "";
        this.novo_idioma == "";
        this.nova_editora == "";
        this.novo_isbn == "";
      } else {
        alert("cu");
      }
    },
    excluir(livro) {
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
      <input
        type="text"
        placeholder="Nome do Autor"
        id="nome_autor"
        v-model="novo_autor"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Gênero(s) do livro"
        id="nome_genero"
        v-model="novo_genero"
        @keypress.enter="salvar"
      />
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
      <input
        type="text"
        placeholder="Editora"
        id="nome_editora"
        v-model="nova_editora"
        @keypress.enter="salvar"
      />
      <input
        type="number"
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
            <th>Gênero(s)</th>
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
            <th>{{ livro.genero }}</th>
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

.inputs input {
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
