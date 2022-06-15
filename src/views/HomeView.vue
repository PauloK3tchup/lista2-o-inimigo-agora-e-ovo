<script>
export default {
  data() {
    return {
      nova_coisa: "",
      coisas: [{ nome: "Teu pai", obs: "Ele não existekkkk" }],
    };
  },
  methods: {
    salvar() {
      if (this.nova_coisa !== "" && this.nova_obs !== "") {
        const nova_obs = this.nova_obs;
        this.coisas.push({
          nome: this.nova_coisa,
          obs: nova_obs,
        });
        this.nova_coisa = "";
        this.nova_obs = "";
      } else {
        alert("cu");
      }
    },
    excluir(coisa) {
      const indice = this.coisas.indexOf(coisa);
      this.coisas.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="inputs">
      <input
        type="text"
        placeholder="Nome da coisa"
        id="nome_coisa"
        v-model="nova_coisa"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Observação sobre a coisa"
        id="nome_obs"
        v-model="nova_obs"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="lista">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Observação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coisa in coisas" :key="coisa.nome">
            <th>{{ coisa.nome }}</th>
            <th>{{ coisa.obs }}</th>
            <th>
              <button>✎</button>
              <button @click="excluir(coisa)">☠</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
