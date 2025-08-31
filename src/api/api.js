import axios from 'axios';


const api = axios.create({
    baseURL : import.meta.env.VITE_MAIN_URL || import.meta.env.VITE_LOCAL_URL,
    withCredentials: true
})

export const addUser = (data)=>{
    const obj = {};
    obj.name = data.name;
    obj.email = data.email;
    obj.birthday = data.birthday;
    obj.otp = data.otp;
    return api.post('/user/register', obj);

}

export const userLogin = (data)=>{
    return api.post('/user/login', data);
}

export const allTask = ()=>{
    return api.get('/task/alltask');
}

export const deleteTask = (id)=>{
    console.log(id);
    return api.delete(`/task/deletetask/${id}`);

}

export const addTask = (data)=>{
    return api.post('/task/addtask', data);
}

// this will be for user registration as well for login
export const getOTP = (data)=>{
   return api.post('/user/sendotp', data);
}

export const logoutUser = ()=>{
    return api.post('/user/logout');
}

export const isLoggedIn = ()=>{
    return api.get('/user/islogged');
}

