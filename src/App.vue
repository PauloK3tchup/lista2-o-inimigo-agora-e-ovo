<script setup>
import HeaderComp from "../src/components/HeaderComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>
<style>
body {
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
main {
  padding: 1%;
}
</style>
