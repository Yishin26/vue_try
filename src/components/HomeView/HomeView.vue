<template>
  <div class="home-view">
    首頁
    <br />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      title: "首頁",
      navViewShow:true
    };
  },
  created() {
    //console.log(this.title);
    //發送標題給App.Vue
    this.$emit("onTitle", this.title);
    this.$emit("onNavShow",this.navViewShow)
  }
};
</script>

<style>
</style>