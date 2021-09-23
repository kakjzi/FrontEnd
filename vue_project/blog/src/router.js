import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';


const routes = [
    {
        path: "/list",
        component: List,
    }, 
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail/:id",
        //path: "/detail/:id(+d)",     -> 숫자만 허용하는 정규식
        component: Detail,

        //     /detail/id/ 그 이후 
        children : [
            {
                //경로는 상대경로로 적어야합니다.
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            }
        ]
    },
    // {
    //     //404 page
    //     path: "/:anything(.*)", or path : "sdfasdfasdfasd"
    //     component: Home,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 