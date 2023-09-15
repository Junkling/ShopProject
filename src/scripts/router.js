import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Cart from "@/pages/Cart";
import Order from "@/pages/Order";
import Orders from "@/pages/Orders";
import Signup from "@/pages/Signup";
import PushItem from "@/pages/PushItem";
import Dashboard from "@/pages/Dashboard";
import Item from "@/pages/Item"

import { createRouter, createWebHistory } from 'vue-router/dist/vue-router';

const routes = [
    {path:'/',component: Home},
    {path:'/login',component: Login},
    {path:'/cart',component: Cart},
    {path:'/order',component: Order},
    {path:'/orders',component: Orders},
    {path:'/signup',component: Signup},
    {path:'/produce',component: PushItem},
    {path:'/dashboard',component: Dashboard},
    {path:'/product/:itemId',component: Item},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;