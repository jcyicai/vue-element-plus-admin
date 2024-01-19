/* Vite */
declare type Recordable<T = any> = Record<string, T>

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
