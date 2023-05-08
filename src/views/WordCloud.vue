<template>
  <div class="chart">
    <v-chart class="chartDom" :option="option" />
  </div>
</template>

<script>
import 'echarts-wordcloud'
// 词云图官网 https://github.com/ZhangMin1998/echarts-wordcloud
export default {
  data () {
    return {
      option: {
        series: [{
          type: 'wordCloud',
          shape: 'circle', // star , triangle, circle
          rotationRange: [-90, 90],
          keepAspect: false,
          textStyle: {
            // fontFamily: '微软雅黑',
            // fontWeight: 'bold',
            color: function () {
              // const colors = ['#fda67e', '#81cacc', '#cca8ba', '#88cc81', '#82a0c5', '#fddb7e', '#735ba1', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
              // return colors[parseInt(Math.random() * 10)]
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            focus: 'self'
            // shadowBlur: 10,
            // shadowColor: '#333'
          },
          // sizeRange: [20, 40],
          gridSize: 8,
          data: [{
            name: '麻辣烫',
            value: Math.random() * 100
          }, {
            name: '黄焖鸡',
            value: Math.random() * 100
          }, {
            name: '牛肉面',
            value: Math.random() * 100
          }, {
            name: '凉皮',
            value: Math.random() * 100
          }, {
            name: '盖浇饭',
            value: Math.random() * 100
          }, {
            name: '猪脚饭',
            value: Math.random() * 100
          }, {
            name: '冒菜',
            value: Math.random() * 100
          }, {
            name: '烧烤',
            value: Math.random() * 100
          }, {
            name: '奶茶',
            value: Math.random() * 100
          }]
        }]
      }
    }
  },
  mounted () {

  },
  methods: {

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
