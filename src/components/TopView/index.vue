<template>
  <div class="TopView">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSales></TotalSales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrders></TotalOrders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TodayUsers></TodayUsers>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalUsers></TotalUsers>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from './components/TotalSales'
import TotalOrders from './components/TotalOrders'
import TodayUsers from './components/TodayUsers'
import TotalUsers from './components/TotalUsers'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
  }
}
</script>

<style lang="scss" scoped>
.TopView{

}
</style>
