<template>
  <div class="selling-view">
    <GoodsItemView v-for='goods in sellings' :goods='goods' :key='goods.id' >
      
    </GoodsItemView>
  </div>
</template>

<script>
import GoodsItemView from "./GoodsItem.vue";
export default {
  name: "SellingView",
  components: {
    GoodsItemView
  },
  data() {
    return {
      sellings: [] //商品列表
    };
  },
  created() {
    var that = this; //賦予值
    this.$ajax
      .get("/json/selling-list.json")
      .then(function(response) {
        console.log(response.data);
        that.sellings = response.data; //把數據拿到
       

      })
      .catch(function(err) {
        console.log(err);
      });
  },
  
};
</script>

<style>
.selling-view{
  overflow: hidden;
}
</style>