<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tab-bar{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    background: #eeeeee;
    height: 50px;
  }

</style>
