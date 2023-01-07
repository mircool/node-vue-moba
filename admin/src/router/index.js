import {createRouter, createWebHistory} from 'vue-router'
import Main from "@/views/Main.vue";
import CategoryEdit from "@/views/CategoryEdit.vue";
import CategoryList from "@/views/CategoryList.vue";
import ItemEdit from "@/views/ItemEdit.vue";
import ItemList from "@/views/ItemList.vue";
import HeroEdit from "@/views/HeroEdit.vue";
import HeroList from "@/views/HeroList.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            children: [
                {path: '/categories/create', component: CategoryEdit},
                {path: '/categories/list', component: CategoryList},
                {path: '/categories/edit/:id', component: CategoryEdit, props: true},
                {path: '/items/create', component: ItemEdit},
                {path: '/items/list', component: ItemList},
                {path: '/items/edit/:id', component: ItemEdit, props: true},
                {path: '/heroes/create', component: HeroEdit},
                {path: '/heroes/list', component: HeroList},
                {path: '/heroes/edit/:id', component: HeroEdit, props: true},
            ]
        }
    ]
})

export default router
