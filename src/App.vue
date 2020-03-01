<template>
  <div id="app">
    <!--頭部導航-->
    <van-nav-bar :title="title" fixed v-show="navViewShow"/>

    <!--內容：使用路由模板所指定的-->
    <router-view @onTitle="getTitle" @onNavShow="getNavViewShow"></router-view>

    <!--底部切換導航-->
    <TabView></TabView>
  </div>
</template>

<script>
import { NavBar } from "vant";
import TabView from "./components/TabView/TabView";

export default {
  name: "App",
  components: {
    TabView,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      title: "", //接收導航標題
      navViewShow: true
      //接收子組件是否需要顯示
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
