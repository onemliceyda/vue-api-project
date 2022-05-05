import axios from "axios"
import Post from "./Post"

export default {
    ForgotPassword(email) {
        const data = { email: email }
        Post.PostData("/api/User/ForgotPassword", data, "")
    },
    Login(email,password){
        const data={Email:email,Password:password,LoginTypeId:"6057FA54-EEB3-EC11-AC1F-000C29330757"}
        Post.PostData("/api/User/Login", data, "")
    },
    CustomerList(id){
        const data={Id:id}
        Post.PostData("/api/Customer/GetAll",data,"")

    }
}