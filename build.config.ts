import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  entries: [
    './src/module',
    { input: './src/kit/registerTailwindPath', outDir: './dist/kit/' },
  ],
  externals: [
    '@nuxt/kit',
    '@nuxt/schema',
    '@owdproject/core',
    '@owdproject/nuxt-module-fs',
    'vue3-selecto',
    '@nuxt/ui',
    'vue',
    'nuxt',
    'nuxt/app',
  ],
})
