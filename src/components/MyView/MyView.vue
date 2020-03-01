<template>
  <div class='my-view'>個人</div>
</template>

<script>
export default {
   name:'MyView',
    data() {
    return {
      //title: "個人",
      navViewShow:false
    };
  },
  created() {
    //console.log(this.title);
    //發送標題給App.Vue
    //this.$emit("onTitle", this.title);
    this.$emit("onNavShow",this.navViewShow)
  }
}
</script>

<style>
.my-view{
    color: #000;
    Top:20pt;
}
</style>
