<template>
  <div class="TotalUsers">
    <CommonCard title="累计用户数" value="1,087,503">
      <template>
        <v-chart :option="getOptions()"></v-chart>
        <!-- <div id="total-users-chart" :style="{ width: '100%', height: '100%' }"></div> -->
      </template>
      <template #footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73% </span>
          <div class="incress" />
          <span class="month">月同比 </span>
          <span class="emphasis">35.91% </span>
          <div class="decress" />
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
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
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          stack: '总量',
          data: [250],
          // barWidth: 10,
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          data: [200],
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
