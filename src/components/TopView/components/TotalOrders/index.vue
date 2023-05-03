<template>
  <div class="TotalOrders">
    <CommonCard title="累计订单量" value="2,157,420">
      <template>
        <div id="total-order-chart" :style="{ width: '100%', height: '100%' }">

        </div>
      </template>
      <template #footer>
        <span>昨日订单量 </span>
        <span class="emphasis">2,000,000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
// import * as echarts from 'echarts'

export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin],
  data () {
    return {
      option: {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {},
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false // 默认距离x轴的距离 false极限拉伸
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          areaStyle: 'purple',
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true,
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 630]
        }]
      }
    }
  },
  mounted () {
    const chartDom = document.getElementById('total-order-chart')
    console.log(this.$echarts)
    const chart = this.$echarts.init(chartDom)
    chart.setOption(this.option)
  }
}
</script>

<style lang="scss" scoped>
.TotalOrders{

}
</style>
