import axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://6264-46-188-120-131.ngrok-free.app',
    // Authorization: 'Token 3ae7399c2fb938265eb2c46438e8f5862ac3f776'
})

const authAPI = {
    create(username: string, first_name: string, last_name: string, email: string, region: string, city: string, password: string, sex: string, phone: string, snils: string, middle_name: string,  date_birthday: string, school: string, grade: string) {
        return  instance.post<string>(`user/register/`, {username, first_name, last_name, email, region, city, password, sex, phone, snils, middle_name, date_birthday, school, grade})
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
    me(token: string | null) {
        //  const token = localStorage.getItem('token')
        return instance.get('user/profile/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                const phone = response.data.phone;
                localStorage.setItem('phone', phone)
                const middle_name = response.data.middle_name
                localStorage.setItem('middle_name', middle_name);
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
                const snils = response.data.snils;
                localStorage.setItem('snils', snils);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    },
    ResultPost(points: number) {
        const token: string | null = localStorage.getItem('authToken')
        return instance.post('task/result/', {points}, {headers: {
            'Authorization': `bearer ${token}`
        }}).then(res => res.data)
    }
}





export {authAPI};