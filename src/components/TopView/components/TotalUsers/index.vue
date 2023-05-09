<template>
  <div class="TotalUsers">
    <CommonCard title="累计用户数" :value="userToday">
      <template>
        <v-chart :option="getOptions()"></v-chart>
        <!-- <div id="total-users-chart" :style="{ width: '100%', height: '100%' }"></div> -->
      </template>
      <template #footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">{{ userGrowthLastDay }} </span>
          <div class="incress" />
          <span class="month">月同比 </span>
          <span class="emphasis">{{ userGrowthLastMonth }} </span>
          <div class="decress" />
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonData from '@/mixins/commonData'

export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin, commonData],
  data () {
    return {
      option: {
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        series: [{
          type: 'bar',
          name: '上月平台用户数',
          stack: '总量',
          data: null,
          // data: [200],
          // data: [this.userLastMonth], // userTodayNumber userGrowthLastMonth
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          name: '今日平台用户数',
          stack: '总量',
          data: null,
          // data: [250],
          // data: [this.userTodayNumber],
          // barWidth: 10,
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          data: null,
          // data: [200],
          // data: [this.userLastMonth],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            console.log(value, endPoint)

            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover' // 用于指定缩放策略 'center'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }]
      }
    }
  },
  mounted () {
    this.option.series[0].data = [this.userLastMonth]
    this.option.series[1].data = [this.userTodayNumber]
    this.option.series[2].data = [this.userLastMonth]
    // console.log(this.userLastMonth, this.userTodayNumber)
    // const chartDom = document.getElementById('total-users-chart')
    // const chart = this.$echarts.init(chartDom)
    // chart.setOption(this.option)
  },
  methods: {
    getOptions () {
      return this.option
    }
  }
}
</script>

<style lang="scss" scoped>
.TotalUsers{
  .total-users-footer{
    display: flex;
    align-items: center;
    .month{
      margin-left: 10px;
    }
  }
}
</style>
