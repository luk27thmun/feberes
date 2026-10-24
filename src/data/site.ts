/**
 * 公司基础信息 —— 全站唯一来源。
 * 修改联系方式、公司名、地址只需改这里。
 */

export interface Localized {
  zh: string;
  en: string;
}

/** 示范图片（后续替换为 assets 中的实拍图） */
export const IMG = {
  hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=wide%20angle%20exterior%20view%20of%20a%20modern%20large%20polyester%20filament%20yarn%20factory%20clean%20industrial%20building%20with%20glass%20facade%20blue%20sky%20professional%20corporate%20photography%20high%20detail&image_size=landscape_16_9',
  factory: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20chemical%20fiber%20manufacturing%20plant%20exterior%20industrial%20park%20clean%20white%20and%20blue%20factory%20buildings%20logistics%20trucks%20loading%20sunny%20day%20professional%20photography&image_size=landscape_4_3',
  lineDTY: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=interior%20of%20modern%20polyester%20DTY%20texturing%20workshop%20rows%20of%20automated%20draw%20texturing%20machines%20with%20yarn%20bobbins%20bright%20clean%20industrial%20lighting%20professional%20industrial%20photography&image_size=landscape_4_3',
  lineWinding: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high%20speed%20automatic%20winding%20machine%20producing%20polyester%20filament%20yarn%20cones%20bright%20modern%20factory%20interior%20industrial%20photography&image_size=landscape_4_3',
  lab: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=quality%20control%20laboratory%20in%20a%20chemical%20fiber%20factory%20technician%20testing%20yarn%20tenacity%20with%20precision%20instruments%20clean%20bright%20lab%20professional%20photography&image_size=landscape_4_3',
  warehouse: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=large%20modern%20warehouse%20with%20stacked%20pallets%20of%20polyester%20yarn%20cones%20packed%20in%20cartons%20ready%20for%20export%20shipment%20clean%20bright%20facility&image_size=landscape_4_3',
  pDTY: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20white%20polyester%20DTY%20textured%20yarn%20cones%20several%20yarn%20packages%20on%20plain%20white%20background%20studio%20product%20photography%20high%20detail&image_size=square',
  pFDY: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20glossy%20polyester%20FDY%20filament%20yarn%20cones%20wound%20on%20tubes%20plain%20white%20background%20studio%20lighting&image_size=square',
  pPOY: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20large%20polyester%20POY%20partially%20oriented%20yarn%20bobbins%20on%20cardboard%20tubes%20clean%20white%20background%20studio%20product%20shot&image_size=square',
  pThread: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20colorful%20polyester%20sewing%20thread%20spools%20neatly%20arranged%20in%20rows%20white%20background%20studio%20product%20photography&image_size=square',
  pNylon: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20white%20nylon%20DTY%20yarn%20packages%20on%20tubes%20clean%20white%20background%20studio%20lighting&image_size=square',
  pSpandex: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20spandex%20covered%20yarn%20cones%20elastic%20covered%20yarn%20packages%20on%20white%20background%20studio%20product%20photography&image_size=square',
  pRecycled: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20recycled%20polyester%20yarn%20cones%20with%20green%20eco%20label%20white%20background%20studio%20product%20photography&image_size=square',
  pTwisted: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=product%20photo%20of%20polyester%20intermingled%20twisted%20yarn%20cones%20in%20a%20row%20white%20background%20studio%20lighting&image_size=square'
} as const;

export const SITE = {
  name: { zh: '河北菲泊丝化纤材料有限公司', en: 'Hebei Feberes Chemical Fiber Materials Co., Ltd.' },
  shortName: { zh: '河北菲泊丝', en: 'Feberes' },
  brandMark: 'FBR',
  tagline: {
    zh: '化纤长丝与纱线一站式出口制造商',
    en: 'One-stop Manufacturer & Exporter of Chemical Fiber Yarn'
  },
  email: 'glfzs@outlook.com',
  /** 页面展示用电话 */
  phone: '+86 183 3004 8469',
  /** 拨号链接用（去掉空格与加号） */
  phoneRaw: '8618330048469',
  /** WhatsApp 账号（展示用） */
  whatsapp: '@luk27thmun',
  /** WhatsApp 直聊链接用号码 */
  whatsappRaw: '8618330048469',
  address: { zh: '中国 · 河北省', en: 'Hebei Province, China' },
  addressNote: { zh: '详细地址待补充', en: 'Detailed address to be completed' },
  hours: { zh: '周一至周六 08:30 – 18:00（GMT+8）', en: 'Mon – Sat, 08:30 – 18:00 (GMT+8)' },
  established: 2012
} as const;

/** 周边业务数据（示范数值，请替换为真实数据） */
export const STATS: { value: string; label: Localized }[] = [
  { value: '20,000㎡', label: { zh: '现代化生产基地', en: 'Modern production base' } },
  { value: '30,000T', label: { zh: '年产能', en: 'Annual capacity' } },
  { value: '200+', label: { zh: '员工人数', en: 'Employees' } },
  { value: '30+', label: { zh: '出口国家与地区', en: 'Export countries' } }
];
