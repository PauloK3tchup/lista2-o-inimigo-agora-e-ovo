<template>
  <header>
    <span><RouterLink to="/" class="botão"> Home </RouterLink></span>
    <span> | </span>
    <span
      ><RouterLink to="/musica" class="botão">
        lista de livroes
      </RouterLink></span
    >
  </header>
</template>
<style scoped>
header {
  background-color: hotpink;
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
</style>
