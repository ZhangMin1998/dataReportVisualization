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
                <div class="chart-data">93,634</div>
                <v-chart :option="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <v-chart :option="searchNumberOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="180" />
                <el-table-column prop="keyword" label="关键词" width="180" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
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
              <el-radio-group v-model="redioSelect" size="small">
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

export default {
  name: 'BottomView',
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
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
          data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150]
        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      searchNumberOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
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
          data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150]
        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      tableData: [
        { id: 1, rank: 1, keyword: '深圳', count: 100, users: 90, range: '96%' },
        { id: 2, rank: 2, keyword: '广州', count: 100, users: 90, range: '96%' },
        { id: 3, rank: 3, keyword: '赣州', count: 100, users: 90, range: '96%' },
        { id: 4, rank: 4, keyword: '南阳', count: 100, users: 90, range: '96%' }
      ],
      redioSelect: '品类',
      categoryOption: {}
    }
  },
  mounted () {
    this.renderPieChart()
  },
  methods: {
    onPageChange (page) {
      console.log(page)
    },
    renderPieChart () {
      const mockData = [
        {
          name: '粉面粥店 | 15.40%',
          lengendname: '粉面粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#e7e702'
          }
        },
        {
          name: '简餐便当 | 22.30%',
          lengendname: '简餐便当',
          value: 97,
          percent: '22.30%',
          itemStyle: {
            color: '#8d7fec'
          }
        },
        {
          name: '汉堡披萨 | 21.315%',
          lengendname: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle: {
            color: '#5085f2'
          }
        }
      ]
      this.categoryOption = {
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: '320', // 副标题
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
            data: mockData,
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
