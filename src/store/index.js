import ApiService from "@/services/ApiService";
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        kontakti: {},
        poruka: {}
    },
    mutations: {
        setKontakti(state, kontakti) {
            state.kontakti = kontakti;
        },
        setPoruka(state, poruka) {
            state.poruka = poruka;
        }
    },
    getters: {
        kontakti: state => state.kontakti,
        poruka: state => state.poruka
    },
    actions: {
        getKontakti({ commit }) {
            return ApiService.getData('http://localhost:8080/kontakti')
                .then((response) => {
                    if (response.status === 200) {
                        commit('setKontakti', response.data);
                    } else {
                        commit('setPoruka', response.data)
                    }
                })
        },
        createKontakti({ commit }, kontakt) {
            return ApiService.postData('http://localhost:8080/kontakti', kontakt)
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        commit('getKontakti');
                    } else {
                        commit('setPoruka', response)
                    }
                })
                .catch(error => {
                    console.log(error)
                    commit('setPoruka', error)
                })
        }
    }
});