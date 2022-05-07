import axios from "axios"
import ExecutePost from "./ExecutePost"
import Post from "./Post"

export default {
    // Müşteri listemi getirecek servis fonksiyonu
    GetCustomer() {
        const data = {};
        return ExecutePost.executePostFormData("GetCustomer", "1", data)
    }
}