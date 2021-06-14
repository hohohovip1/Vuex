import axios from 'axios';

export default {
    getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    },
    getRsData() {
        return axios.get(
            'https://api-gateway.rewardstyle.com/api/ltk/v2/ltks/?hashes[]=1wHcRuwMjpQIpYlSdcRhdx'
        );
    },
};
