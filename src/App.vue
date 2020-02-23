<template>
  <div id="app">
    <!--頭部導航-->
      <NavView></NavView>
     
    <!--內容：使用路由模板所指定的-->
    <router-view></router-view>
    <!--底部切換導航-->
     <TabView></TabView>
  </div>
</template>

<script>
import NavView from './components/NavView/NavView'
import TabView from './components/TabView/TabView'

export default {
  name: "App",
  components: {
    NavView,
    TabView,
 
  }
};
</script>

<style>

</style>
