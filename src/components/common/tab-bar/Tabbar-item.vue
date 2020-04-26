<template>
  <div class="tab-list" @click="listClick" :class="{active:isActive}">
    <div v-if="!isActive"><slot name="tab-icon"></slot></div>
    <div v-else><slot name="tab-icon-active"></slot></div>
    <div :style="styleColor"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar-item",
    data(){
      return {
        //isActive:false,
      }
    },
    computed:{
      isActive(){
        //return this.$route.path == this.path
        return  this.$route.path.indexOf(this.path) !=-1
      },
      styleColor(){
        return this.isActive ? {color:this.activeColor}: {}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#00b3ee'
      }
    },
    methods:{
    listClick(){
      this.$router.push(this.path)
    }
    }
  }
</script>

<style scoped>
  /*@import "../../assets/font-awesome-4.7.0/css/font-awesome.min.css";*/
  .tab-list{
    flex: 1;
    text-align: center;
  }
  .tab-list .fa{
    font-size: 24px;
    margin-top: 2px;
  }
  .active{
    color: #00b3ee;
  }
</style>
