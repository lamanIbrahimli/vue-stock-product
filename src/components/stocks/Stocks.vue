<template>
    <div class="row">
        <Stock class="mt-4" v-for="stock in stocks" :key="stock.id " :stock="stock"/>
  </div>
</template>

<script>
import Stock from "@/components/stocks/Stock";

export default {
  name: "Stocks",
  data(){
    return{
    }
  },
  components:{
    Stock
  },
  computed:{
    stocks(){
      return  this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>

</style>
