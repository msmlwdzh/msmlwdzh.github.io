---
title: 用 Astro 搭建咖啡 × 太空博客
date: 2026-05-25
description: 一步步用 Astro + Tailwind CSS v4 搭建一个明亮咖啡色调、带太空意象的个人博客。
tags: [astro, tutorial, web]
---

作为一个前端爱好者，我一直想要一个极简、快速、内容至上的个人博客。Astro 完美地满足了这些需求——而这一次，我想让它带上一杯咖啡的温度和一点星空的想象。

## 为什么选择 Astro？

- **零 JS 默认输出** — 页面构建为纯静态 HTML，加载极快
- **内容驱动** — Markdown 文件即文章，Git 版本控制
- **框架灵活** — 可以混用 React/Vue/Svelte，也可以纯 Astro 组件

## 搭建步骤

1. 安装 Astro 和 Tailwind
2. 在 `astro.config.mjs` 中注册 `@tailwindcss/vite` 插件
3. 在 CSS 中使用 `@import "tailwindcss"` 引入
4. 在 `@theme { }` 中定义设计令牌

无需 `tailwind.config.js`，一切在 CSS 中完成。

## 设计选择

我没有沿用千篇一律的暗色 AI 风，而是做了一套"咖啡 × 太空"的明亮主题：

- 明亮咖啡底色 `#F4ECDC`（拿铁奶白）
- 经典咖啡棕点缀 `#6F4E37`
- 宇宙靛蓝对位 `#4A3B7A`，星光金高光 `#C9A24B`
- 标题用 Fraunces 衬线体，正文用 Space Grotesk
- 土星标点、轨道环、星辰底纹等天体意象装饰

倾斜的轨道环既是行星轨道，也像杯沿的咖啡渍——一语双关的装饰，正是这个主题的小巧思。

简洁不代表简陋——每一个细节都值得推敲。
