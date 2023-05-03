<template>
  <div class="CommonCard">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonCard',
  props: {
    title: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
.CommonCard{
  .title{
    font-size: 12px;
    color: #999;
  }
  .value{
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart{
    height: 50px;
  }
  .line{
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total{
    font-size: 12px;
    color: #666;
  }
}
</style>

<style lang="scss">
.emphasis{
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.incress{
  width: 0;
  height: 0;
  border: 3px solid;
  border-color: transparent transparent red transparent;
  margin: 0 0 3px 5px;
}
.decress{
  width: 0;
  height: 0;
  border: 3px solid;
  border-color: green transparent transparent transparent;
  margin: 3px 0 0 5px;
}
</style>
