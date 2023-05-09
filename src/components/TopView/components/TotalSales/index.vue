<template>
  <div class="TotalSales">
    <CommonCard title="累计销售额" :value="'￥' + salesToday">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">{{ salesGrowthLastDay }}</span>
            <div class="incress" />
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">{{ salesGrowthLastMonth }}</span>
            <div class="decress"/>
          </div>
        </div>
        <div class="compare"></div>
      </template>
      <template #footer>
        <span>昨日销售额 </span>
        <span class="emphasis">{{ '￥' + salesLastDay }}</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonData from '@/mixins/commonData'

export default {
  name: 'TotalSales',
  mixins: [commonCardMixin, commonData],
  data () {
    return {

    }
  },
  created () {
    console.log(this.reportData)
  }
}
</script>

<style lang="scss" scoped>
.TotalSales{
  .compare-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare{
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
}
</style>
