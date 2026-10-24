// @ts-check
import { defineConfig } from 'astro/config';

// 部署说明：
//   - 本站绑定子域名 www.luk27thmun.com（主域 luk27thmun.com 由 miory 博客占用）
//     → site 用该子域名，base 保持默认 '/'
//   - 若哪天改为不用自定义域名、直接走 <user>.github.io/<repo> 访问，
//     则把 site 改成 'https://<user>.github.io' 并取消下面 base 的注释
export default defineConfig({
  site: 'https://www.luk27thmun.com',
  // base: '/repo-name',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
