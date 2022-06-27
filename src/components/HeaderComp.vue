<template>
  <header>
    <span class="logo"><RouterLink to="/" class="semdec"> Morbivros </RouterLink></span>
    <span><RouterLink to="/" class="botão"> Home </RouterLink></span>
    <span> | </span>
    <span
      ><RouterLink to="/musica" class="botão">
        Cadastrar Livros
      </RouterLink></span
    >
    <span> | </span>
    <span><RouterLink to="/conta" class="botão"> Conta </RouterLink></span>
  </header>
</template>
<style scoped>
header {
  background-color: crimson;
  padding: 1%;
}
header span {
  color: white;
  font-size: larger;
  margin: 3px;
}

header a.botão {
  text-decoration: none;
  display: inline-block;
  color: white;
  transition: 0.25s;
}

header a.botão:hover {
  transform: scale(1.1) rotate(5deg);
}

header a.semdec {
  text-decoration: none;
  color: white;
}

span.logo {
  font-size: 200%;
  margin: 10px;
  font-weight: bolder;
}
</style>
