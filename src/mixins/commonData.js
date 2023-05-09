export default {
  inject: ['reportDataFn', 'wordcloudDataFn', 'mapDataFn'],
  computed: {
    reportData () {
      console.log(this.reportDataFn())
      return this.reportDataFn()
    },
    // 累计销售额
    salesToday () {
      return wrapperNumber(this.reportData, 'salesToday')
      // return this.reportData && this.reportData.salesToday
    },
    // 昨日销售额
    salesLastDay () {
      return wrapperNumber(this.reportData, 'salesLastDay')
      // return this.reportData && this.reportData.salesLastDay
    },
    // 日同比
    salesGrowthLastDay () {
      return formatPercent(this.reportData, 'salesGrowthLastDay')
      // return this.reportData && this.reportData.salesGrowthLastDay
    },
    // 月同比
    salesGrowthLastMonth () {
      return formatPercent(this.reportData, 'salesGrowthLastMonth')
      // return this.reportData && this.reportData.salesGrowthLastMonth
    },

    // 累计订单量
    orderToday () {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    // 昨日订单量
    orderLastDay () {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    // 订单趋势
    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },

    // 今日用户交易数
    orderUser () {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    // 退货率
    returnRate () {
      return formatPercent(this.reportData, 'returnRate')
    },
    // 交易用户趋势X轴
    orderUserTrendAxis () {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    // 交易用户趋势
    orderUserTrend () {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },

    // 累计用户数
    userToday () {
      return wrapperNumber(this.reportData, 'userToday')
    },
    // 日同比
    userGrowthLastDay () {
      return formatPercent(this.reportData, 'userGrowthLastDay')
    },
    // 月同比
    userGrowthLastMonth () {
      return formatPercent(this.reportData, 'userGrowthLastMonth')
    },
    // 上月平台用户数
    userLastMonth () {
      // console.log(this.reportData.userLastMonth)
      return this.reportData && this.reportData.userLastMonth
    },
    // 今日平台用户数
    userTodayNumber () {
      return this.reportData && this.reportData.userToday
    },

    wordcloudData () {
      return this.wordcloudDataFn()
    },
    mapData () {
      return this.mapDataFn()
    }
  }
}

// 数字添加千分位
function format (value) {
  // 方法1
  // return value.toLocaleString()
  // 方法2
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${value}`.replace(reg, '$&,')
}

function wrapperNumber (o, k) {
  return o && o[k] ? format(o[k]) : 0
}

function formatPercent (o, k) {
  return o && o[k] ? `${o[k] + '%'}` : 0
}

function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}
