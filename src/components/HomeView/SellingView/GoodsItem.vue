<template>
  <div class="goods-item-view">
    <img class="goodsImg" v-lazy="goods.img" />
    <p class="goodTitle">{{goods.title}}</p>
    <p class="goodDesctiption">{{goods.desc}}</p>
    <p class="other">
      <span class="now-Price">${{goods.nowPrice}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "GoodsItemView",
  props: ["goods"]
};
</script>

<style>
.goods-item-view {
  width: 50%;
  height: 13.875rem;
  border: 1px solid #e7e7e7;
  float: left;
  box-sizing: border-box; /*加上編筐我的整個大小50%*/
  padding: 5px;
  background-color: #fff;
  text-align: center;

}
.goods-item-view .goodsImg {
  width: 8.125rem;
  height: auto;
  margin-bottom: 0.9375rem;
  margin-top: 1.25rem;
}
.goods-item-view .goodTitle {
  font-size: 0.8125rem;
  color: black;
  font-weight: 800;
  margin-bottom: 0.9375rem;
}
.goods-item-view .goodDesctiption {
  font-size: 0.6875rem;
  color: rgb(156, 156, 156);
}
.goods-item-view .other {
  color: blue;
  margin-top: 0.9375rem;
  font-weight: 800;
}
</style>