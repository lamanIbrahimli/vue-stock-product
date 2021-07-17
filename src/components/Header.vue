<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to="/portfolio" class="nav-link active" tag="li" aria-current="page" style="cursor: pointer">Portfolio</router-link>
            <router-link to="/stocks" class="nav-link" tag="li" aria-current="page" style="cursor: pointer">Stocks</router-link>
          </ul>
          <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a href="#" class="nav-link" @click="endDay">End Day</a></li>
              <li class="nav-item dropdown"
                  :class="{open: isDropdownOpen}"
                  @click="isDropdownOpen = !isDropdownOpen">
                <a class="nav-link dropdown-toggle"
                   href="#"
                   id="navbarDropdown"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false">
                  Save & Load
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#" @click="saveData">Save Data</a></li>
                  <li><a class="dropdown-item" href="#" @click="loadData">Load Data</a></li>
                </ul>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>

<style scoped>

</style>
