<template>
  <div id="app">
    <!--頭部導航-->
    <van-nav-bar :title="title" fixed v-show="navViewShow" />

    <!--內容：使用路由模板所指定的-->
    <router-view @onTitle="getTitle" @onNavShow="getNavViewShow"></router-view>

    <!--底部切換導航-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop-o" to='/home'>首頁</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to='/assort'>分類</van-tabbar-item>
      <van-tabbar-item icon="search" to='/search'>搜索</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to='/cart'>購物車</van-tabbar-item>
      <van-tabbar-item icon="user-o" to='/mine'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem } from "vant";

export default {
  name: "App",
  components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      title: "", //接收導航標題
      navViewShow: true,
      //接收子組件是否需要顯示
      active: 0
    };
  },
  methods: {
    getTitle: function(title) {
      this.title = title;
    },
    getNavViewShow: function(temp) {
      //console.log(temp);
      this.navViewShow = temp;
    }
  }
};
</script>

<style>
#app{
  background-color: rgb(235, 235, 235);
}
.van-nav-bar {
  height: 2.5rem;
  background-color: rgb(0, 119, 255);

  font-size: 1rem;
  text-align: center;
  line-height: 2.5rem;
}
.van-nav-bar__title {
  color: aliceblue;
}

</style>
