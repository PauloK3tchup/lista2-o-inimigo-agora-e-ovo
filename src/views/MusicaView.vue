<script>
export default {
  data() {
    return {
      nova_musica: "",
      musicas: [{ nome: "Teu", album: "Pai", banda: "kkkkkkkk" }],
    };
  },
  methods: {
    salvar() {
      if (
        this.nova_musica !== "" &&
        this.novo_album !== "" &&
        this.nova_banda !== ""
      ) {
        const novo_album = this.novo_album;
        const nova_banda = this.nova_banda;
        this.musicas.push({
          nome: this.nova_musica,
          album: novo_album,
          banda: nova_banda,
        });
        this.nova_musica = "";
        this.novo_album = "";
        this.nova_banda = "";
      } else {
        alert("cu");
      }
    },
    excluir(musica) {
      const indice = this.musicas.indexOf(musica);
      this.musicas.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="inputs">
      <input
        type="text"
        placeholder="Nome da Músicas"
        id="nome_musica"
        v-model="nova_musica"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Álbum"
        id="nome_albun"
        v-model="novo_album"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Cantor/banda"
        id="nome_banda"
        v-model="nova_banda"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="lista">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Álbum</th>
            <th>Cantor/Banda</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="musica in musicas" :key="musica.nome">
            <th>{{ musica.nome }}</th>
            <th>{{ musica.album }}</th>
            <th>{{ musica.banda }}</th>
            <th>
              <button>✎</button>
              <button @click="excluir(musica)">☠</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
