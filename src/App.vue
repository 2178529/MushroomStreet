<template>
  <div id="app">
    <router-view></router-view>
     <Maintabbar></Maintabbar>
  </div>
</template>

<script>
 import Maintabbar from "./components/common/tab-bar/Maintabbar";
export default {
  name: 'App',
  components:{
   Maintabbar
  },
}
</script>

<style>
 @import "assets/css/base.css";
 @import "assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>
