<template>
<div class="wrapper">
<Header></Header>
 <div class="main"> 
      <router-view></router-view>
    
    
    </div>
<Footer></Footer>
</div>
</template>

<script>
import Header from "@/components/MyHeader.vue"
import Footer from "@/components/MyFooter.vue"
export default {
  components:{Header,Footer }
}
</script>

<style lang="scss">


</style>
