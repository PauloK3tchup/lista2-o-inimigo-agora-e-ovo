<script>
import axios from "axios";
export default {
  data() {
    return {
      nova_categoria: "",
      nova_obs: "",
      categorias: [],
    };
  },
  async created(){
    const categorias = await axios.get("http://localhost:4000/categorias");
    this.categorias = categorias.data;
  },
  methods: {
    async salvar() {
      if (
        this.nova_categoria !== "" &&
        this.nova_obs !== ""
      ){
        const categoria = {
          nome: this.nova_categoria,
          obs: this.nova_obs
        };
        const categoria_criada = await axios.post("http://localhost:4000/categorias", categoria);
        this.categorias.push(categoria_criada.data)
        this.nova_categoria = "";
        this.nova_obs = "";
      } else {
        alert("cu");
      }
    },
    async excluir(categoria) {
      await axios.delete(`http://localhost:4000/categorias/${categoria.id}`)
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <h1 class="title">Cadastrar categoria:</h1>
    <div class="inputs">
      <input
        type="text"
        placeholder="Categoria"
        id="nome_categoria"
        v-model="nova_categoria"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Observação"
        id="obs"
        v-model="nova_obs"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="lista">
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Observação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.nome">
            <th>{{ categoria.nome }}</th>
            <th>{{ categoria.obs }}</th>
            <th>
              <button>✎</button>
              <button @click="excluir(categoria)">☠</button>
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
