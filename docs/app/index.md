---
title: 应用
order: 1
toc: menu
nav:
  title: 应用
  path: /app
  order: 1
---

## 基础架构

应用开发使用 hmvc 结构，应用放置在 `modules` 目录下，每个子目录即为一个单独的应用，每个应用具有 mvc 的结构方式，请先通过指南的[基础开发](/guide/base)学习应用的基本结构。

系统内置封装了 2 个应用作为基础功能的开发依赖，也是系统层级中的 `核心层` 与 `中心层`，开发者需要开发的为 `应用层` 功能：

<img src="https://duxphp.github.io/duxravel-doc/images/structure.png" width="600" />

- `核心应用` duxravel 的基础应用，主要包含了除框架外最底层的应用功能，大部分功能实现均依赖该应用。
