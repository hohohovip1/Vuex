import dataApi from './../../Api/dataApi';
import axios from 'axios';

const data = {
    namespaced: true,
    state: {
        posts: [],
        rs: [],
    },
    mutations: {
        SET_POSTS(state, data) {
            state.posts = data;
        },
        SET_RS(state, data) {
            state.rs = data;
        },
    },
    actions: {
        loadPosts({ commit }) {
            dataApi
                .getPosts()
                .then((res) => {
                    console.log(res);
                    commit('SET_POSTS', res.data);
                })
                .catch((err) => console.log(err));
        },
        loadRS({ commit }) {
            dataApi
                .getRsData()
                .then((res) => {
                    console.log(res);
                    commit('SET_RS', res.data);
                })
                .catch((err) => console.log(err));
        },
    },
};

export default data;
