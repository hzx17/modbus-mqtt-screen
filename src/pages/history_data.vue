<!-- 中央实时内容区主页 -->
<template>
  <div class="history_data">
   <el-row :gutter="12">
      <el-col :span="12"  :gutter="24" style="padding-right:0;">
        <div class="history">
          <Chart1></Chart1>
        </div>
        <div style="padding: .5rem;"></div>
        <div class="history">
          <div style="display: flex;justify-content: center;align-items: center; flex-direction: row; height: 100%;">
            <Chart3></Chart3>
            <Chart4></Chart4>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="history">
          <Chart2></Chart2>
        </div>
        <div style="padding: .5rem;"></div>
        <div class="history">
          <WapperTable ></WapperTable >
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Chart1 from '@/components/historyData/chart1.vue'
import Chart2 from '@/components/historyData/chart2.vue'
import Chart4 from '@/components/historyData/chart4.vue'
import Chart3 from '@/components/historyData/chart3.vue'
import WapperTable from '@/components/historyData/wrapper.vue'

export default {
  components: { Chart1, Chart2, Chart4, Chart3, WapperTable },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
.history_data {
  height: 100%;
  .el-row {
    padding: 1rem;
    height: 80%;
    .el-col {
      height: 65%;
    }
  }
  .history {
    height: 18rem;
  }
}
</style>
