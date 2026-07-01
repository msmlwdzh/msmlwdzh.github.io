---
title: 用 Astro 搭建极简博客
date: 2026-05-25
description: 一步步用 Astro + Tailwind CSS v4 搭建一个 Framer 风格的深色主题博客。
tags: [astro, tutorial, web]
---

作为一个前端爱好者，我一直想要一个极简、快速、内容至上的个人博客。Astro 完美地满足了这些需求。

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

我参考了 Framer Design System 的设计语言：

- 深色模式优先，背景 `#0A0A0A`
- 冰蓝色点缀 `#BBEEFF`
- 暖色辅助 `#FF6B6B`
- 玻璃拟态卡片效果
- 弹性动效曲线 `cubic-bezier(0.44, 0, 0.56, 1)`

简洁不代表简陋——每一个细节都值得推敲。
