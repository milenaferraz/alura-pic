
<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>
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
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
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

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  name: "app",
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro: "",
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
      alert("Remover a foto!" + foto.titulo);
    },
  },

  created() {
    let promise = this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then((json) => (this.fotos = json))
      .catch((err) => err);
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
