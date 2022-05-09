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
        { path: "/", component: Homepage, meta: { isAuth: true } },
        { path: "/account/:customerId", component: CustomerAccountList, meta: { isAuth: true } },
        { path: "/login", component: SignIn, meta: { isAuth: false } },
        { path: "/changepassword/:token", component: ChangePassword, meta: { isAuth: false } },
        { path: "/forgotpassword", component: ForgotPassword, meta: { isAuth: false } },
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

    const authCheck = store.state.authUser

    // token bilgisi ile login zorunluluğunun sayfa giriş öncesinde kontrol edilmesi
    if (to.meta.isAuth == true && authCheck.token != "") {
        next()
    } else if (to.meta.isAuth == false && authCheck.token == "") {
        next()
    } else if (to.meta.isAuth == true && authCheck.token == "") {
        next("/login")
    } else if (to.meta.isAuth == false && authCheck.token != "") {
        next("/")
    } else {
        next()
    }
})

