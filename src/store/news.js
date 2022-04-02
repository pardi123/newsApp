import axios from 'axios';
const state = () => ({
    dataNews: [],
    dataError: '',
});
const getters = {
    dataArticles(state) {
        return state.dataNews
    },

};
const mutations = {
    setNews(state, payload) {
        state.dataNews = payload;
    },
    setError(state, payload) {
        state.dataError = payload;
    }
};
const actions = {
    fetchNews(store) {
        axios
            .get(`https://newsapi.org/v2/everything?q=apple&from=2022-04-01&to=2022-04-01&sortBy=popularity&apiKey=9c2f39aed9944dbca999fbe39c614457`)
            .then((data) => {
                store.commit('setNews', data.data.articles)
            })
            .catch((error) => {
                store.commit('setError', error)
            })
    },
    fetchNewsTesla(store) {
        axios
            .get(`https://newsapi.org/v2/everything?q=tesla&from=2022-03-02&sortBy=publishedAt&apiKey=9c2f39aed9944dbca999fbe39c614457`)
            .then((data) => {
                store.commit('setNews', data.data.articles)
            })
            .catch((error) => {
                store.commit('setError', error)
            })
    },
    fetchBusnises(store) {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c2f39aed9944dbca999fbe39c614457`)
            .then((data) => {
                store.commit('setNews', data.data.articles)
            })
            .catch((error) => {
                store.commit('setError', error)
            })
    },
    fetchTechcrunch(store) {
        axios
            .get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9c2f39aed9944dbca999fbe39c614457`)
            .then((data) => {
                store.commit('setNews', data.data.articles)
            })
            .catch((error) => {
                store.commit('setError', error)
            })
    },
    fetchWallStreet(store) {
        axios
            .get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9c2f39aed9944dbca999fbe39c614457`)
            .then((data) => {
                store.commit('setNews', data.data.articles)
            })
            .catch((error) => {
                store.commit('setError', error)
            })
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}