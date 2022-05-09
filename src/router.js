import Vue from "vue"
import VueRouter from "vue-router"
import SignIn from "./pages/auth/SignIn"
import Homepage from "./pages/Homepage"
import ChangePassword from "./pages/ChangePassword"
import ForgotPassword from "./pages/ForgotPassword"
import Error404 from "./pages/Error404"
import CustomerAccountList from "./pages/CustomerAccountList"
Vue.use(VueRouter)
import store from "./store"
export const router = new VueRouter({
    routes: [
        { path: "/", component: Homepage },
        { path: "/account/:customerId", component: CustomerAccountList },
        { path: "/login", component: SignIn },
        { path: "/changepassword/:token", component: ChangePassword },
        { path: "/forgotpassword", component: ForgotPassword },
        { path: "/*", component: Error404 },
    ],
    mode: "history"
})
router.beforeEach((to, from, next) => {
    // login bilgisi storage'dan store'a geri yazılır
    store.commit("loginMutation",
        JSON.parse(localStorage.getItem("authUser")) ||
        {
            email: "",
            name: "",
            role: "",
            token: ""
        }
    )
    next();
})

