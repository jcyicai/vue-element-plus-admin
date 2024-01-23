/** 菜单 */
declare namespace Menu {
  interface MenuOptions {
    // 路由访问路径
    path: string
    // 菜单名
    name: string
    // 组件
    component?: string | (() => Promise<unknown>)
    // 重定向
    redirect?: string
    // 路由元信息
    meta: MetaProps
    // 子菜单
    children?: MenuOptions[]
  }
  interface MetaProps {
    // 菜单和面包屑对应的图标
    icon: string
    // 路由标题 (用作 document.title || 菜单的名称)
    title: string
    // 是否在菜单中隐藏, 需要高亮的 path (通常用作详情页高亮父级菜单)
    activeMenu?: string
    // 路由外链时填写的访问地址
    isLink?: string
    // 是否在菜单中隐藏 (通常列表详情页需要隐藏)
    isHide: boolean
    // 菜单是否全屏
    isFull: boolean
    // 菜单是否固定在标签页中 (首页通常是固定项)
    isAffix: boolean
    // 当前路由是否缓存
    isKeepAlive: boolean
  }
}

/** 文件类型 */
declare namespace File {
  type ImageMimeType =
    | 'image/apng'
    | 'image/bmp'
    | 'image/gif'
    | 'image/jpeg'
    | 'image/pjpeg'
    | 'image/png'
    | 'image/svg+xml'
    | 'image/tiff'
    | 'image/webp'
    | 'image/x-icon'

  type ExcelMimeType = 'application/vnd.ms-excel' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}

/** Vite */
declare type Recordable<T = any> = Record<string, T>
/** Vite 环境 */
declare interface ViteEnv {
  // 本地环境
  VITE_NODE_ENV: 'development' | 'production'
  // 标题
  VITE_APP_TITLE: string
  // 端口号
  VITE_PORT: number
  // 启动时是否自动打开浏览器
  VITE_OPEN: boolean
  // 路由模式
  VITE_ROUTER_MODE: 'hash' | 'history'
  // 打包压缩类型
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'gzip,brotli' | 'none'
  // 打包后是否删除原文件
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  // 打包时是否删除 console
  VITE_BUILD_DELETE_CONSOLE: boolean
  // 公共基础路径
  VITE_PUBLIC_PATH: string
  // 接口地址
  VITE_API_URL: string
  // 代理，支持多配置  例：[["/api-easymock","https://xxx"],["/api-fastmock","https://xxx"]]
  VITE_PROXY: [string, string][]
}

/** __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string
    version: string
    dependencies: Recordable<string>
    devDependencies: Recordable<string>
  }
  lastBuildTime: string
}
