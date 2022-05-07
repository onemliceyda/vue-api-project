import axios from "axios";

export default {
    executePostFormData(action, version, data = null) {
        const formData = new FormData();
        formData.append('Action', action);
        formData.append('Version', version);
        if (data)
            formData.append('Parameters', JSON.stringify(data));
        const configuration = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer token gelecek`,
            }
        }
        return axios.post('/api/v1/FinTech/Execute', formData, configuration);
    }
}

