<template>
  <div class="chart">
    <v-chart class="chartDom" :option="option" />
  </div>
</template>

<script>
import 'echarts-liquidfill'
import commonData from '@/mixins/commonData'
// 水球图官网 https://github.com/ecomfe/echarts-liquidfill#change-text
export default {
  mixins: [commonData],
  data () {
    return {
      data: null,
      option: {
        series: [{
          type: 'liquidFill',
          name: '用户月同比增长',
          waveAnimation: true, // 波浪
          amplitude: 8, // 振幅
          color: ['green'],
          backgroundStyle: {
            color: 'none'
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          label: {
            fontSize: 28,
            color: '#999',
            insideColor: '#fff' // 水和数值重叠时的颜色
          },
          radius: '80%',
          tooltip: {
            show: true
          },
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#aaa4a4',
              color: 'none',
              shadowBlur: 0,
              shadowColor: '#fff'
            }
          },
          data: [0]
        }]
      }
    }
  },
  mounted () {
    // console.log(this.userGrowthMonth, (Number(this.userGrowthMonth) / 100).toFixed(4))
    this.option.series[0].data[0] = [(Number(this.userGrowthMonth) / 100).toFixed(4)]
    this.option.series[0].color = [this.getColor(this.option.series[0].data[0])]
  },
  methods: {
    getColor (value) {
      // eslint-disable-next-line
      return value > 0 && value <= 0.5 ? 'rgba(97, 216, 0, 0.7)'
      // eslint-disable-next-line
        : value > 0.5 && value <= 0.8 ? 'rgba(204, 178, 26, 0.7)'
        // eslint-disable-next-line
        : value > 0.8 ? 'rgba(241, 47, 28, 0.7)' : '#c7c7cb'
    }
  }
}
</script>
<style lang="scss" scoped>
.chart{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.chartDom {
  width: 100%;
  height: 100%;
}
</style>
