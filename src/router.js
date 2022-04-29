import Vue from "vue"
import VueRouter from "vue-router"
import SignIn from  "./pages/auth/SignIn"
import Homepage from  "./pages/Homepage"
import ChangePassword from "./pages/ChangePassword"

Vue.use(VueRouter)
export const router= new VueRouter({
routes:[
    {path:"/",component:Homepage},
    {path:"/login",component:SignIn},
    {path:"/changepassword",component:ChangePassword}
],
mode:"history"
})


