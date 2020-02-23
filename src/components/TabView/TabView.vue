<template>
  <div class='tab-view'>
      <router-link to='/home'>首頁</router-link>
      <router-link to='/assort'>P2</router-link>
      <router-link to='/search'>P3</router-link>
      <router-link to='/cart'>P4</router-link>
      <router-link to='/mine'>P5</router-link>

  </div>
</template>

<script>
export default {
    name:'TabView'
}
</script>

<style>
    .tab-view{
        height: 3.125rem;
        position:fixed;
        bottom: 0;
        background-color: rgb(194, 194, 194);
        /*border-top:3px solid rgb(0, 183, 255); */
        width: 100%;
    }
    .tab-view a{
        color: aliceblue;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        width: 20%;
        line-height: 3.125rem;
        

    }
</style>