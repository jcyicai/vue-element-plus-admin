<template>
  <div class="fullscreen">
    <i
      :class="['iconfont', isFullscreen ? 'icon-fullscreen-exit' : 'icon-fullscreen']"
      class="toolBar-icon"
      @click="handleFullScreen"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import screenfull from 'screenfull'

const isFullscreen = ref(screenfull.isFullscreen)

onMounted(() => {
  screenfull.on('change', () => {
    isFullscreen.value = screenfull.isFullscreen ? true : false
  })
})

const handleFullScreen = () => {
  if (!screenfull.isEnabled) {
    ElMessage.warning('当前您的浏览器不支持全屏 ❌')
  }
  screenfull.toggle()
}
</script>

<style scoped lang="scss">
.fullscreen {
  .iconfont {
    font-size: 22px;
    vertical-align: -4px;
    cursor: pointer;
  }
}
</style>
