<template>
  <div class='category-view'>
        <dl>
            <dt></dt>
            <dd>title</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>title</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>title</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>title</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>title</dd>
        </dl>
  </div>
</template>

<script>
export default {
    name:"CategoryView"
}
</script>


<style>
.category-view {
    background-color: rgb(244, 253, 255);
    overflow: hidden;
}
.category-view > dl{
    width: 20%;
    height: 5.3125rem;
    float: left;
    text-align: center;
    padding: 0.625rem 0rem 0rem;
    box-sizing: border-box; /*DIV 設定的寬度就已經包含內容寬度、內距與邊框寬度。*/
   
}
.category-view >dl >dt{
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgb(0, 174, 218);
    display: inline-block;
    border-radius: 50%;
}
</style>