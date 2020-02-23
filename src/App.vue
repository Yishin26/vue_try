<template>
  <div id="app">
    <!--第三步:使用組件-->
     <NavView> </NavView> 
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   
  </div>
</template>

<script>
//第一步:導入組件
import NavView from './components/NavView'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  //第二步:註冊組件
  components: {
    HelloWorld,
    NavView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
