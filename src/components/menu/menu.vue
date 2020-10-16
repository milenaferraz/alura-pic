<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route">
        <router-link :to="route.path ? route.path : '/'">
          {{ route.titulo }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from "../../routes.js";

export default {
  props: {
    rotas: {
      type: Array,
      required: true
    }
  } 
};
</script>

<style>
</style>