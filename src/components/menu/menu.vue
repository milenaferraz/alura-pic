<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route">
        <rotas-link to="route.path ? route.path : '/">
          {{ route.titulo }}
        </rotas-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["rotas"],
};
</script>

<style>
</style>