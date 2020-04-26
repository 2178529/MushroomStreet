<template>
  <div class="nav-bar">
    <div class="left"> <slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"> <slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
 .nav-bar{
   width: 100%;
   height: 46px;
   line-height: 46px;
   text-align: center;
   display: flex;
   /*粘性定位*/
   position: sticky;
   top: 0;
   left: 0;
 }
  .nav-bar .left, .right{
    width: 60px;
    /*background: #00a8ff;*/
  }
  .nav-bar .center{
    flex: 1;
    /*background: #00b3ee;*/
  }
</style>
