import Vue from "vue"
import VueRouter from "vue-router"
import SignIn from  "./pages/auth/SignIn"
import Homepage from  "./pages/Homepage"
import ChangePassword from "./pages/ChangePassword"
import ForgotPassword from "./pages/ForgotPassword"
import Error404 from "./pages/Error404"
Vue.use(VueRouter)
export const router= new VueRouter({
routes:[
    {path:"/",component:Homepage},
    {path:"/login",component:SignIn},
    {path:"/changepassword/:token",component:ChangePassword},
    {path:"/forgotpassword",component:ForgotPassword},
    {path: "/*",component:Error404},
],
mode:"history"
})


