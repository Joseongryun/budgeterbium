import Vue from 'vue'
import localforage from 'localforage';
require('localforage-startswith');
import 'bulma/css/bulma.css';

import { App } from './app'
import router from './router'
import store from './store'

localforage.config({
  name: 'budgeterbium'
})

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
