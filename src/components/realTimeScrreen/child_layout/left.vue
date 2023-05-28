<template>
  <div class="left_container">
    <!-- 实时数据标题 -->
    <dv-border-box-9>系统实时数据</dv-border-box-9>
    <!-- 温湿度 -->
    <dv-border-box-8  backgroundColor="rgba(19, 25, 47, 0.6)">
      <el-row>
        <el-col :span="12">
          <Temperature></Temperature>
        </el-col>
        <el-col :span="12">
          <Humidity></Humidity>
        </el-col>
      </el-row>
    </dv-border-box-8>
    <!-- 实时参数 -->
    <dv-border-box-12>
      <p class="border_title">制冷空调参数</p>
      <el-row>
        <el-col :span="8">
          <PM10 :title="'供电电压'" :val='modbusData[0]' unit="V"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'实时电流'" :val='modbusData[1]' unit="A"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'回路阔开度'" :val='modbusData[2]' unit="。"></PM10>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <PM10 :title="'回路侧压力'" :val='modbusData[3]' unit="MPa"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'回路负荷'" :val='loadData' unit="kW/h"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'吸气压力'" :val='inPeak' unit="MPa"></PM10>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <PM10 :title="'回路吸气温度'" :val='modbusData[6]' unit="℃"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'风机转速'" :val='rotate' unit="kR/min"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'回路排气温度'" :val='modbusData[8]' unit="℃"></PM10>
        </el-col>
      </el-row>
      <p class="border_title">供水参数</p>
      <el-row>
        <el-col :span="8">
          <PM10 :title="'供水温度'" :val='modbusData[9]' unit="℃"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'供水1区水压'" :val='water1' unit="kPa"></PM10>
        </el-col>
        <el-col :span="8">
          <PM10 :title="'供水2区水压'" :val='water2' unit="kPa"></PM10>
        </el-col>
      </el-row>
    </dv-border-box-12>
    <dv-border-box-10>
      <el-row>
      <el-col :span="24">
          <dv-decoration-3 style="width:300px;height:20px;" />
          <div class="system-time">
            <span>该暖通空调已连续工作<strong class="number-span">{{runTime}}</strong>时</span>
          </div>
      </el-col>
    </el-row>
    </dv-border-box-10>
  </div>
</template>
<script>
import Temperature from '../left/temperature'
import Humidity from '../left/humidity'
import PM10 from '../left/pm10'

export default {
  components: { Temperature, Humidity, PM10 },
  data () {
    return {
      modbusData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      loadData: 0,
      water1: 0,
      water2: 0,
      rotate: 0,
      inPeak: 0,
      runTime: 0
    }
  },
  created () {
    this.$vm.$on('modbusData', data => {
      this.modbusData = data
    })
    this.$vm.$on('loadData', data => {
      this.loadData = parseFloat(data)
    })
    this.$vm.$on('inPeak', data => {
      this.inPeak = parseFloat(data)
    })
    this.$vm.$on('water1', data => {
      this.water1 = parseFloat(data)
    })
    this.$vm.$on('water2', data => {
      this.water2 = parseFloat(data)
    })
    this.$vm.$on('rotate', data => {
      this.rotate = parseFloat(data)
    })
    this.$vm.$on('runTime', data => {
      this.runTime = parseFloat(data)
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.left_container{
  display: flex;
  flex-direction: column;
  height: 100%;
  .dv-border-box-9 {
    color: white;
    width: 100%;
    height: 8%;
    /deep/ .border-box-content {
      font-size: 1.25rem;
      text-align: center;
      line-height: 2.4rem;
    }
  }
  .number-span {
    font-size: 4rem;
    font-family: "LED";
    color: @title-color;
  }
  .system-time {
    margin-right: 1rem;
  }
  .dv-border-box-8 {
    color: white;
    height: 14%;
    margin-bottom: 0.1rem;
    .el-row {
      height: 100%;
    }
    .el-col{
      height: 100%;
    }
    /deep/ .border-box-content {
      overflow: hidden;
      padding: 2px;
      box-sizing: border-box;
    }
  }
  .dv-border-box-12 {
    color: white;
    height: 60%;
    padding: 0.2rem;
    .el-col{
      height: 100%;
    }
    /deep/ .border-box-content {
      overflow: hidden;
      padding: 2px;
      box-sizing: border-box;
      .border_title {
        text-align: center;
        font-size: 1.1rem;
        padding: 0.2rem;
        margin: 0;
      }
    }
  }
  .dv-border-box-10 {
    height: 14%;
    font-size: 1.2rem;
    text-align: end;
    color: white;
  }
}
</style>
