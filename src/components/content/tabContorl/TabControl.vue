<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-content-item"
         @click="activeClick(index)" :class="{active:index==currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex : 0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      activeClick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    background: #ffffff;
  }
  .tab-content-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-content-item span {
    padding: 5px 8px;
  }
  .active{
    color: hotpink;
  }
  .active span {
    border-bottom: 3px solid hotpink;
  }
</style>
