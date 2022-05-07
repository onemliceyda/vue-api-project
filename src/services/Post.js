import axios from "axios";

export default {
    PostData(url, data, token = "default") {
        const config = {
            headers: {
                'content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }

        const formData = new FormData();
        const keys = Object.keys(data);
        const values = Object.values(data);


        for (let i = 0; i < keys.length; i++) {
            formData.append(keys[i] + "", values[i])
        }

        return axios.post(url, formData, config)
    }
}