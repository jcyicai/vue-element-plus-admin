import { defineStore } from 'pinia'
import { GlobalState } from '@/store/interface'
import { DEFAULT_PRIMARY } from '@/config'
import piniaPersistConfig from '@/store/helper/persist'

export const useGlobalStore = defineStore('vepa-global', {
  // 修改默认值之后，需清除 localStorage 数据
  state: (): GlobalState => ({
    // 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
    layout: 'vertical',
    // element 组件大小
    assemblySize: 'default',
    // 当前系统语言
    language: null,
    // 主题颜色
    primary: DEFAULT_PRIMARY,
    // 深色模式
    isDark: false,
    // 灰色模式
    isGrey: false,
    // 色弱模式
    isWeak: false,
    // 侧边栏反转
    asideInverted: false,
    // 头部反转
    headerInverted: false,
    // 当前页面是否全屏
    maximize: false,
    // 暗黑模式
    darkMode: false,
    // 折叠菜单
    isCollapse: false,
    // 菜单手风琴
    accordion: true,
    // 面包屑导航
    breadcrumb: true,
    // 面包屑导航图标
    breadcrumbIcon: true,
    // 标签页
    tabs: true,
    // 标签页图标
    tabsIcon: true,
    // 页脚
    footer: true
  }),
  getters: {},
  actions: {
    // 设置 GlobalState
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      // https://pinia.vuejs.org/zh/core-concepts/state.html#mutating-the-state
      // 变更 state 值
      this.$patch({ [args[0]]: args[1] })
    }
  },
  // 持久化
  persist: piniaPersistConfig('vepa-global')
})
