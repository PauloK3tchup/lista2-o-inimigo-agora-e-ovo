<script>
export default {
  data() {
    return {
      nova_editora: "",
      novo_site: "",
      editoras: [
        {
          nome: "Puts",
          site: "puts.com.br",
        },
      ],
    };
  },
  methods: {
    salvar() {
      if (
        this.nova_editora !== "" &&
        this.novo_site !== ""
      ) {
        const nova_editora = this.nova_editora;
        const novo_site = this.novo_site;
        this.editoras.push({
          nome: this.nova_editora,
          site: this.novo_site,
        });
        this.novo_livro == "";
        this.novo_autor == "";
      } else {
        alert("cu");
      }
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <h1 class="title">Cadastrar Editora:</h1>
    <div class="inputs">
      <input
        type="text"
        placeholder="Nome da Editora"
        id="nome_livro"
        v-model="nova_editora"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Site da Editora"
        id="nome_autor"
        v-model="novo_site"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="lista">
      <table>
        <thead>
          <tr>
            <th>Editora</th>
            <th>Site</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.nome">
            <th>{{ editora.nome }}</th>
            <th>{{ editora.site }}</th>
            <th>
              <button>✎</button>
              <button @click="excluir(editora)">☠</button>
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
