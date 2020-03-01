<template>
  <div class='cart-view'>
      購物車
  </div>
</template>

<script>
export default {
    name:'CartView',
     data() {
    return {
      title: "購物車",
      navViewShow: true
    };
  },
  created() {
    //console.log(this.title);
    //發送標題給App.Vue
    this.$emit("onTitle", this.title);
    this.$emit("onNavShow",this.navViewShow)
  }
}
</script>

<style>

</style>