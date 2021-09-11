import axios from "axios";

const usersURL = "http://localhost:3003/users";

export const getUsers = async() => {
    return await axios.get(usersURL);
}

export const addUser = async(user) => {
    await axios.post(usersURL, user)
}

export const getUser = async(id) => {
    return await axios.get(`${usersURL}/${id}`)
}

export const editUser = async(id, user) => {
    return await axios.put(`${usersURL}/${id}`, user)
}

export const deleteUser = async(id) => {
    return await axios.delete(`${usersURL}/${id}`);
}