import Cadastro from '../src/components/cadastro/Cadastro.vue';
import Home from '../src/components/home/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/cadastro', component: Cadastro }
];