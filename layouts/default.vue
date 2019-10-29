<template>
  <div class="outpage">
    <Header></Header>
    <div class="container-1">
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
  </div>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
.container-1 {
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid green;
}
</style>

