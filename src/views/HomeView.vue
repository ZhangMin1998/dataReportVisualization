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
// import { getTest, postTest } from '@/api/index'
// import { wordcloudApi } from '@/api/index'
import wordclouddata from './data/wordcloudData.json'
import mapdata from './data/mapdata.json'
import reportdata from './data/reportdata.json'

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
      reportData: null,
      wordcloudData: null,
      mapData: null
    }
  },
  provide () {
    return {
      reportDataFn: () => this.reportData,
      wordcloudDataFn: () => this.wordcloudData,
      mapDataFn: () => this.mapData
    }
  },
  created () {
    // getTest({ a: 1 }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    this.wordcloudData = wordclouddata
    this.reportData = reportdata
    this.mapData = mapdata
    // wordcloudApi().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // }).finally(() => {
    // })
  },
  mounted () {

  },
  methods: {

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
