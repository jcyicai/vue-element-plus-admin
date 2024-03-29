/** 布局模式 */
export type LayoutType = 'vertical' | 'transverse' //'vertical' | 'classic' | 'transverse' | 'columns'
/** 组件尺寸 */
export type AssemblySizeType = 'large' | 'default' | 'small'
/** 语言 */
export type LanguageType = 'zh' | 'en' | null

/** GlobalState */
export interface GlobalState {
  // 布局模式
  layout: LayoutType
  // element 组件大小
  assemblySize: AssemblySizeType
  // 当前系统语言
  language: LanguageType
  // 主题颜色
  primary: string
  // 深色模式
  isDark: boolean
  // 灰色模式
  isGrey: boolean
  // 色弱模式
  isWeak: boolean
  // 侧边栏反转
  asideInverted: boolean
  // 头部反转
  headerInverted: boolean
  // 当前页面是否全屏
  maximize: boolean
  // 暗黑模式
  darkMode: boolean
  // 折叠菜单
  isCollapse: boolean
  // 菜单手风琴
  accordion: boolean
  // 面包屑导航
  breadcrumb: boolean
  // 面包屑导航图标
  breadcrumbIcon: boolean
  // 标签页
  tabs: boolean
  // 标签页图标
  tabsIcon: boolean
  // 页脚
  footer: boolean
}

/** UserState */
export interface UserState {
  token: string
  userInfo: { name: string }
}

/** tabsMenuProps */
export interface TabsMenuProps {
  icon: string
  title: string
  path: string
  name: string
  close: boolean
  isKeepAlive: boolean
}

/** TabsState */
export interface TabsState {
  tabsMenuList: TabsMenuProps[]
}

/** AuthState */
export interface AuthState {
  routeName: string
  authButtonList: {
    [key: string]: string[]
  }
  authMenuList: Menu.MenuOptions[]
}

/** KeepAliveState */
export interface KeepAliveState {
  keepAliveName: string[]
}
