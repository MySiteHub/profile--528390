/**
 * 网站配置文件
 * 由 HappyShip 自动生成，请勿手动修改
 */

export const siteConfig = {
  // 网站基本信息
  name: "",
  description: "",
  domain: "",
  canonicalUrl: "https://yourgamesite.com",

  // 主题配置 - 温暖亲和
  theme: {
    id: "profile-warm",
    name: "温暖亲和",
    components: undefined
  },

  // 功能配置
  features: {
    analytics: "",
  },

  // 多语言配置
  i18n: {
    defaultLocale: 'en' as const,
    locales: ["en","zh"] as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
