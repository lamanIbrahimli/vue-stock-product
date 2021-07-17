<template>
  <div class="col-3">
    <div class="card">
      <div class="card-header bg-warning color-header-tab">
        {{ stock.name }} <small><small>(Price: {{ stock.price }})</small></small>
      </div>
      <div class="card-body">
        <div class="row g-0">
          <div class="col-8">
            <input
                type="number"
                v-model="quantity"
                class="w-100 form-control"
                :class="{danger:insufficientFunds}"
            />
          </div>
          <div class="col-4">
            <button
                class="btn btn-warning w-100"
                @click="buyStock"
                :disabled="insufficientFunds || quantity<=0"
            >Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['stock'],
  name: "Stock",
  data(){
    return{
      quantity:0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods:{
    buyStock(){
      const order = {
        stockId:this.stock.id,
        stockPrice:this.stock.price,
        quantity:this.quantity
      }
      this.$store.dispatch('buyStock',order)
      this.quantity=0
    }
  }
}
</script>

<style scoped>
.danger{
  border: 1px solid red;
}
.color-header-tab{
  color: #145b5d !important;
}
</style>
