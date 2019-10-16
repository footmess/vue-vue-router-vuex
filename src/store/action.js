export default {
	addNum({ commit, state }, id) {
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	//初始化
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	}
};
