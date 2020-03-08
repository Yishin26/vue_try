<template>
  <div class="goods-detail-view">
    <van-nav-bar title="标题" left-arrow @click-left="onback" />
    商品詳情 {{this.$store.state.goodsItemID}}:
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item v-for='(item, id) in goodsDetail.banners'
      :key="id">
        <img v-lazy="item.img" />
      </van-swipe-item>
    
    </van-swipe>
  </div>
</template>

<script>
import { NavBar } from "vant";
import { Swipe, SwipeItem } from "vant";

export default {
  name: "GoodsDetailView",
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },

  methods: {
    onback: function() {
      //改變goodsDetailShow的狀態 vuex mutations
      this.$store.commit("ChangeGoodsDetailShow"); //一樣進行取反操作
    }
  },
  data() {
    return {
      goodsDetail: []
    };
  },
  created() {
    //在created時，根據商品id獲取對應數據
    console.log(this.$store.state.goodsItemID);
    var that = this;
    this.$ajax
      .get("/json/goods-detail.json")
      .then(function(response) {
        console.log(response.data);
        that.goodsDetail = response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style>
.goods-detail-view {
  background: rgb(2, 28, 255);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  color: white;
  z-index: 99;
}
.van-nav-bar__left * {
  color: white !important;
}

</style>