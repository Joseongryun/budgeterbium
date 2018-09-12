export default {
  getBudgetById : (state, getters) => (budgetId) => {
    return state.budgets && budgetId in state.budgets ? state.budgets[budgetId] : false;
  },

  getCategoryById : (state, getters) => (categortId) => {
    return state.categories && categortId in state.categories ? state.categories[categortId] : false;
  },

  getCategorySelectList: (state, getters) => {
    return state.categories && Object.keys(state.categories).length> 0 ? Object.values(state.categories) : [];
  }
}