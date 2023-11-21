import { createWebHistory, createRouter } from "vue-router";
import Main from "@/views/Main.vue";
import HelloVue from "@/views/HelloVue.vue";
import ByeVue from "@/views/ByeVue.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/HelloVue",
        name: "HelloVue",
        component: HelloVue,
    },
    {
        path: "/ByeVue",  // ByeVue.vue로 이동할 Path
        name: "ByeVue",  // router name
        component: ByeVue,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;