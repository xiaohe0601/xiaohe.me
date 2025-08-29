import type { DefaultTheme } from "vitepress";
import { defineConfig } from "vitepress";

export const zh = defineConfig({
  lang: "zh-Hans",
  title: "Xiaohe0601",
  description: "小何的个人网站",
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    footer: {
      message: "蜀ICP备20015535号-1",
      copyright: "版权所有 (c) 2025-PRESENT xiaohe0601"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    outline: {
      label: "页面导航"
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    langMenuLabel: "多语言"
  }
});

function nav(): DefaultTheme.NavItem[] {
  return [];
}

function sidebar(): DefaultTheme.Sidebar {
  return {};
}

export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  root: {
    translations: {
      button: {
        buttonText: "搜索"
      },
      modal: {
        displayDetails: "显示详细列表",
        resetButtonTitle: "清除查询条件",
        noResultsText: "未找到相关结果",
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭"
        }
      }
    }
  }
};