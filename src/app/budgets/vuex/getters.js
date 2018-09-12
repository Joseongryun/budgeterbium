export default {
  getBudgetById : (state, getters) => (getBudgetById) => {
    return state.budgets && budgetId in state.budgets ? state.budgets[budgetId] : false;
  }
}