// eslint-disable-next-line camelcase
import { export_json_to_excel } from '@/excel/export2Excel'
export function EXCEL () {
  require.ensure([], async () => {
    const res = await this.$http.get('/my/getValue')
    if (res.status !== 200) return this.$message.error('数据获取失败')
    // 表头标题
    const tHeader = ['时间', '电压', '实时电流', '回路阔开度', '回路侧压力', '回路吸气温度', '供水温度']
    // 对应键名
    const filterVal = ['time', 'voltmeter', 'ele', 'data3', 'data4', 'data5', 'waterTem']
    // 对应键值
    const jsonData = res.data.data
    // console.log('getExcel -> res.data', res.data)
    const data = formatJson(filterVal, jsonData)
    export_json_to_excel(tHeader, data, '硬件设备实时数据报表')
  })
  function formatJson (filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]))
  }
}
