<template>
  <img class="responsivo" :src="url" :alt="titulo" :id="_id" />
</template>

<script>
export default {
  props: ['url','titulo','_id']
};
</script>

<style>
.responsivo {
  width: 100%;
}
</style>