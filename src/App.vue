<template>
  <el-config-provider :locale="locale" :size="assemblySize" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { getBrowserLang } from '@/utils'
import { useTheme } from '@/hooks/useTheme'
import { ElConfigProvider } from 'element-plus'
import { useGlobalStore } from '@/store/modules/global'
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 全局配置
const globalStore = useGlobalStore()

// 初始化主题
const { initTheme } = useTheme()
initTheme()

// 语言 默认根据系统
const locale = computed(() => {
  if (globalStore.language === 'zh') return zhCn
  if (globalStore.language === 'en') return en
  return getBrowserLang() === 'zh' ? zhCn : en
})

// element 组件大小
const assemblySize = computed(() => globalStore.assemblySize)

// element button config
const buttonConfig = reactive({ autoInsertSpace: false })
</script>

<style scoped></style>
