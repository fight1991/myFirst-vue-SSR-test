<template>
  <div class="container">
    <el-row>
      <el-table size="mini" :data="tableList" border>
        <el-table-column prop="imageText" min-width="150" label="123"></el-table-column>
        <el-table-column prop="imageUrl" min-width="150" label="123"></el-table-column>
        <el-table-column prop="linkUrl" min-width="150" label="123"></el-table-column>
        <el-table-column prop="imageText" min-width="150" label="123"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      tableList: []
    }
  },
  created() {
    this.$message({
      type: 'success',
      message: '进来了'
    })
    this.getBanner()
  },
  asyncData({route}) {
    console.log(route)
  },
  methods: {
    async getBanner() {
      console.log(this)
      let {data} = await this.axios.post('/plat-manager/carouselManager/showCarousel',
        {code: 'CONFIG:CCBA_FIRST_PAGE'})
      if (data.code === '0000') {
        console.log(data)
        this.tableList = data.result
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: pink;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
