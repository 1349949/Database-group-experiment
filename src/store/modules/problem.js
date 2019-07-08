import workbook from '../../../mock/workbook.json'

const state = {
  problem: workbook,
  workbooks: [],
  workbooklist: []
}

const mutations = {
  CHANGE_DATA: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeData({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

