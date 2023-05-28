<template>
  <div style="overflow: hidden;">
    <div class="map_title">当前空调系统所在位置: <span>{{location}}</span></div>
    <div class="map_button" @click="walkingHandle">到百度地图查看</div>
    <baidu-map
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 35vh;flex-direction: column"
      @ready="handler">
      <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" >
        <bm-label :content="location" :labelStyle="{color: 'red', fontSize : '1.0rem'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data () {
    return {
      center: { lng: 0, lat: 0 },
      location: '成都大学16栋',
      zoom: 3
    }
  },
  methods: {
    handler ({ BMap, map }) {
      // console.log(BMap, map)
      // 成都大学16栋所在经纬度
      this.center.lng = 104.208
      this.center.lat = 30.662
      this.zoom = 12
    },
    walkingHandle () {
      window.open('https://map.baidu.com/poi/%E6%88%90%E9%83%BD%E5%A4%A7%E5%AD%A6')
    }
  }
}
</script>
<style lang="less" scoped>
.map_title {
  padding: .5rem;
  color: @title-color;
  font-size: 1.2rem;
  font-weight: bold;
  span {
    color: #fff;
  }
}
.map_button {
  // border: 0.5rem solid green;
  width: 8rem;
  padding: .1rem .5rem;
  text-align: center;
  cursor: pointer;
  margin: .5rem;
  background-color:  @title-color;
  border-radius: 1rem;
  color: #fff;
  font-size: 1rem;
}
</style>
