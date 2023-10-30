import axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://81.163.26.144:8000/',
    // Authorization: 'Token 3ae7399c2fb938265eb2c46438e8f5862ac3f776'
})


const authAPI = {
    create(username: string,  email: string, password: string) {
        return  instance.post(`auth/users/`, {username, email, password})
            .then(response => {
                return response.data
            })
    },
    login(username: string, password: string) {
        return instance.post('auth/token/login/', { username, password })
            .then(response => {
                const token = response.data.auth_token;
                localStorage.setItem('auth_token', token);
                authAPI.me(token)
                return response.data
            })
            .catch(error => {
                console.error("Error:", error);
            });
    },
    me(token: string | null) {
        // const token = localStorage.getItem('token')
        return instance.get('profile/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
            .then(response => {
                
                const email = response.data.email
                localStorage.setItem('email', email)
                const id = response.data.id
                localStorage.setItem('id', id)
                const username = response.data.username
                localStorage.setItem('username', username)
            })
            .catch(error => {
                console.error("Error:", error);
            });
    },
    ResultPost(points: number) {
        const token: string | null = localStorage.getItem('auth_token')
        return instance.post('task/result/', {points}, {headers: {
            'Authorization': `bearer ${token}`
        }}).then(res => res.data)
    },
    FullAccount(first_name: string, last_name: string, middle_name: string, region: string, city: string, school: string, sex: string, grade: string, snils: string, date_birthday: string, phone: string) {
        const token = localStorage.getItem('auth_token');
        return instance.post('post_email_data/', {first_name, last_name, middle_name, region, city, school, sex, grade, snils, date_birthday, phone}, {headers: {
            'Authorization': `Token ${token}`
        }}).then(res => {
            return res.data;
        })
    }
}





export {authAPI};