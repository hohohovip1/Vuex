import axios from 'axios';
const rs = {
    namespaced: true,
    state: {
        rs: [],
    },
    mutations: {
        SET_RS(state, data) {
            state.rs = data;
        },
    },
    actions: {
        loadRS({ commit }) {
            axios
                .get(
                    'https://api-gateway.rewardstyle.com/api/ltk/v2/ltks/?hashes[]=1wHcRuwMjpQIpYlSdcRhdx'
                )
                .then((res) => {
                    console.log(res);
                    commit('SET_RS', res.data);
                })
                .catch((err) => console.log(err));
        },
    },
};

export default rs;
