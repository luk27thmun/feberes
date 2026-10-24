import { IMG, type Localized } from './site';

/**
 * 示范产品目录（示例数据，请替换为真实产品与参数）。
 * 新增产品：复制一段对象，改 slug / category / 文案即可，页面会自动生成。
 */

export interface SpecRow {
  k: Localized;
  v: Localized;
}

export interface Product {
  slug: string;
  category: string;
  image: string;
  featured?: boolean;
  name: Localized;
  subtitle: Localized;
  desc: Localized;
  deniers: string;
  specs: SpecRow[];
  applications: { zh: string[]; en: string[] };
}

export const CATEGORIES: { id: string; label: Localized }[] = [
  { id: 'all', label: { zh: '全部产品', en: 'All Products' } },
  { id: 'polyester', label: { zh: '涤纶长丝', en: 'Polyester Filament' } },
  { id: 'thread', label: { zh: '缝纫线', en: 'Sewing Thread' } },
  { id: 'nylon', label: { zh: '锦纶纱线', en: 'Nylon Yarn' } },
  { id: 'spandex', label: { zh: '氨纶包覆纱', en: 'Spandex Covered Yarn' } },
  { id: 'recycled', label: { zh: '再生环保纱线', en: 'Recycled Yarn' } }
];

export const PRODUCTS: Product[] = [
  {
    slug: 'polyester-dty-yarn',
    category: 'polyester',
    image: IMG.pDTY,
    featured: true,
    name: { zh: '涤纶低弹丝 DTY', en: 'Polyester DTY Yarn' },
    subtitle: {
      zh: 'Draw Textured Yarn · 半消光 / 全消光 / 有光',
      en: 'Draw Textured Yarn · Semi-dull / Full-dull / Bright'
    },
    desc: {
      zh: '采用高速纺丝与加弹工艺生产的涤纶低弹丝，条干均匀、蓬松度高、染色性能稳定，适合高速织造与针织。',
      en: 'Produced by high-speed spinning and texturing, with even yarn evenness, high bulk and stable dyeing performance for high-speed weaving and knitting.'
    },
    deniers: '50D/72F · 75D/36F · 100D/36F · 150D/48F · 300D/96F',
    specs: [
      { k: { zh: '规格范围', en: 'Denier range' }, v: { zh: '50D – 600D', en: '50D – 600D' } },
      { k: { zh: '截面形状', en: 'Cross section' }, v: { zh: '圆形 / 三叶形', en: 'Round / Trilobal' } },
      { k: { zh: '光泽', en: 'Luster' }, v: { zh: '半消光 / 全消光 / 有光', en: 'Semi-dull / Full-dull / Bright' } },
      { k: { zh: '断裂强度', en: 'Tenacity' }, v: { zh: '≥ 3.2 cN/dtex', en: '≥ 3.2 cN/dtex' } },
      { k: { zh: '断裂伸长率', en: 'Elongation' }, v: { zh: '18% – 30%', en: '18% – 30%' } },
      { k: { zh: '颜色', en: 'Color' }, v: { zh: '本白 / 黑色 / 可定制色', en: 'Raw white / Black / Customized' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '纸管卷装，约 5-8kg/卷，编织袋或纸箱', en: 'Paper cone, approx. 5-8kg/cone, woven bag or carton' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '1 吨（可按柜混装）', en: '1 ton (mixed container accepted)' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 15 – 25 天', en: '15 – 25 days after order confirmation' } }
    ],
    applications: {
      zh: ['服装面料', '家纺床品', '装饰布', '织带', '弹力织物', '无缝内衣'],
      en: ['Apparel fabric', 'Home textiles', 'Upholstery', 'Webbing', 'Stretch fabric', 'Seamless underwear']
    }
  },
  {
    slug: 'polyester-fdy-yarn',
    category: 'polyester',
    image: IMG.pFDY,
    featured: true,
    name: { zh: '涤纶全拉伸丝 FDY', en: 'Polyester FDY Yarn' },
    subtitle: { zh: 'Fully Drawn Yarn · 高强低伸', en: 'Fully Drawn Yarn · High tenacity' },
    desc: {
      zh: '一步法全拉伸工艺，纤维取向度高、强度高、沸水收缩率低，适合高速织造及后续加捻、加弹加工。',
      en: 'One-step fully drawn process with high orientation, high tenacity and low boiling-water shrinkage, suitable for high-speed weaving and further twisting or texturing.'
    },
    deniers: '50D/24F · 68D/24F · 100D/36F · 150D/36F · 300D/72F',
    specs: [
      { k: { zh: '规格范围', en: 'Denier range' }, v: { zh: '30D – 600D', en: '30D – 600D' } },
      { k: { zh: '光泽', en: 'Luster' }, v: { zh: '半消光 / 有光 / 三叶有光', en: 'Semi-dull / Bright / Trilobal bright' } },
      { k: { zh: '断裂强度', en: 'Tenacity' }, v: { zh: '≥ 3.8 cN/dtex', en: '≥ 3.8 cN/dtex' } },
      { k: { zh: '沸水收缩率', en: 'Boiling water shrinkage' }, v: { zh: '≤ 8%', en: '≤ 8%' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '纸管卷装，约 6-10kg/卷', en: 'Paper cone, approx. 6-10kg/cone' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '1 吨', en: '1 ton' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 15 – 25 天', en: '15 – 25 days after order confirmation' } }
    ],
    applications: {
      zh: ['梭织面料', '拉链带', '商标带', '窗帘', '箱包布', '工业用布'],
      en: ['Woven fabric', 'Zipper tape', 'Label tape', 'Curtain', 'Luggage fabric', 'Industrial fabric']
    }
  },
  {
    slug: 'polyester-poy-yarn',
    category: 'polyester',
    image: IMG.pPOY,
    name: { zh: '涤纶预取向丝 POY', en: 'Polyester POY Yarn' },
    subtitle: { zh: 'Partially Oriented Yarn · 加弹专用', en: 'Partially Oriented Yarn · For texturing' },
    desc: {
      zh: '为下游加弹工序设计的预取向丝，含油均匀、可纺性好、断头率低，适合配套 DTY 加弹机使用。',
      en: 'Designed for downstream texturing, with uniform oil pickup, good spinnability and low breakage rate, ideal for DTY texturing machines.'
    },
    deniers: '118D/36F · 150D/48F · 250D/48F · 300D/96F',
    specs: [
      { k: { zh: '规格范围', en: 'Denier range' }, v: { zh: '85D – 500D', en: '85D – 500D' } },
      { k: { zh: '断面形状', en: 'Cross section' }, v: { zh: '圆形', en: 'Round' } },
      { k: { zh: '断裂强度', en: 'Tenacity' }, v: { zh: '≥ 2.3 cN/dtex', en: '≥ 2.3 cN/dtex' } },
      { k: { zh: '断裂伸长率', en: 'Elongation' }, v: { zh: '110% – 135%', en: '110% – 135%' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '纸管卷装，约 8-12kg/卷', en: 'Paper cone, approx. 8-12kg/cone' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '2 吨', en: '2 tons' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 15 – 25 天', en: '15 – 25 days after order confirmation' } }
    ],
    applications: {
      zh: ['DTY 加弹原料', '复合丝', '差别化长丝'],
      en: ['DTY texturing raw material', 'Composite yarn', 'Differential filament']
    }
  },
  {
    slug: 'polyester-sewing-thread',
    category: 'thread',
    image: IMG.pThread,
    featured: true,
    name: { zh: '涤纶缝纫线 / 纺织线', en: 'Polyester Sewing Thread' },
    subtitle: { zh: '高强低收缩 · 多色可选', en: 'High tenacity · Multi-color' },
    desc: {
      zh: '采用高强涤纶短纤纱加捻而成，强力高、条干均匀、耐高温熨烫，适用于服装、家纺、箱包及工业缝制。',
      en: 'Twisted from high-tenacity polyester staple yarn, with high strength, even evenness and heat resistance, widely used in garments, home textiles, bags and industrial sewing.'
    },
    deniers: '20S/2 · 20S/3 · 40S/2 · 50S/2 · 60S/3',
    specs: [
      { k: { zh: '规格', en: 'Counts' }, v: { zh: '20S/2 – 60S/3 常规；可按样定纺', en: '20S/2 – 60S/3 standard; custom counts available' } },
      { k: { zh: '原料', en: 'Raw material' }, v: { zh: '100% 涤纶短纤（大化 / 中化）', en: '100% polyester staple (virgin / recycled)' } },
      { k: { zh: '断裂强力', en: 'Breaking strength' }, v: { zh: '≥ 1100 cN（40S/2 参考）', en: '≥ 1100 cN (ref. 40S/2)' } },
      { k: { zh: '捻度', en: 'Twist' }, v: { zh: '按客户要求 Z / S 捻', en: 'Z / S twist as required' } },
      { k: { zh: '颜色', en: 'Color' }, v: { zh: '本白 / 黑色 / 200+ 色卡可选', en: 'Raw white / Black / 200+ color card' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '1kg/锥 或 5000m/卷，纸箱装', en: '1kg/cone or 5000m/spool, in carton' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '500 kg / 色', en: '500 kg per color' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 20 – 30 天', en: '20 – 30 days after order confirmation' } }
    ],
    applications: {
      zh: ['服装缝制', '家纺用品', '箱包手袋', '鞋帽制品', '汽车内饰'],
      en: ['Garment sewing', 'Home textiles', 'Bags & luggage', 'Shoes & caps', 'Automotive interior']
    }
  },
  {
    slug: 'nylon-dty-yarn',
    category: 'nylon',
    image: IMG.pNylon,
    name: { zh: '锦纶弹力丝 Nylon DTY', en: 'Nylon DTY Yarn' },
    subtitle: { zh: 'PA6 / PA66 · 高回弹', en: 'PA6 / PA66 · High elasticity' },
    desc: {
      zh: '锦纶加弹丝手感柔软、回弹性好、耐磨性优异，适合高档针织、无缝内衣及弹力面料。',
      en: 'Nylon textured yarn with soft handle, excellent elasticity and abrasion resistance, ideal for premium knitwear, seamless underwear and stretch fabrics.'
    },
    deniers: '70D/24F · 100D/36F · 140D/48F · 200D/68F',
    specs: [
      { k: { zh: '原料', en: 'Raw material' }, v: { zh: 'PA6 / PA66 切片纺', en: 'PA6 / PA66 chip spun' } },
      { k: { zh: '规格范围', en: 'Denier range' }, v: { zh: '30D – 300D', en: '30D – 300D' } },
      { k: { zh: '断裂强度', en: 'Tenacity' }, v: { zh: '≥ 3.4 cN/dtex', en: '≥ 3.4 cN/dtex' } },
      { k: { zh: '染色', en: 'Dyeing' }, v: { zh: '本白 / 黑色 / 色纺', en: 'Raw white / Black / Dope dyed' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '纸管卷装，约 1-5kg/卷', en: 'Paper cone, approx. 1-5kg/cone' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '500 kg', en: '500 kg' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 20 – 30 天', en: '20 – 30 days after order confirmation' } }
    ],
    applications: {
      zh: ['无缝内衣', '瑜伽服', '袜类', '泳装', '蕾丝花边', '运动面料'],
      en: ['Seamless underwear', 'Yoga wear', 'Socks', 'Swimwear', 'Lace', 'Sportswear']
    }
  },
  {
    slug: 'spandex-covered-yarn',
    category: 'spandex',
    image: IMG.pSpandex,
    name: { zh: '氨纶包覆纱', en: 'Spandex Covered Yarn' },
    subtitle: { zh: '空包 / 机包 · 高弹回复', en: 'Air covered / Mechanical covered' },
    desc: {
      zh: '以氨纶为芯、涤纶或锦纶为皮包覆而成，弹性回复率高、手感柔软，是弹力面料的核心原料。',
      en: 'Spandex core covered with polyester or nylon, providing high elastic recovery and soft handle — a core material for stretch fabrics.'
    },
    deniers: '2075 · 3075 · 4075 · 2070 · 3070',
    specs: [
      { k: { zh: '包覆方式', en: 'Covering type' }, v: { zh: '空气包覆（空包）/ 机械包覆（机包）', en: 'Air covered / Mechanical covered' } },
      { k: { zh: '氨纶纤度', en: 'Spandex denier' }, v: { zh: '20D / 30D / 40D / 70D', en: '20D / 30D / 40D / 70D' } },
      { k: { zh: '外包纱', en: 'Outer yarn' }, v: { zh: '涤纶 DTY / 锦纶 DTY', en: 'Polyester DTY / Nylon DTY' } },
      { k: { zh: '弹性回复率', en: 'Elastic recovery' }, v: { zh: '≥ 92%', en: '≥ 92%' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '纸管卷装，约 1-4kg/卷', en: 'Paper cone, approx. 1-4kg/cone' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '500 kg', en: '500 kg' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 20 – 30 天', en: '20 – 30 days after order confirmation' } }
    ],
    applications: {
      zh: ['牛仔弹力面料', '运动服', '医用绷带', '内衣松紧带', '针织罗纹'],
      en: ['Stretch denim', 'Sportswear', 'Medical bandage', 'Underwear elastic', 'Knitted rib']
    }
  },
  {
    slug: 'recycled-polyester-yarn',
    category: 'recycled',
    image: IMG.pRecycled,
    featured: true,
    name: { zh: '再生涤纶长丝', en: 'Recycled Polyester Yarn' },
    subtitle: { zh: 'GRS 认证 · 瓶片再生', en: 'GRS certified · Bottle-flake recycled' },
    desc: {
      zh: '以回收 PET 瓶片为原料生产的长丝，可提供 GRS 认证与 TC 交易证书，助力品牌达成可持续目标。',
      en: 'Filament produced from recycled PET bottle flakes, available with GRS certification and TC transaction certificates to support brand sustainability goals.'
    },
    deniers: '75D/36F · 100D/36F · 150D/48F · 300D/96F',
    specs: [
      { k: { zh: '再生含量', en: 'Recycled content' }, v: { zh: '≥ 50% / 100%（可选）', en: '≥ 50% / 100% (optional)' } },
      { k: { zh: '认证', en: 'Certification' }, v: { zh: 'GRS · 可提供 TC 证书', en: 'GRS · TC certificate available' } },
      { k: { zh: '断裂强度', en: 'Tenacity' }, v: { zh: '≥ 3.0 cN/dtex', en: '≥ 3.0 cN/dtex' } },
      { k: { zh: '颜色', en: 'Color' }, v: { zh: '本白 / 黑色 / 色纺', en: 'Raw white / Black / Dope dyed' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '纸管卷装，约 5-8kg/卷', en: 'Paper cone, approx. 5-8kg/cone' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '1 吨', en: '1 ton' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 20 – 30 天', en: '20 – 30 days after order confirmation' } }
    ],
    applications: {
      zh: ['环保服装面料', '家纺', '织带', '品牌可持续系列'],
      en: ['Eco apparel fabric', 'Home textiles', 'Webbing', 'Brand sustainability lines']
    }
  },
  {
    slug: 'intermingled-twisted-yarn',
    category: 'polyester',
    image: IMG.pTwisted,
    name: { zh: '网络丝 / 加捻丝', en: 'Intermingled & Twisted Yarn' },
    subtitle: { zh: '免上浆 · 提高织造效率', en: 'Sizing-free · Higher weaving efficiency' },
    desc: {
      zh: '采用网络喷嘴或加捻工艺处理，抱合力好、织造过程中不易起毛断头，可减少上浆工序。',
      en: 'Processed by intermingling nozzle or twisting, with good cohesion and fewer fluffs or breaks during weaving, reducing sizing processes.'
    },
    deniers: '75D/36F · 150D/48F · 300D/96F · 600D/192F',
    specs: [
      { k: { zh: '加工方式', en: 'Process' }, v: { zh: '网络 / 加捻（可复合）', en: 'Intermingled / Twisted (combined available)' } },
      { k: { zh: '网络度', en: 'Intermingling degree' }, v: { zh: '按客户要求 60 – 120 个/米', en: '60 – 120 knots/m as required' } },
      { k: { zh: '捻度', en: 'Twist' }, v: { zh: '80 – 1200 T/M', en: '80 – 1200 T/M' } },
      { k: { zh: '包装', en: 'Packing' }, v: { zh: '纸管卷装，约 5-8kg/卷', en: 'Paper cone, approx. 5-8kg/cone' } },
      { k: { zh: '起订量', en: 'MOQ' }, v: { zh: '1 吨', en: '1 ton' } },
      { k: { zh: '交货期', en: 'Lead time' }, v: { zh: '订单确认后 18 – 28 天', en: '18 – 28 days after order confirmation' } }
    ],
    applications: {
      zh: ['喷水织造', '喷气织造', '箱包布', '产业用布'],
      en: ['Water-jet weaving', 'Air-jet weaving', 'Luggage fabric', 'Technical textiles']
    }
  }
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const featuredProducts = () => PRODUCTS.filter((p) => p.featured);
export const categoryLabel = (id: string, lang: 'zh' | 'en') =>
  CATEGORIES.find((c) => c.id === id)?.label[lang] ?? id;
