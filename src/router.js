import Vue from "vue"
import VueRouter from "vue-router"
import Signup from  "./pages/auth/Signup"
import Homepage from  "./pages/Homepage"
import ChangePassword from "./pages/ChangePassword"

Vue.use(VueRouter)
export const router= new VueRouter({
routes:[
    {path:"/",component:Homepage},
    {path:"/signup",component:Signup},
    {path:"/ChangePassword",component:ChangePassword}
],
mode:"history"
})


