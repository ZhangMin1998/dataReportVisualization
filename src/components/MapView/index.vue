<template>
  <div class="MapView">
    <div class="left">
      <BMapScatter></BMapScatter>
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template #header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <LiquidFill></LiquidFill>
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template #header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <WordCloud></WordCloud>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BMapScatter from './components/BMapScatter.vue'
import LiquidFill from '@/views/LiquidFill.vue'
import WordCloud from '@/views/WordCloud.vue'

export default {
  name: 'MapView',
  components: {
    BMapScatter,
    LiquidFill,
    WordCloud
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.MapView{
  display: flex;
  margin-top: 20px;
  .left{
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background: #fff;
  }
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title{
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
    .chart-wrapper{
      width: 100%;
      width: 100%;
      height: 190px;
    }
  }
}
</style>
