import Vue from 'vue'
import Vuex from 'vuex'
import { csvParse } from 'd3-dsv'
Vue.use(Vuex)

const state = {
  isLoading: false,
  gridData: null,
}
const actions = {
  fetchData ({ commit }) {
    commit('CSV_DATA');
    //commit('FAKE_DATA');
    //   commit('MAKE_GQL_QUERY', {
    //     url: 'http://localhost:4000/graphql',
    //     query: QUERY('5b930f393f9082129af6bc74')
    // })
  }
}
const mutations = {
  async CSV_DATA(state) {
    state.isLoading = true;
    const fetchedData =  await fetch(`${process.env.BASE_URL}data/2018-elections/data.csv`)
      .then(res => res.text())
      .then(res => csvParse(res))
      .then(data => {
        delete data.columns;
        return data;
      })
    state.gridData = fetchedData.sort(() => 0.5 - Math.random());
    state.isLoading = false;
  },
  async FAKE_DATA(state){
    state.isLoading = true;
    const allData = require('./assets/fake.json')
    state.quizData = allData.data.quiz;
    state.isLoading = false;
  },
  async MAKE_GQL_QUERY (state, { url, query }) {
      state.isLoading = true;
      const graphqlFetch = async () => {
          const res = await fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            referrer: "no-referrer", // no-referrer, *client
            method: 'POST',
            body: JSON.stringify({ query })
          });
        return res;
      }
      const fetchedData = await graphqlFetch();
      const data = await fetchedData.json();
      state.quizData = data.data.quiz;
      state.isLoading = false;
  }
}
export default new Vuex.Store({
  mutations,
  state,
  actions
})
//
// const QUERY = (id) => `
// query {
//   quiz: getQuizById( id: "${id}" ){
//     id
//     description
//     featureImage
//     questions {
//       id
//       questionOrder
//       questionText
//       featureImage
//       options{
//         id
//         optionText
//         resultText
//         correctOption
//       }
//     }
//   }
// }
// `
