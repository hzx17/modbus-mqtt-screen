import Vue from 'vue'
// 时间过滤器，这个是vue2的过滤器功能，但是我没有使用这个功能
Vue.filter('dateFormat', originVal => {
  const dt = new Date(originVal)

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  // return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  return `${hh}:${mm}:${ss}`
})

Vue.filter('dateNow', originVal => {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
