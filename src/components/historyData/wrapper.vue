<!-- html -->
<template>
  <div class='wrapper_table'>
    <dv-scroll-board :config="config" style="width:100%;height:18rem;" />
  </div>
</template>

<!-- script -->
<script>
export default {
  data () {
    return {
      config: {
        header: ['历史告警', '告警日期', '告警原因'],
        headerBGC: '#ff000080',
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  },
  created () {
    this.$http.get('/my/wrapperinfo').then(response => {
      const data = response.data.data
      this.config = {
        header: ['历史告警', '告警日期', '告警原因'],
        headerBGC: '#ff000080',
        data: data
      }
    })
  }
}
</script>

<style lang="less" scoped>
.dv-scroll-board{
  /deep/ .ceil {
    font-size: 0.8rem !important;
  }
  /deep/ .header-item {
    // height: 2rem !important;
    font-size: 0.8rem !important;
  }
}
</style>
