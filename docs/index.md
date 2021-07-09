---
title: DuxRavel - 基于 laravel 框架的后台管理系统
order: 10
hero:
  title: Duxravel
  desc: 基于 laravel 为快速开发而生的自定义后台管理系统
  actions:
    - text: 官方网站
      link: https://www.duxravel.com
    - text: 产品社区
      link: https://support.qq.com/products/331847
    - text: 阅读文档
      link: /guide
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 后台采用统一封装基础管理与UI组件，让基础开发者无需使用前端技术即可快速开发，同时集成了权限管理、用户、配置等功能，可开箱即开发
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 模块化开发
    desc: 基于多代的 DuxPHP 模块化开发方案，引入 laravel 服务者思想让开发模块像 App 开发一样，可以多人协作进行低耦方式的开发
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png
    title: 主流框架
    desc: 基础框架采用最流行的 PHP 框架 Laravel 同步最新版本，高度依赖 composer 组件化为后续版本升级与生态开发打造良好的基础环境
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/f093e060-726e-471c-a53e-e988ed3f560c/kj9t9sk7_w144_h144.png
    title: 简单易用的hook
    desc: 系统耦合全部通过 hook 实现，菜单、权限和模块之间互调均通过 hook 调用实现，免去在后台进行繁琐的添加菜单权限等操作，全部交给代码内接入
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b3e102cd-5dad-4046-a02a-be33241d1cc7/kj9t8oji_w144_h144.png
    title: 自定义表单
    desc: 内置自定义表单可以实现如询问、反馈等外部提交表单，同时可以实现内部管理功能如自定义列表等功能还可以集成于其他模块为它们提供服务
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png
    title: 移动端开发
    desc: 管理端采用 tailwind css 框架做自适应可以在各个终端设备使用，同时集成多 api 账号权限分配与数据签名验证，让开发者无需理会基础功能
---

## 快速开始

基础开发项目使用 Duxravel CMS 项目包含了基础的文章模块

```bash
// 创建站点目录
$ mkdir library && cd library

// 安装项目
$ composer create-project duxphp/ravelcms

// 加入伪静态规则
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

// 启动web服务访问安装向导
http://localhost
```

如果发现安装速度慢请使用国内加速，仍选其一执行：

```
$ composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

$ composer config -g repos.packagist composer https://php.cnpkg.org

$ composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

更多环境配置方式请参考 [环境文档](/guide/env)

## 问题反馈

请访问 [产品社区](https://support.qq.com/products/331847) 或者加入 qq 群、微信群交流

<div>
  <img data-type="qq" src="/images/qq.jpg" width="300" />
  <img data-type="wechat" src="/images/wechat.jpg" width="300" />
  
</div>
