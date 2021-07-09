---
title: 介绍
order: 1
toc: menu
nav:
  title: 指南
  path: /guide
  order: 0
---

## 什么是 duxravel？

duxravel，名称由 dux 与 laravel 组合而来，是一款以 laravel 框架为基础与 dux 开发思想为一体的后台管理系统。

## 特征

- 📦 开箱即用，将注意力集中在组件开发和文档编写上
- 📋 一体化封装的 UI 组件，让后端开发远离前端的复杂
- 📱 多终端使用支持，让使用者不必带着电脑跑
- 🏷 命令行生成基础开发模块，减少复制粘贴操作
- 🎨 文件化式菜单权限，减少数据化式的操作冗余
- 📡 内部 hook 式低耦开发，即插即用，应用即插件

## 快速上手

### 环境准备

首先得准备好 php + composer + redis + mysql 使用环境。

并确保 php 版本是 7.4 或以上，mysql 版本是 5.7 或以上，composer 2.0 或以上。

```shell
$ php -v
PHP 7.4.18 (cli)

$ mysql -v
Server version: 5.7.17

$ composer -v
Composer version 2.1.3
```

### 系统安装

请建立站点目录并运行 composer 命令进行系统安装

```shell
// 创建站点目录
$ mkdir library && cd library

// 安装项目
$ composer create-project duxphp/ravelcms

// 启动web服务访问安装向导
http://localhost
```

如果发现安装速度慢请使用国内加速，仍选其一执行：

```
$ composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

$ composer config -g repos.packagist composer https://php.cnpkg.org

$ composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

您也可以使用各类集成环境进行安装，windows 环境下推荐 [phpstudy](https://www.xp.cn/)，linux 环境下推荐 [宝塔面板](https://www.bt.cn/)，mac 环境下推荐 [Valet](https://learnku.com/docs/laravel/8.x/valet/9358)，以上推荐均为可免费使用的环境，以上推荐环境搭建请[查看教程](/guide/env)

### 后台管理

安装完毕后请进入后台进行基本功能管理，系统安装后会在 `storage` 目录下生成 `installed` 文件用于检测是否安装，可以删除该文件和数据库重新安装。

```http request
http://localhost/admin
```

### 系统升级

使用以下命令进行系统升级：

```shell
$ composer update
```

执行完毕后请执行以下命令防止数据表变动导致的问题：

```shell
$ php artisan migrate
```
