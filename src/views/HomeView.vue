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

// eslint-disable-next-line
import { getTest, postTest } from '@/api/index'

export default {
  name: 'HomeView',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data () {
    return {

    }
  },
  mounted () {
    getTest({ a: 1 }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // postTest({ a: 1 })
  }
}
</script>

<style lang="scss" scoped>
.home{
  // overflow: auto;
  width: 100%;
  // height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #eee;
}
</style>
