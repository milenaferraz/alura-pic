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
          v-validate
          data-vv-rules="required|min:3|max:30"
          data-vv-as="Título"
          name="titulo"
        />
        <span v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
      </div>
      <div class="controle">
        <label for="url">URL</label>
        <input
          type="text"
          id="url"
          autocomplete="off"
          v-model="foto.url"
          v-validate
          data-vv-rules="required"
          name="url"
        />
        <span v-show="errors.has('url')">Campo Obrigatório!</span>
        <imagem-responsiva
          v-show="foto.url"
          :url="foto.url"
          :titulo="foto.titulo"
        />
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
        <router-link :to="{ name: 'home' }">
          <meu-botao rotulo="VOLTAR" tipo="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue";
import Botao from "../botao/Botao.vue";
import FotoService from "../../domain/foto/FotoService.js";
import Foto from "../../domain/foto/Foto.js";

export default {
  components: {
    "meu-botao": Botao,
    "imagem-responsiva": ImagemResponsiva,
  },

  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
    };
  },

  methods: {
    grava() {
      this.$validator.validateAll().then((sucess) => {
        if (success) {
          this.service.cadastrar(this.foto).then(
            () => {
              if (this.id) this.$router.push({ name: "home" });
              this.foto = new Foto();
            },
            (err) => console.log(err)
          );
        }
      });
    },
  },

  created() {
    this.service = new FotoService(this.$resource);
    if (this.id) {
      this.service.busca(this.id).then((foto) => (this.foto = foto));
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

span {
  color: red;
}
</style>
