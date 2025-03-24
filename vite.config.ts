import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/getEnv'
import { createProxy } from './build/proxy'
import { createVitePlugins } from './build/plugins'
import pkg from './package.json'
import dayjs from 'dayjs'

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd() // 文件路径 D:/workspace/vue-element-plus-admin
  const env = loadEnv(mode, root) // 所有环境变量
  const viteEnv = wrapperEnv(env) // 获取处理后的环境变量

  return {
    base: viteEnv.VITE_PUBLIC_PATH, // 公共基础路径
    root,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/var.scss";`
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT, // 端口号
      open: viteEnv.VITE_OPEN, // 编译完是否自动打开浏览器
      cors: true, // 跨域
      proxy: createProxy(viteEnv.VITE_PROXY) // 代理配置
    },
    plugins: createVitePlugins(viteEnv), // 插件
    esbuild: {
      pure: viteEnv.VITE_BUILD_DELETE_CONSOLE ? ['console.log', 'debugger'] : [] // 打包是否移除 console debugger
    },
    build: {
      outDir: 'dist',
      minify: 'esbuild',
      sourcemap: false,
      // 禁用 gzip 压缩大小报告，可略微减少打包时间
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
