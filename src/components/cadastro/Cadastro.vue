<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>
    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          autocomplete="off"
          v-model="foto.titulo"
        />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
          type="text"
          id="url"
          autocomplete="off"
          v-model.lazy="foto.url"
        />
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />
      </div>
      <div class="controle">
        <label for="descrição">Descrição</label>
        <textarea
          id="descricao"
          autocomplete="off"
          v-model="foto.descricao"
        ></textarea>
      </div>
      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />
        <router-link to="/"
          ><meu-botao rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue";
import Botao from "../botao/Botao.vue";

export default {
  components: {
    "meu-botao": Botao,
    "imagem-responsiva": ImagemResponsiva,
  },

  data() {
    return {
      foto: {
        titulo: "",
        url: "",
        descricao: "",
      },
    };
  },

  methods: {
    grava() {
      this.resource
      .save(this.foto)
      .then(() => this.foto = new Foto(), err => console.log(err))      
      
      this.foto = {
        titulo: '',
        url: "",
        descricao: ''
      }
    },

    created() {
      this.resource = this.$resource('v1/fotos')
    }


  },
};
</script>

<style>
.centralizado {
  text-align: center;
}

.controle {
  font-size: 100;
  margin-bottom: 20px;
}

.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>