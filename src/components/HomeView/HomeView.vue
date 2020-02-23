<template>
  <div class="home-view">
    首頁<br>
    <van-button type="primary">主要按钮</van-button>
  </div>
  
</template>

<script>
import { Button } from 'vant';
export default {
name:'HomeView',
components:{
  [Button.name]:Button
}

}
</script>

<style>

</style>