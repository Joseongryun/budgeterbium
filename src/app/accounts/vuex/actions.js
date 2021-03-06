import {
  guid
} from '../../../utils';
import {
  removeAccount,
  saveAccount,
  fetchAccounts
} from '../api';

export const addAccount = ({
  commit
}, data) => {
  let id = guid();
  let account = Object.assign({
    id: id
  }, data);
  commit('ADD_ACCOUNT', {
    account
  });
  saveAccount(account).then((value) => {

  })
}

export const updateAccount = ({
  commit
}, data) => {
  commit('UPDATE_ACCOUNT', {
    account: data
  });
  saveAccount(data);
}

export const deleteAccount = ({
  commit
}, data) => {
  commit('DELETE_ACCOUNT', {
    account: data
  });
  removeAccount(data);
}

export const loadAccount = (state) => {
  if (!state.accounts || Object.keys(state.accounts).length === 0) {
    return fetchAccounts().then((res) => {
      state.commit('LOAD_ACCOUNT', res);
    })
  }
}
