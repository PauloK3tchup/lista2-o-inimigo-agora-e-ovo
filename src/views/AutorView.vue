<script>
import axios from "axios";
export default {
  data() {
    return {
      novo_autor: "",
      nova_data: "",
      autores: [],
    };
  },
  async created(){
    const autores = await axios.get("http://localhost:4000/autores");
    this.autores = autores.data;
  },
  methods: {
    async salvar() {
      if (
        this.novo_autor !== "" &&
        this.nova_data !== ""
      ){
        const autor = {
          nome: this.novo_autor,
          data: this.nova_data
        };
        const autor_criada = await axios.post("http://localhost:4000/autores", autor);
        this.autores.push(autor_criada.data)
        this.novo_autor = "";
        this.nova_data = "";
      } else {
        alert("cu");
      }
    },
    async excluir(autor) {
      await axios.delete(`http://localhost:4000/autores/${autor.id}`)
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <h1 class="title">Cadastrar Autor:</h1>
    <div class="inputs">
      <input
        type="text"
        placeholder="Nome do Autor"
        id="nome_livro"
        v-model="novo_autor"
        @keypress.enter="salvar"
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        id="nome_autor"
        v-model="nova_data"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="lista">
      <table>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.nome">
            <th>{{ autor.nome }}</th>
            <th>{{ autor.data }}</th>
            <th>
              <button>✎</button>
              <button @click="excluir(autor)">☠</button>
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
