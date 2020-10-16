
<template>
  <div>   
    <h1 class="titulo">{{ titulo }}</h1>
     <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Filtre pelo título..."
    />
    {{ filtro }}
    <ul class="lista-fotos">
      <li class="item-foto" v-for="foto of fotosComFiltro" :key="foto.titulo">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform.animate="15" />
          <router-link :to="{name : 'altera',  params: { id: foto._id }}">
          <meu-botao tipo="button" rotulo="ALTERAR" estilo="padrao"></meu-botao>
          </router-link>
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="false"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue";
import Botao from "../botao/Botao.vue";
import FotoService from '../../domain/foto/FotoService.js';

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  name: "app",
  data() {
    return {
      titulo: "ALURA-PIC",
      fotos: [],
      filtro: "",
      mensagem: "",
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },

  methods: {
    remove(foto) {
      this.service.apagar(foto.id)      
      .then(()=> {
        let indice = this.fotos.indexOf(foto);
        this.fotos.splice(indice, 1);
        this.mensagem = 'Foto removida com sucesso!'
      }, err => this.mensagem = err.message);
      },
  },

  created() {
    this.service = new FotoService(this.$resource);
    this.service
    .listar()
      .then((json) => this.fotos = json, err => this.mensagem = err.message);      
  },

};
</script>

<style>
.titulo {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.item-foto {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
