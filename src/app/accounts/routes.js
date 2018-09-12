import * as components from './components'

export default [
  {
    path: '/',
    component: components.AccountsListView,
    name: 'accountsListView'
  },
  {
    path: '/accounts/craete',
    component: components.CreateEditAccount,
    name: 'createAccount'
  },
  {
    path: '/accounts/:accountId/edit',
    component: components.CreateEditAccount,
    name: 'EditAccount'
  },
]