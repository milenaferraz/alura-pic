<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/menu/menu.vue";

export default {
  components: {
    "meu-menu": Menu,
  },
};
</script>

<style>
.corpo {
  font-family: Helvetica;
  margin: 0 auto;
  width: 96%;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>