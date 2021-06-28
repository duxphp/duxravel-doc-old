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

应用开发使用 hmvc 结构，开发前请先了解 laravel 基础的架构和使用方法，应用放置在 `modules` 目录下，每个子目录即为一个单独的应用，每个应用具有 mvc 的结构方式，请先通过指南的[基础开发](/guide/base)学习应用的基本结构，基础架构如下：

<img src="https://duxphp.github.io/duxravel-doc/images/structure.png" width="600" />

系统内置封装了 2 个应用作为基础功能的开发依赖，也是系统层级中的 `核心应用` 与 `后台应用`，开发者则需要开发的 `应用层` 功能，系统级应用均通过 composer 引入并未包含在项目模块内。

- `核心应用` duxravel 的基础应用，主要包含了除框架外最底层的功能提供者，大部分功能实现均依赖该应用。

- `后台应用` 基于核心应用构建的后台管理功能，包含基础的管理、权限、设置、用户等操作。

- `功能应用` 为后台应用和对外用户提供的扩展功能，功能主要依赖于后台应用与核心应用，开发者可以根据开发需求继承其他应用。

## 核心应用结构

核心应用代码仓库发布至[github](https://github.com/duxphp/duxravel-app) 与 [packagist](https://packagist.org/packages/duxphp/duxravel-app)，您可以下载源代码进行查看。

核心应用可使用功能目录如下：

<Tree>
  <ul>
    <li>
      Api <small>公共接口目录</small>
      <ul>
        <li>Api.php <small>公共接口继承类</small></li>
      </ul>
    </li>
    <li>
      Jobs <small>公共任务目录</small>
      <ul>
        <li>Task.php <small>任务执行类</small></li>
      </ul>
    </li>
    <li>
      Manage <small>管理端继承类目录</small>
      <ul>
        <li>Common.php <small>公共类 - 提供公共方法</small></li>
        <li>Expend.php <small>扩展类 - 提供基本增删查改功能</small></li>
        <li>FileManage.php <small>文件管理器类</small></li>
        <li>Login.php <small>登录类</small></li>
        <li>Operate.php <small>操作记录类</small></li>
        <li>Register.php <small>注册类</small></li>
        <li>Role.php <small>角色管理类</small></li>
        <li>Upload.php <small>上传类</small></li>
        <li>User.php <small>用户类</small></li>
        <li>Visitor.php <small>访客统计类</small></li>
      </ul>
    </li>
    <li>
      Middleware <small>公共中间层类目录</small>
      <ul>
        <li>Api.php <small>接口签名验证类</small></li>
        <li>Manage.php <small></small>管理端鉴权类</li>
        <li>ManageRegister.php <small>注册检测类</small></li>
        <li>Web.php <small>web端访问类</small></li>
      </ul>
    </li>
    <li>
      Model <small>公共模型层目录</small>
      <ul>
        <li>Area.php <small>地区模型类</small></li>
        <li>Base.php <small>基础继承模型类</small></li>
        <li>Config.php <small></small>配置模型类</li>
        <li>ModelAgent.php <small>模型代理类</small></li>
        <li>VisitorApi.php <small>访问统计模型类</small></li>
        <li>VisitorOperate.php <small>操作日志模型类</small></li>
        <li>VisitorViews.php <small>独立访问统计类</small></li>
        <li>VisitorViewsData.php <small>访问统计数据类</small></li>
      </ul>
    </li>
    <li>
      Resource <small>公共资源类目录</small>
      <ul>
        <li>BaseCollection.php <small>集合资源继承类</small></li>
        <li>BaseResource.php <small>资源继承类</small></li>
      </ul>
    </li>
    <li>
      Traits <small>模型复用类目录</small>
      <ul>
        <li>Form.php <small>扩展表单类</small></li>
        <li>Visitor.php <small>访问统计类</small></li>
      </ul>
    </li>
    <li>
      UI <small>管理端UI类目录</small>
      <ul>
        <li>Form.php <small>表单类</small></li>
        <li>Table.php <small>表格类</small></li>
        <li>Tools.php <small>工具类</small></li>
        <li>Widget.php <small>部件类</small></li>
      </ul>
    </li>
    <li>
      Util <small>工具类目录</small>
      <ul>
        <li>ApexCharts.php <small>apex 图表类</small></li>
        <li>Blade.php <small>视图标签扩展类</small></li>
        <li>Excel.php <small>excel 工具类</small></li>
        <li>Form.php <small>自定义表单类</small></li>
        <li>Route.php <small>路由扩展类</small></li>
        <li>Tree.php <small>数组转树形类</small></li>
        <li>View.php <small>视图扩展类</small></li>
        <li>Visitor.php <small>访问处理类</small></li>
      </ul>
    </li>
    <li>
      Web <small>web控制器</small>
      <ul>
        <li>Area.php <small>地区控制器</small></li>
        <li>Base.php <small>基础控制器</small></li>
        <li>Image.php <small>图片控制器</small></li>
        <li>Index.php <small>首页控制器</small></li>
      </ul>
    </li>
  </ul>
</Tree>

## 后台应用

后台应用代码仓库发布至[github](https://github.com/duxphp/duxravel-admin) 与 [packagist](https://packagist.org/packages/duxphp/duxravel-admin)，您可以下载源代码进行查看。

后台应用继承自 `核心应用` 目录 `Manage` 的管理端继承类实现，开发者还可以自行继承该目录类实现其他管理端的功能。

该应用主要用作基础的后台管理功能，由功能应用实现，文档不单独讲解，如感兴趣可自行查看源代码。

## 应用开发

功能应用为开发者自行开发的应用，应用基本目录为 `modules` 下子目录，使用以下命令可创建一个基础的应用结构，`test` 为自定义应用名：

```shell
$ php artisan app:make-admin test
```

以下为一个完整应用的目录结构和文件描述：

<Tree>
  <ul>
    <li>
      App
        <ul>
          <li>Admin <small>后台控制器目录</small></li>
          <li>Api <small>接口控制器目录</small></li>
          <li>Web <small>web 控制器目录</small></li>
          <li>
            Config <small>配置文件</small>
            <ul>
              <li>Config.php  <small>应用信息配置</small></li>
            </ul>
          </li>
          <li>Model <small>数据模型</small></li>
          <li>
            Route <small>路由</small>
            <ul>
              <li>Api.php  <small>Api 路由，包含签名验证</small></li>
              <li>AuthApi.php  <small>Api 用户授权路由，包含签名验证，由用户应用定义实现</small></li>
              <li>Admin.php  <small>后台非授权路由，无需登录访问</small></li>
              <li>AuthAdmin.php  <small>后台授权路由，登录后可访问</small></li>
              <li>Web.php  <small>Web路由</small></li>
              <li>Server.php  <small>服务路由，用于提供公共服务类的路由</small></li>
            </ul>
          </li>
          <li>
            Service <small>服务接口</small>
            <ul>
              <li>Menu.php  <small>菜单服务，提供系统后台菜单等菜单配置</small></li>
            </ul>
          </li>
          <li>
            View
            <ul>
              <li>Admin <small>后台模板目录</small></li>
            </ul>
          </li>
        </ul>
    </li>
  </ul>
</Tree>

打开应用配置 `Config/Config.php` 文件可定义一些应用的基本信息。

```php
<?php

return [
    'system' => 0,   // 是否系统应用，后续应用管理使用
    'name' => '应用名称',
    'auth' => '作者',
    'id' => '应用id自动生成',
    'desc' => '应用描述',
];
```

打开菜单服务 `Service/Menu.php` 文件定义应用的基础菜单。

```php
<?php

namespace Modules\Test\Service;

/**
 * 系统菜单接口
 */
class Menu
{
    /**
     * 获取菜单结构
     */
    public function getAdminMenu()
    {
        return [
            'test' => [
                'name' => '菜单名',       // 后台左侧菜单名
                'icon' => '',            // 菜单图标，svg图片内容
                'order' => 10,           // 菜单顺序，从小->大排序
                'menu' => [
                    [
                        'name' => '分类菜单名',   // 二级菜单分类名
                        'order' => 0,           // 菜单顺序
                        'menu' => [
                            // Generate Menu Make
                        ]
                    ],
                ],
            ],

        ];
    }
}

```

后续开发应用中的后台控制器、模型、表格和表单等请查看对应章节文档。
