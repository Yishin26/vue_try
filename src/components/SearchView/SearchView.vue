<template>
  <div class='search-view'>
      搜索
  </div>
</template>

<script>
export default {
    name:'SearchView',
     data() {
    return {
      
      navViewShow:false

    };
  },
  created() {
   
    //發送不顯示NavBar給App.Vue
    //console.log(this.navViewShow);
    this.$emit("onNavShow", this.navViewShow)
  }
}
</script>

<style>

</style>