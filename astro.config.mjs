// @ts-check
import { defineConfig } from 'astro/config';

// 部署说明：
//   - 本站绑定裸域 feberes.com（www.feberes.com 无有效证书，不要使用）
//     → site 用裸域，base 保持默认 '/'
//   - 所有绝对 URL（canonical / hreflang / og:url）均由 site 派生
export default defineConfig({
  site: 'https://feberes.com',
  trailingSlash: 'always',
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
