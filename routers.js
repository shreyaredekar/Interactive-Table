import HomePage from "./components/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";
import AddItem from "./components/AddItem.vue";
import UpdateItem from "./components/UpdateItem.vue";

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'AddItem',
        component:AddItem,
        path:'/add'
    },
    {
        name:'UpdateItem',
        component:UpdateItem,
        path:'/update'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;