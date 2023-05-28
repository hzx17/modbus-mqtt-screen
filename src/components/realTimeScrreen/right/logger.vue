<template>
  <div
    title="视频监控"
    :visible.sync="videoOpen"
    width="400px"
    append-to-body
    @close="videoClose"
    class="video_box"
  >
    <div style="padding: .5rem;">
      <span class="el-icon-video-play">视频监控</span>
    </div>
    <!--视频窗口展示-->
    <div id="playWnd" class="playWnd">
      <videoPlayer
        ref="videoplayer"
        :playsinline="true"
        width="100%"
        :options="playerOptions"
        customEventName="changed"
      >
      </videoPlayer>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
import { videoPlayer } from "vue-video-player";
import 'video.js/dist/video-js.css'
export default {
  name: "HkVideo",
  components: {
    videoPlayer,
  },
  data() {
    return {
      videoOpen:true,
      playerOptions: {
        language: "zh-CN",
        muted: true,// 默认情况下将会消除任何音频
        autoplay: true,// 如果true,浏览器准备好时开始回放。
        controls: true, //不显示暂停、声音、进度条组件
        loop: true, // 视频一结束就重新开始。
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        notSupportedMessage: '此监控源地址不正确，暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        sources: [
          {
            type: "video/mp4",
            src: '',
          },
        ],
      },
    };
  },
  destroyed() {},
  methods: {
    //预览功能
    preview() {
      console.log("preview");
    },
    //停止全部预览功能
    stopAllPreview() {},
    //关闭视频窗口
    closeWindow() {},
    // 查看摄像
    videoChange() {
      this.videoOpen = true;
      //模拟摄像头预览
    },
    // 关闭摄像头弹窗
    videoClose() {
      this.videoOpen = false;
      this.closeWindow();
    },
  },
};
</script>
<style scoped lang="less">
.video_box {
  width: 100%;
  border: 5px red solid;
  font-size: 1.5rem;
  color: @title-color;
}

.plugin {
  width: 100%;
}

.playWnd {
  width: 100%;
  margin: 0;
}

.video_box {
  ::v-deep .el-dialog__body {
    padding: 0 !important;
  }
}
</style>