<template>
  <div class="home-view">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" v-bind:key="item.id" >
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "HomeView",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      title: "首頁",
      navViewShow: true,
      banner: []
    }
  },
  created() {
    //console.log(this.title);
    //發送標題給App.Vue
    this.$emit("onTitle", this.title);
    this.$emit("onNavShow", this.navViewShow);

    //獲取輪播圖數據
    //this指向vue當前實例對像
    var that= this;
    this.$ajax
      .get("/json/banner.json")
      .then(function(response) {
        //獲取參數成功
        console.log(response.data);
        that.banner = response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style>
.home-view {
  padding-top: 2.5rem;
}


.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
}
.my-swipe img{
  width: 100%;
}
</style>