<template>
  <div class="map"></div>
</template>

<script>
import Map from 'ol/Map'
import View from 'ol/View'
// 添加图层
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import TileWMS from 'ol/source/TileWMS.js'
// 格式化地理坐标
import { fromLonLat } from 'ol/proj.js'
export default {
  data () {
    return {
      map: null,
      // 后台服务器地址
      urlRoot: 'http://193.112.110.27:8080/geoserver/gee/wms?'
    }
  },
  mounted () {
    console.log('dom已经挂载完了')
    this.init()
  },
  methods: {
    init () {
      //  经纬度转化
      var center = fromLonLat([101.34272, 23.6042484])
      //  自定义图层
      this.layers = [
        new TileLayer({
          source: new TileWMS({
            url: this.urlRoot, // 图层地址
            params: { LAYERS: 'fangchenggang:other_sea' }, // 图层名称
            serverType: 'geoserver', // 后台服务器
            zIndex: 2 // 图层层级
          })
        }),
        new TileLayer({
          source: new TileWMS({
            url: this.urlRoot,
            params: { LAYERS: 'fangchenggang:realm' },
            serverType: 'geoserver'
          }),
          zIndex: 3
        }),
        new TileLayer({
          source: new TileWMS({
            url: this.urlRoot,
            params: { LAYERS: 'fangchenggang:stockpile' },
            serverType: 'geoserver'
          }),
          zIndex: 3
        }),
        new TileLayer({
          source: new TileWMS({
            url: this.urlRoot,
            params: { LAYERS: 'fangchenggang:road' },
            serverType: 'geoserver'
          }),
          zIndex: 3
        }),
        new TileLayer({
          source: new TileWMS({
            url: this.urlRoot,
            params: { LAYERS: 'fangchenggang:railway' },
            serverType: 'geoserver'
            // crossOrigin: 'anonymous'
          }),
          zIndex: 3
        }),
        new TileLayer({
          source: new TileWMS({
            url: this.urlRoot,
            params: { LAYERS: 'cesium:storage_yard' },
            serverType: 'geoserver'
          }),
          zIndex: 3
        })
      ]
      //  加载地图
      this.map = new Map({
        target: 'map', // 地图容器
        layers: [
          // 加载天地图天地图
          new TileLayer({
            source: new XYZ({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            }),
            zIndex: 1
          })
        ],
        view: new View({
          projection: 'EPSG:3857',
          // 初始化地图中心
          center: center,
          zoom: 2,
          // 镜头
          maxZoom: 18,
          minZoom: 13
        }),
        logo: false
      })
      // 添加图层
      // this.map.addLayer(layers)
    }
  }
}
