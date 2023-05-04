<template>
  <div class="SalesView">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template #header>
        <div class="menu-wrapper">
          <el-menu mode="horizontal" :default-active="activeIndex" @select="onMenuSelect" class="sales-view-el-menu">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="redioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              class="sales-view-date-picker"
              v-model="data"
              type="daterange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small">
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :option="option"></v-chart>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <!-- <div class="list-item-no" :class="+item.no <= 3 ? 'top-no' : ''">{{ item.no }}</div> -->
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{ item.no }}</div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data () {
    return {
      activeIndex: '1',
      redioSelect: '今日',
      data: '',
      pickerOptions: {
        firstDayOfWeek: 1,
        // disabledDate (picker) {
        //   // 禁止选择未来日期（可以选择今天）
        //   return picker.getTime() > Date.now()
        // },
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      rankData: [
        {
          no: 1,
          name: '塔斯汀',
          money: '323,234'
        },
        {
          no: 2,
          name: '肯德基',
          money: '323,234'
        },
        {
          no: 3,
          name: '必胜客',
          money: '323,234'
        },
        {
          no: 4,
          name: '赛百味',
          money: '323,234'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 6,
          name: '牛耕记',
          money: '323,234'
        },
        {
          no: 7,
          name: '华莱士',
          money: '323,234'
        }
      ],
      option: {
        color: '#3398DB',
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          },
          axisTick: {
            // show: false // 隐藏短竖线
            alignWithLabel: true, // 短竖线靠近label
            lineStyle: {
              color: '#999'
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          axisLine: {
            show: false // 隐藏y轴
          },
          axisTick: {
            show: false // 隐藏短竖线
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: '35%',
          data: [400, 70, 180, 350, 380, 200, 250, 300, 350, 300, 400, 250]
        }]
      }
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.SalesView{
  margin-top: 20px;
  .menu-wrapper{
    display: flex;
    position: relative;
    .sales-view-el-menu{
      width: 100%;
      padding-left: 20px;
      .el-menu-item{
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right{
      height: 50px;
      position: absolute;
      right: 20px;
      top: 0;
      display: flex;
      align-items: center;
      // justify-content: flex-end;
      .sales-view-date-picker{
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper{
    display: flex;
    height: 270px;
    .echarts{
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list{
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title{
        margin-top: 20px;
        font-size: 12px;
        font-weight: 500;
        color: #666;
      }
      .list-item-wrapper{
        margin-top: 15px;
        .list-item{
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no{
              color: #fff;
              font-weight: 500;
              background: #000;
              border-radius: 50%;
            }
          }
          .list-item-name{
            margin-left: 10px;
            color: #333;
          }
          .list-item-money{
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
