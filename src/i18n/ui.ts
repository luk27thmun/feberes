export const languages = { en: 'English', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const locales: Lang[] = ['en', 'zh'];
export const defaultLang: Lang = 'en';

const en = {
  'nav.home': 'Home',
  'nav.products': 'Products',
  'nav.factory': 'Our Factory',
  'nav.contact': 'Contact',
  'nav.quote': 'Get a Quote',

  'common.viewDetail': 'View details',
  'common.readMore': 'Learn more',
  'common.requestQuote': 'Request a quote',
  'common.viewAllProducts': 'View all products',
  'common.backToProducts': 'Back to products',
  'common.relatedProducts': 'Related products',
  'common.products': 'Products',
  'common.specs': 'Specifications',
  'common.applications': 'Applications',
  'common.category': 'Category',
  'common.deniers': 'Main counts / deniers',
  'common.inquiryTitle': 'Interested in this product?',
  'common.inquiryText': 'Send us your target specification, quantity and destination port — we will reply with a quotation within one working day.',
  'common.talkWhatsapp': 'Chat on WhatsApp',
  'common.sendEmail': 'Send an email',
  'common.language': 'Language',
  'common.demoNotice': 'Demo site — contents are sample data to be replaced.',
  'common.loading': 'Loading…',
  'common.empty': 'No products in this category yet.',
  'common.filter': 'Filter by category',

  'footer.company': 'Company',
  'footer.products': 'Products',
  'footer.contact': 'Contact',
  'footer.about': 'About Us',
  'footer.factory': 'Our Factory',
  'footer.quote': 'Request a Quote',
  'footer.rights': 'All rights reserved.',
  'footer.address': 'Address',
  'footer.hours': 'Working hours',
  'footer.email': 'Email',
  'footer.phone': 'Phone',
  'footer.whatsapp': 'WhatsApp',

  'contact.email': 'Email',
  'contact.phone': 'Phone / Tel',
  'contact.whatsapp': 'WhatsApp',
  'contact.address': 'Address',
  'contact.hours': 'Working hours',

  'form.title': 'Send an inquiry',
  'form.name': 'Your name',
  'form.namePh': 'e.g. John Smith',
  'form.company': 'Company',
  'form.companyPh': 'Your company name',
  'form.email': 'Email',
  'form.emailPh': 'you@company.com',
  'form.phone': 'Phone / WhatsApp',
  'form.phonePh': '+1 555 000 0000',
  'form.country': 'Country / Region',
  'form.countryPh': 'e.g. United States',
  'form.product': 'Product of interest',
  'form.productPh': 'e.g. Polyester DTY Yarn 150D/48F',
  'form.qty': 'Estimated quantity',
  'form.qtyPh': 'e.g. 5 tons / 1 x 20GP',
  'form.message': 'Message',
  'form.messagePh': 'Tell us your target specification, quantity and destination port.',
  'form.submit': 'Send inquiry',
  'form.required': 'required',
  'form.note': 'The form opens your email client with the content pre-filled. Replace it with Formspree or your own backend later.'
};

const zh: Record<keyof typeof en, string> = {
  'nav.home': '首页',
  'nav.products': '产品中心',
  'nav.factory': '工厂实力',
  'nav.contact': '联系我们',
  'nav.quote': '获取报价',

  'common.viewDetail': '查看详情',
  'common.readMore': '了解更多',
  'common.requestQuote': '立即询价',
  'common.viewAllProducts': '查看全部产品',
  'common.backToProducts': '返回产品中心',
  'common.relatedProducts': '相关产品',
  'common.products': '产品',
  'common.specs': '规格参数',
  'common.applications': '应用领域',
  'common.category': '产品分类',
  'common.deniers': '主要规格 / 旦数',
  'common.inquiryTitle': '对该产品感兴趣？',
  'common.inquiryText': '请告知您的目标规格、数量与目的港，我们将在一个工作日内回复报价。',
  'common.talkWhatsapp': 'WhatsApp 咨询',
  'common.sendEmail': '发送邮件',
  'common.language': '语言',
  'common.demoNotice': '示范站点 — 内容为示例数据，待替换为真实资料。',
  'common.loading': '加载中…',
  'common.empty': '该分类下暂无产品。',
  'common.filter': '按分类筛选',

  'footer.company': '公司',
  'footer.products': '产品',
  'footer.contact': '联系方式',
  'footer.about': '关于我们',
  'footer.factory': '工厂实力',
  'footer.quote': '在线询价',
  'footer.rights': '版权所有。',
  'footer.address': '公司地址',
  'footer.hours': '工作时间',
  'footer.email': '邮箱',
  'footer.phone': '电话',
  'footer.whatsapp': 'WhatsApp',

  'contact.email': '邮箱',
  'contact.phone': '电话',
  'contact.whatsapp': 'WhatsApp',
  'contact.address': '公司地址',
  'contact.hours': '工作时间',

  'form.title': '发送询盘',
  'form.name': '您的姓名',
  'form.namePh': '例如：张先生',
  'form.company': '公司名称',
  'form.companyPh': '请输入公司名称',
  'form.email': '邮箱',
  'form.emailPh': 'you@company.com',
  'form.phone': '电话 / WhatsApp',
  'form.phonePh': '+86 138 0000 0000',
  'form.country': '国家 / 地区',
  'form.countryPh': '例如：United States',
  'form.product': '意向产品',
  'form.productPh': '例如：涤纶低弹丝 DTY 150D/48F',
  'form.qty': '预计数量',
  'form.qtyPh': '例如：5 吨 / 1 个 20GP',
  'form.message': '留言内容',
  'form.messagePh': '请填写目标规格、数量与目的港等信息。',
  'form.submit': '提交询盘',
  'form.required': '必填',
  'form.note': '表单会调起邮件客户端并预填内容；后续可替换为 Formspree 或自有后端。'
};

export const ui = { en, zh };

export type UIKey = keyof typeof en;

/** 获取当前语言对应的翻译函数 */
export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** 生成带语言前缀的站内路径 */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}`;
}

/** 切换到另一种语言时，映射同一页面 */
export function switchLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}

export const localeNames: Record<Lang, string> = { en: 'EN', zh: '中文' };
