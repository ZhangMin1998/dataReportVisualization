<template>
  <div class="BottomView">
    <!-- 左边 -->
    <div class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{ userCount }}</div>
                <v-chart :option="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{ searchCount }}</div>
                <v-chart :option="searchNumberOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="150" />
                <el-table-column prop="keyword" label="关键词" width="150" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>

    <!-- 右边 -->
    <div class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="redioSelect" size="small" @change="onRadioChange">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :option="categoryOption" :dark="true"></v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import commonData from '@/mixins/commonData'

const colors = ['#8d7fec', '#5085f2', '#f8726b', '#e7e702', '#78f283', '#4bc1fc', '#F70909']

export default {
  name: 'BottomView',
  mixins: [commonData],
  data () {
    return {
      searchUserOption: {},
      searchNumberOption: {},
      redioSelect: '品类',
      categoryOption: {},
      tableData: [
        // { id: 1, rank: 1, keyword: '深圳', count: 100, users: 90, range: '96%' },
        // { id: 2, rank: 2, keyword: '广州', count: 100, users: 90, range: '96%' },
        // { id: 3, rank: 3, keyword: '赣州', count: 100, users: 90, range: '96%' },
        // { id: 4, rank: 4, keyword: '南阳', count: 100, users: 90, range: '96%' }
      ],
      totalData: [],
      total: 0,
      pageSize: 4,
      userCount: '', // 搜索用户数
      searchCount: '' // 搜索量
    }
  },
  watch: {
    // wordcloudData () {
    //   console.log('watch', this.wordcloudData)
    // }
  },
  mounted () {
    this.initData()
    this.renderPieChart()
    console.log(this.category1)
  },
  methods: {
    initData () {
      let userCount = 0
      let searchCount = 0
      this.wordcloudData.forEach((item, index) => {
        userCount += item.user
        searchCount += item.count
        this.totalData.push({
          id: index + 1,
          rank: index + 1,
          keyword: item.word,
          users: item.user,
          count: item.count,
          range: ((item.user / item.count) * 100).toFixed() + '%'
        })
      })
      // console.log(this.totalData)
      this.userCount = this.format(userCount)
      this.searchCount = this.format(searchCount)
      this.total = this.totalData.length
      this.renderTable(1)
      this.renderLineChart()
    },
    renderTable (page) {
      this.tableData = this.totalData.slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize)
    },
    onPageChange (page) {
      // console.log(page)
      this.tableData = this.totalData.slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize)
    },
    renderPieChart () {
      if (!this.category1.data1 || !this.category2.data1) return
      let data = []
      let axis = []
      let total = 0 // this.category1.data1 的累加
      if (this.redioSelect === '品类') {
        data = this.category1.data1.slice(0, 7)
        axis = this.category1.axisX.slice(0, 7)
        total = data.reduce((s, i) => s + i, 0)
      } else { // 商品
        data = this.category2.data1.slice(0, 7)
        axis = this.category2.axisX.slice(0, 7)
        total = data.reduce((s, i) => s + i, 0)
      }
      const chartData = []
      data.forEach((item, index) => {
        const percent = `${(item / total * 100).toFixed(2)}%`
        chartData.push({
          lengendname: axis[index],
          value: item,
          percent,
          name: `${axis[index]} | ${percent}`,
          itemStyle: {
            color: colors[index]
          }
        })
      })
      this.categoryOption = {
        title: [
          {
            text: `${this.redioSelect}分布`,
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: total, // 副标题
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            }
          }
        ],
        legend: {
          type: 'scroll',
          height: 250,
          top: 'middle',
          left: '70%',
          orient: 'vertical'
        },
        tooltip: {
          show: true,
          trigger: 'item',
          textStyle: {
            color: '#fff'
          },
          // borderColor: 'rgba(50,50,50,0.7)',
          backgroundColor: 'rgba(50,50,50,0.7)',
          formatter: function (params) {
            const str = params.seriesName
            return str + '<br/>' + params.marker +
             params.data.lengendname + '<br/>' +
             '数量：' + params.data.value + '<br/>' +
             '占比：' + params.data.percent
          }
        },
        series: [
          {
            name: '品类分布',
            type: 'pie',
            data: chartData,
            radius: ['45%', '60%'], // 内外环
            center: ['35%', '50%'], // 圆心位置
            label: {
              normal: {
                show: true,
                position: 'outside', // outside/inside/center
                formatter: function (params) {
                  // return `${params.data.lengendname} | ${params.data.percent}`
                  return params.data.lengendname
                }
              }
            },
            labelLine: {
              normal: {
                length: 5, // 靠近图
                length2: 3,
                smooth: true
              }
            },
            clockwise: true, // 数据顺序是否按顺时针排列
            itemStyle: {
              // borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 4
            }
          }
        ]
      }
    },
    renderLineChart () {
      const createOption = (key) => {
        const data = []
        const axis = []
        this.wordcloudData.forEach(item => {
          data.push(item[key])
          axis.push(item.word)
        })
        return {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: axis
          },
          yAxis: {
            show: false
          },
          tooltip: {
            show: true
          },
          series: [{
            type: 'line',
            areaStyle: {
              color: 'rgba(95, 187, 255, 0.5)'
            },
            lineStyle: {
              // width: 0
              color: 'rgb(95, 187, 255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true,
            data
          }],
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
        }
      }
      this.searchUserOption = createOption('user')
      this.searchNumberOption = createOption('count')
    },
    onRadioChange () {
      this.renderPieChart()
    }
  }
}
</script>

<style lang="scss" scoped>
.BottomView{
  display: flex;
  margin-top: 20px;
  .view{
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child{
      padding: 0 10px 0 0;
    }
    &:last-child{
      padding: 0 0 0 10px;
    }
    .title-wrapper{
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper{
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner{
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart{
          flex: 1;
          padding: 0 10px;
          .chart-title{
            color: #999;
            font-size: 14px;
          }
          .chart-data{
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts{
            height: 50px;
          }
        }
      }
      .table-wrapper{
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
        .el-pagination{
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
