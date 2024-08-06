import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft QQBot",
  description: "一款连接 Minecraft 服务器的 QQ 机器人，功能强大，使用简单。",
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/logo.png',
      alt: 'Minecraft QQBot',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/文档/快速开始' }
    ],
    search: {
      provider: 'local',
    },
    sidebar: { ...sidebar } as any,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Minecraft-QQBot/BotServer' }
    ]
  }
})
