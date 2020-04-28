<template>
<div>
  <Navbar class="nav-bar">
    <div slot="center">蘑菇街</div>
  </Navbar>
  <HomeSwiper :banners="banners"></HomeSwiper>
  <home-recommend :recommend="recommend" />
  <HomePopular />
  <TabControl :titles="['流行','新款','精选']" class="tab-content"></TabControl>
  <ul>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
    <li>站位列表</li>
  </ul>
</div>
</template>

<script>
  //公共组件
  import Navbar from "../../components/common/nav-bar/Navbar";
  import TabControl from "../../components/content/tabContorl/TabControl";

  //home的子组件
  import HomeSwiper from "./children-component/HomeSwiper";
  import {getHomeMultidata} from "../../network/home";
  import HomeRecommend from "./children-component/HomeRecommend";
  import HomePopular from "./children-component/HomePopular";

  export default {
    name: "home",
    data(){
      return {
         banners:[],
         recommend:[]
      }
    },
    components:{
      HomeRecommend,
      Navbar,
      HomeSwiper,
      HomePopular,
      TabControl
    },
    created() {
      this.getHomeMultiData()
    },
    methods:{
      //网络请求相关的方法
      getHomeMultiData(){
        getHomeMultidata().then(res => {
          //console.log(res)
          this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      }

      //常规事件处理的方法

    }
  }
</script>

<style scoped>
.nav-bar{
  background: hotpink;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
}
  .tab-content{
    position: sticky;
    top: 45px;
  }
</style>
