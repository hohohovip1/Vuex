import { createStore } from 'vuex';
import posts from './modules/posts';
import rs from './modules/rs';

export default createStore({
    modules: { posts, rs },
});
