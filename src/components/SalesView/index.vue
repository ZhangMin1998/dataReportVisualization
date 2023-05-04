<template>
  <div class="SalesView">
    SalesView6
    <!-- <v-chart ref="chart" :option="option"/> -->
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data () {
    return {
      option: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{
          type: 'line',
          data: [100, 200, 300]
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.SalesView{
  .echarts{
    width: 600px;
    height: 300px;
  }
}
</style>
