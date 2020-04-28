<template>
  <div class="home-recommend">
    <div v-for="item in recommend" class="recommend-item">
      <img :src="item.image" alt="">
       <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
       recommend:{
         type: Array,
         default() {
           return []
         }
       }
    }
  }
</script>

<style scoped>
 .home-recommend{
   width: 100%;
   display: flex;
   text-align: center;
   font-size: 12px;
   border-bottom: 10px solid #dddddd;
   padding: 10px 0px 20px;
 }
  .recommend-item{
    flex: 1;
  }
  .recommend-item  img {
    width: 80px;
    margin-bottom: 10px;
  }

</style>
