<template>
  <div class="header">
    <nuxt-link to="/">我是列表</nuxt-link>
    <nuxt-link to="/www/list">我是查询页</nuxt-link>
    <nuxt-link to="/www/detail">我是详情页</nuxt-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .header {
    height: 50px;
    width: 100%;
    line-height: 50px;
    background-color: #fefefe;
    color: #fff;
    border: 1px solid green;
    box-sizing: border-box;
    margin-bottom: 10px;
    text-align: center;
  }
</style>
