import axios from 'axios';
const posts = {
    namespaced: true,
    state: {
        posts: [],
    },
    mutations: {
        SET_POSTS(state, data) {
            state.posts = data;
        },
    },
    actions: {
        loadPosts({ commit }) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    console.log(res);
                    commit('SET_POSTS', res.data);
                })
                .catch((err) => console.log(err));
        },
    },
};

export default posts;
