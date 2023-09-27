import axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://abf5-154-47-24-154.ngrok-free.app',
    // Authorization: 'Token 3ae7399c2fb938265eb2c46438e8f5862ac3f776'
})

const authAPI = {
    create(username: string, first_name: string, last_name: string, email: string, region: string, city: string, password: string) {
        return  instance.post(`user/register/`, {username, first_name, last_name, email, region, city, password})
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
        })
            .then(response => {
                const city = response.data.city
                localStorage.setItem('city', city)
                const date_birthday = response.data.date_birthday
                localStorage.setItem('date_birthday', date_birthday)
                const email = response.data.email
                localStorage.setItem('email', email)
                const first_name = response.data.first_name
                localStorage.setItem('first_name', first_name)
                const grade = response.data.grade
                localStorage.setItem('grade', grade)
                const id = response.data.id
                localStorage.setItem('id', id)
                const image = response.data.image
                localStorage.setItem('image', image)
                const last_name = response.data.last_name
                localStorage.setItem('last_name', last_name)
                const region = response.data.region
                localStorage.setItem('region', region)
                const school = response.data.school
                localStorage.setItem('school', school)
                const sex = response.data.sex
                localStorage.setItem('sex', sex)
                const username = response.data.username
                localStorage.setItem('username', username)

            })
            .catch(error => {
                console.error("Error:", error);
            });;
    }
}





export {authAPI};