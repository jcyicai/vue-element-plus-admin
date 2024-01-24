<template>
  <el-config-provider :locale="locale" :size="elementSize">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalStore } from '@/store/modules/global'
import { getBrowserLang } from '@/utils'
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 全局配置
const globalStore = useGlobalStore()

// 语言 默认根据系统
const locale = computed(() => {
  if (globalStore.language === 'zh') return zhCn
  if (globalStore.language === 'en') return en
  return getBrowserLang() === 'zh' ? zhCn : en
})

// element 组件大小
const elementSize = computed(() => globalStore.elementSize)
</script>

<style scoped></style>
