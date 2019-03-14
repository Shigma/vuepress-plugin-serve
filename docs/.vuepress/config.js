const name = 'vuepress-plugin-serve'

const guideSidebar = () => [
  '',
  'config.html',
]

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  theme: 'contrib',
  
  locales: {
    '/en/': {
      lang: 'en-US',
      title: name,
      description: 'A VuePress plugin which serves generated files',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: name,
      description: '一个在本地构建生产服务器的 VuePress 插件',
    },
  },
  
  themeConfig: {
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        contrib: {
          ecosystem: 'Ecosystem',
          plugins: 'Plugins',
          themes: 'Themes',
          others: 'Others',
        },
        sidebar: {
          '/en/': guideSidebar(),
        },
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        contrib: {
          ecosystem: '生态系统',
          plugins: '插件',
          themes: '主题',
          others: '其他',
        },
        sidebar: {
          '/zh/': guideSidebar(),
        },
      },
    },
  },

  evergreen: !isProd,
})
