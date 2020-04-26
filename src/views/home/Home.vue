<template>
<div>
  <Navbar class="nav-bar">
    <div slot="center">蘑菇街</div>
  </Navbar>
</div>
</template>

<script>
  import Navbar from "../../components/common/nav-bar/Navbar";
  export default {
    name: "home",
    components:{
      Navbar
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
</style>
