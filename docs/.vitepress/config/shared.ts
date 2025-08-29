import { defineConfig } from "vitepress";
import { search as zhSearch } from "./zh";

export const shared = defineConfig({
  head: [
    ["link", {
      rel: "icon",
      type: "image/png",
      href: "https://oss.xiaohe.ink/profile/avatar-alpha.png"
    }]
  ],
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  themeConfig: {
    logo: "https://oss.xiaohe.ink/profile/avatar-alpha.png",
    search: {
      provider: "local",
      options: {
        locales: {
          ...zhSearch
        }
      }
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/xiaohe0601" }
    ],
    externalLinkIcon: true
  }
});