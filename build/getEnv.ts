import path from 'path'

// 是否开发环境
export function isDevMode(mode: string): boolean {
  return mode === 'development'
}

// 是否生产环境
export function isProdMode(mode: string): boolean {
  return mode === 'production'
}

// 是否生成包预览
export function isReportMode(): boolean {
  return process.env.VITE_REPORT === 'true'
}

// 读取所有环境变量 转换为正确的类型
export function wrapperEnv(envConfig: Recordable): ViteEnv {
  const result: any = {}

  for (const envName of Object.keys(envConfig)) {
    let envValue = envConfig[envName]
    envValue = envValue === 'true' ? true : envValue === 'false' ? false : envValue

    if (envName === 'VITE_PORT') {
      envValue = Number(envValue)
    }

    if (envName === 'VITE_PROXY') {
      try {
        envValue = JSON.parse(envValue)
      } catch (error) {}
    }

    result[envName] = envValue
  }

  return result
}

// 获取根目录
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir)
}
