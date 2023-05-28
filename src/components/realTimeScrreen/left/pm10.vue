<template>
  <dv-border-box-8 backgroundColor="rgba(19, 25, 47, 0.6)" :reverse="title==='1.0'">
    <div class="top">
      <span>{{title}}</span>
    </div>
    <div class="bottom">
      <span>{{val}}</span>
      {{unit}}
    </div>
  </dv-border-box-8>
</template>
<script>
export default {
  props: ['title', 'val', 'unit'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.dv-border-box-8 {
  color: white;
  width: 100%;
  /deep/ .border-box-content {
    overflow: hidden;
    padding: 5% 5% 0%;
    box-sizing: border-box;
  }
  .top {
    color: #fe8468;
    height: 40%;
    font-size:1.0rem;
    margin-left: 5%;
    span {
      font-family: "LED";
      font-size: 1.0rem;
    }
  }
  .bottom {
    height: 60%;
    // display: flex;
    // justify-content: flex-end;
    // align-items: baseline;
    text-align: center;
    white-space: nowrap;
    color: #20dbfd;
    font-size: 1.0rem;
    margin-right: 5%;
    span {
      font-family: "LED";
      font-size: 3.2rem;
      text-shadow: 0 0 25px #00d8ff;
    }
  }
}
@font-face {
  font-family: "LED";
  src: url("~@/assets/LED/DS-DIGI.woff2") format("woff2");
}
</style>
