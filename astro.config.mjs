// @ts-check
import { defineConfig } from 'astro/config';

// 部署说明：
//   - 已绑定自定义域名 luk27thmun.com → site 用域名，base 保持默认 '/'
//   - 若哪天改为不用自定义域名、直接走 <user>.github.io/<repo> 访问，
//     则把 site 改成 'https://<user>.github.io' 并取消下面 base 的注释
export default defineConfig({
  site: 'https://luk27thmun.com',
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
