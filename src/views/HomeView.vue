<template>
  <div class="home">
    <TopView></TopView>
    <SalesView></SalesView>
    <BottomView></BottomView>
    <MapView></MapView>
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'HomeView',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #eee;
}
</style>
