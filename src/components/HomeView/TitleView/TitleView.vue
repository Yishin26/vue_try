<template>
  <div class="title-view">
    <h3>
      <van-icon :name="icon" style="top:3px"/>&nbsp;{{name}}
    </h3>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "TitleView",
  components: {
    [Icon.name]: Icon
  },
  props:['name','icon']
};
</script>

<style>
.title-view {
  height: 4.6875rem;
  line-height: 4.6875rem;
  text-align: center;
  
}
.title-view h3{
    font-size: 16pt;
    color: rgb(0, 81, 255);
}

</style>