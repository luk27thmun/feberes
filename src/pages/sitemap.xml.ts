import type { APIRoute } from 'astro';
import { PRODUCTS } from '../data/products';
import { locales } from '../i18n/ui';

// 参与 sitemap 的固定页面（均带结尾斜杠；根路径 / 只做语言跳转，故不收录）
const topLevelPaths = ['/', '/products/', '/factory/', '/contact/'];

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://feberes.com')).origin;

  const urls = locales.flatMap((lang) => [
    ...topLevelPaths.map((p) => `${origin}/${lang}${p}`),
    ...PRODUCTS.map((product) => `${origin}/${lang}/products/${product.slug}/`)
  ]);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    '</urlset>',
    ''
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
