<template>
  <div class="corpo">
    <nav>
      <ul>
        <li><router-link to='/'>HOME</router-link></li>
        <li><router-link to="/cadastro">CADASTRO</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>  
</template>

<script>
export default {

}
</script>

<style>
   .corpo {
  font-family: Helvetica;
  margin: 0 auto;
  width: 96%;
} 

</style>