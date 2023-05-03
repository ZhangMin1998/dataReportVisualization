<template>
  <div class="TodayUsers">
    <CommonCard title="今日交易用户数" value="81,014">
      <template>
        <div id="today-users-chart" :style="{ width: '100%', height: '100%' }">

        </div>
      </template>
      <template #footer>
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin],
  data () {
    return {
      option: {
        title: {
          text: ''
        },
        color: ['#3398DB'],
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
          // boundaryGap: false, // 默认距离x轴的距离 false极限拉伸
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00']
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar',
          barWidth: '60%',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150]
        }]
      }
    }
  },
  mounted () {
    const chartDom = document.getElementById('today-users-chart')
    console.log(this.$echarts)
    const chart = this.$echarts.init(chartDom)
    chart.setOption(this.option)
  }
}
</script>

<style lang="scss" scoped>
.TodayUsers{

}
</style>
