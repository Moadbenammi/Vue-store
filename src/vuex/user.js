import axios from "axios";
import router from '../router';

export const userModule = {
    state : {
        userId : null,
        isLogingIn : true,
        name : "",
    },

    mutations : {
        setUserId(state, userId) {
            state.userId = userId
        },

        switchOperations(state){
            state.isLogingIn = state.isLogingIn ? false : true
        }
    },

    actions : {
        setUserId({commit}, userId) {
            commit('setUserId', userId)
        },

        switchOperations({commit}){
            commit('switchOperations')
        },

        signin : async ({commit}, data) => {
            await axios
                .post("auth/signin", data)
                .then((response) => {
                localStorage.setItem('token', response.data.token);
                commit('setUserId', response.data.userId)
                router.push("/");
                })
                .catch(() => alert("Incorrect email or password"));
        },

        async signup ({commit}, data) {
            await axios
              .post("auth/signup", data)
              .then(() => {
                alert("Registred successfully, now go ahead and login !");
                commit('switchOperations');
              })
              .catch(() => alert("Email already exist !"));
        },
    },

    getters : {
        userId : state => state.userId,
        isLogingIn : state => state.isLogingIn
    }
}