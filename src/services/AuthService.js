import axios from "axios"
import Post from "./Post"

export default {
    ForgotPassword(email) {
        const data = { email: email }
       return Post.PostData("/api/User/ForgotPassword", data, "")
    },
    Login(email, password) {
        const data = { Email: email, Password: password, LoginType: "6057FA54-EEB3-EC11-AC1F-000C29330757" }
       return Post.PostData("/api/User/Login", data, "")
    },
}