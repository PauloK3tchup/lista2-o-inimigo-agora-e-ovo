<template>
  <header>
    <span class="logo"><RouterLink to="/" class="semdec"> Morbivros </RouterLink></span>
    <span><RouterLink to="/" class="botão"> Home </RouterLink></span>
    <span> | </span>
    <div class="dropdown">
      <button class="btn btn-transparent text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Cadastrar
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><span><RouterLink to="/livros" class="text-dark botão dropdown-item"> Cadastrar Livros </RouterLink></span></li>
        <li><span><RouterLink to="/editora" class="text-dark botão dropdown-item"> Cadastrar Editora </RouterLink></span></li>
        <li><span><RouterLink to="/autor" class="text-dark botão dropdown-item"> Cadastrar Autor </RouterLink></span></li>
        <li><span><RouterLink to="/categoria" class="text-dark botão dropdown-item"> Cadastrar Categoria </RouterLink></span></li>
      </ul>
    </div>
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
  transition: 0.25s;
  color: white;
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

.dropdown {
  display: inline-block;
}

</style>
