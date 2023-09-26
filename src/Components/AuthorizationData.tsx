import axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://abf5-154-47-24-154.ngrok-free.app',
    // Authorization: 'Token 3ae7399c2fb938265eb2c46438e8f5862ac3f776'
})

const authAPI = {
    create(username: string, first_name: string, last_name: string, email: string, region: string, city: string, password: string) {
        return instance.post(`user/register/`, {username, first_name, last_name, email, region, city, password})
            .then(response => {
                return response.data
            })
    },
    login(username: string, password: string) {
        return instance.post('user/login/', { username, password })
            .then(response => {
                const token = response.data.access;
                localStorage.setItem('authToken', token);
                authAPI.me(token)
                return response.data
            })
            .catch(error => {
                console.error("Error:", error);
            });
    },
    me(token: string) {
        //  const token = localStorage.getItem('token')
        return instance.get('user/profile/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}


  


export {authAPI};