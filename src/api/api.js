import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a9b36abe-d689-4dc1-9b92-adeaba26d689"
    }
})

export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getUser(id) {
        console.warn("Please use profileApi")
        return profileApi.getProfile(id)
    },
    follow(id) {
        return instance
            .post(`follow/${id}`)
            .then(res => res.data)
    },
    unfollow(id) {
        return instance
            .delete(`unfollow/${id}`)
            .then(res => res.data)
    }
}

export const profileApi = {
    getProfile(id) {
        return instance
            .get(`profile/${id}`)
            .then(res => res.data)
    },
    getStatus(id) {
        return instance
            .get(`profile/status/${id}`)
            .then(res => res.data)
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, {status})
    }
}

export const authApi = {
    me() {
        return instance
            .get(`auth/me`)
            .then(res => res.data)
    },
    login(email, password, rememberMe = false) {
        return instance
            .post("auth/login", {
                email,
                password,
                rememberMe
            })
            .then(res => res.data)
    },
    logout() {
        return instance.delete("auth/login")
    }
}