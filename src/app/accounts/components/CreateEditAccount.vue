<template>
  <div id="accounts-create-edit-view">
    You can create and edit accounts!
    <router-link :to="{name : 'accountsListVue'}">View all accounts</router-link>

    <form class="form" @submit.prevent="processSave">
      <label for="name" class="label">Name</label>
      <p class="control">
        <input type="text" class="input" name="name" v-model="selectedAccount.name">
      </p>
      <label for="category" class="label">Category</label>
      <p class="control">
        <span class="select">
          <select name="category" v-model="selectedAccount.category">
            <option v-for="(value, key) in categories" :value="key" :key="key"></option>
          </select>
        </span>
      </p>
      <label for="balance" class="label">Balance</label>
      <p class="control">
        <input type="text" name="balance" class="input" v-model="selectedAccount.balance" v-if="!editing">
        <span v-else>To update your balance, add a balance adjusting transaction.</span>
      </p>
      '<div class="control is-grouped">
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
        <p class="control">
          <router-link :to="{name : 'accountsListView'}" tag="button" class="button is-link">Cancel</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from "vuex";
  import {
    CATEGORIES
  } from '../../../consts';
  export default {
    name: 'accounts-create-edit-view',
    data() {
      return {
        categories: CATEGORIES,
        selectedAccount: {},
        editing: false
      }
    },
    mounted() {
      if ('accountId' in this.$route.params) {
        this.loadAccounts().then(() => {
          let selectedAccount = this.getAccountById(this.$route.params.accountId);
          if (selectedAccount) {
            this.editing = true;
            this.selectedAccount = Object.assign({}, selectedAccount);
          }
        });
      }
    },
    methods: {
      ...mapActions([
        'addAccount',
        'updateAccount',
        'loadAccounts'
      ]),
      resetAndGo() {
        this.selectedAccount = {};
        this.$router.push({
          name: 'accountsListView'
        });
      },
      saveNewAccount() {
        this.addAccount(this.selectedAccount).then(() => {
          this.resetAndGo();
        })
      },
      saveAccount() {
        this.updateAccount(this.selectedAccount).then(() => {
          this.resetAndGo();
        })
      },
      processSave() {
        this.editing ? this.saveAccount() : this.saveNewAccount();
      }
    },
    computed: {
      ...mapGetters([
        'getAccountById'
      ])
    },
  }

</script>

<style scoped lang='scss'>
  #accounts-create-edit-view {}

</style>
