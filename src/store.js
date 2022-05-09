import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        authUser: {
            email: "",
            name: "",
            role: "",
            token: ""
        },

    },
    getters: {
        getAuthUser: state => () => state.authUser,
    },
    mutations: {
        loginMutation(state, authUser) {
            state.authUser = authUser
            localStorage.setItem("authUser", JSON.stringify(authUser));
        },
        logoutMutation(state) {
            state.authUser = {
                email: "",
                name: "",
                role: "",
                token: ""
            };
            localStorage.removeItem("authUser");
        }
    }
}
)
export default store