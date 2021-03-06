import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';


export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
        .then(({ data }) => {
            commit('SET_NEWS', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
        .then(({ data }) => {
            commit('SET_ASKS', data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}