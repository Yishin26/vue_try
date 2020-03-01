<template>
  <div class="assort-view">分類</div>
</template>

<script>
export default {
  name: "AssortView",
  data() {
    return {
      title: "分類",
      navViewShow: true
    };
  },
  created() {
    //console.log(this.title);
    //發送標題給App.Vue
    this.$emit("onTitle", this.title);
    this.$emit("onNavShow", this.navViewShow);
  }
};
</script>

<style>
</style>