import Cadastro from '../src/components/cadastro/Cadastro.vue';
import Home from '../src/components/home/Home.vue';

export const routes = [
    { path: '/home', name:'home',component: Home, titulo: 'Home',menu: true },
    { path: '/cadastro', name:'cadastro', component: Cadastro, titulo: 'Cadastrar', menu: true },
    { path: '/cadastro/:id', name:'altera', component: Cadastro, titulo: 'Alterar', menu: false },
    { path: '*', component: Home, menu: false }
];