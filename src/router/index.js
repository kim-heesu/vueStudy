import { createWebHistory, createRouter } from "vue-router";
import Main from "@/views/Main.vue";
import HelloVue from "@/views/HelloVue.vue";
import HelloVue02 from "@/components/HelloVue02.vue";
import HelloVueContent from "@/views/HelloVueContent.vue";
import ByeVue from "@/views/ByeVue.vue";
import TestVue from "@/views/TestVue.vue";

import Login from "@/views/member/Login.vue";
import Join from "@/views/member/Join.vue";
import Update from "@/views/member/Update.vue";

import Error404 from "@/views/Error404.vue"

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/helloVue",
        component: HelloVue,
        children:[ 
            // 네스티 라우터 nested-routes
            // 아래처럼 children의 path와 컴포넌트를 지정해주고, 해당 children을 사용할 vue페이지 내부에 router-view 추가
            // 추가시 기존 HelloVue페이지 내부에 HellowVue02컴포넌트가 추가되서 출력된다.
            // 확인은 views/HelloVue.vue에서 확인
            {
                path: 'depth',
                component: HelloVue02
            }
        ],
    },
    {
        path:'/helloVue/content',
        component: HelloVueContent,
    },
    {
        path: "/byeVue",  // ByeVue.vue로 이동할 Path
        name: "ByeVue",  // router name
        component: ByeVue,  // Path로 이동될 Component
    },
    {
        path: "/member/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/member/join",
        name: "Join",
        component: Join,
    },
    {
        path: "/testVue",
        name: "TestVue",
        component: TestVue,
    },
    {
        path: "/member/Update",
        name: "Update",
        component: Update,
    },

    // 404
    {
        path: '/404',
        name: 'notFound',
        component: Error404,
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
      },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;