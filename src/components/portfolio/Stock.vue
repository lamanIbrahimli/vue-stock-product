<template>
  <div class="col-3">
    <div class="card">
      <div class="card-header bg-danger color-header-tab">
        {{ stock.name }}
        <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
      </div>
      <div class="card-body">
        <div class="row g-0">
          <div class="col-8">
            <input
                type="number"
                v-model="quantity"
                :class="{danger: insufficientQuantity}"
                class="w-100 form-control"
            />
            <div class="danger-errors">{{ insufficientQuantity ? "Not enough" : ""}}</div>
          </div>
          <div class="col-4">
            <button
                class="btn btn-danger w-100"
                @click="sellStock"
                :disabled="insufficientQuantity || quantity <= 0"
            >Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.danger {
  border: 1px solid red;
}
.danger-errors{
  color: red;
  font-size: 12px;
}
.color-header-tab{
  color: white !important;
}
</style>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>
