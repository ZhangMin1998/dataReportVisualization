<template>
  <div class="SalesView">
    <el-card shadow="hover">
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
        <div>222</div>
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
}
</style>
