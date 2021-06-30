---
title: 应用打包
order: 7
toc: menu
---

## 基本说明

目前开发的应用可以提交在 [packagist](https://packagist.org/) 中，应用如果要进行打包安装分为 2 种形式：

- 应用形式 - 使用 `composer` 自定义 `type` 类型来让 duxravel 进行触发安装，安装后的代码存放在 `modules` 目录内。

- 扩展形式 - 使用 `composer` 的 `extra` 扩展参数，安装后需要手动执行数据库合并和数据导入`命令`，安装后的代码存放在 `vendor` 目录内，一般用于自己打包系统让应用成为自带功能。

- 自由形式 - 使用压缩包直接打包应用数据并进行分享。

## 应用形式

开发者开发的应用存放在 `modules` 下子目录，如果需要将该应用打包提供给他人安装使用则需要进行以下操作。

### 建立 git 仓库

新建 git 仓库，在仓库模板中建立 `package.json` 文件，并按照以下模板修改。

```json
{
  "name": "duxphp/duxravel-name", // packagist 中的路径，根据需要自定义，一般按照规则： 作者/duxravel-功能
  "type": "duxravel-app", // 包类型请勿修改
  "description": "应用描述", // 应用描述
  "authors": [
    // 作者信息，请自定义
    {
      "name": "duxphp",
      "email": "admin@duxphp.com"
    }
  ],
  "license": "MIT", // 开源协议
  "require": {
    // 依赖库
    "php": ">=7.4",
    "duxphp/duxravel-app": "<2.0" // 核心框架
  },
  "extra": {
    "duxravel": {
      "type": "app", // 类型为app 如果为 theme 则为主题模板
      "name": "Demo" // 应用名，安装后在 modules 目录下的目录名
    }
  }
}
```

### 放置应用文件

将应用内的全部文件和目录放置在 git 仓库的根目录中，形式如下：

<Tree>
<ul>
  <li>Admin  <small>后台控制器目录</small></li>
  <li>Model</li>
  <li>Route</li>
  <li>Service</li>
  <li>View</li>
  <li>package.json</li>
</ul>
</Tree>

### 建立数据表结构

在 git 仓库根目录中建立 `Database` 目录用于存放该应用的数据表结构和填充数据，结构如下，具体数据结构和数据填充类请查阅 laravel 的数据迁移文档。

<Tree>
<ul>
  <li>Database <small>数据表信息目录</small>
    <ul>
      <li>Migrations <small>数据迁移目录</small>
        <ul>
          <li>20xx_06_01_xxxx.php</li>
        </ul>
      </li>
      <li>Seeders
        <ul>
          <li>DatabaseSeeder.php <small>数据填充类</small></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
</Tree>

### 发布应用

提交代码到线上 git 仓库，并在 [packagist](https://packagist.org/packages/submit) 中提交 composer 扩展包，并在线上 git 仓库中发布版本。

备份应用后删除当前项目 `modules` 下的应用目录，并删除相关数据表，并使用以下命令安装测试线上应用。

```shell
$ composer require xxxx/xxxx
```

具体的 `require` 命令请查看 packagist 发布后的地址。

## 扩展形式

### 建立 git 仓库

新建 git 仓库，在仓库模板中建立 `package.json` 文件，并按照以下模板修改。

```json
{
  "name": "duxphp/duxravel-name", // packagist 中的路径，根据需要自定义，一般按照规则： 作者/duxravel-功能
  "type": "library",
  "description": "应用描述", // 应用描述
  "authors": [
    // 作者信息，请自定义
    {
      "name": "duxphp",
      "email": "admin@duxphp.com"
    }
  ],
  "license": "MIT", // 开源协议
  "require": {
    // 依赖库
    "php": ">=7.4",
    "duxphp/duxravel-app": "<2.0" // 核心框架
  },
  "extra": {
    "branch-alias": {},
    "laravel": {
      "providers": [
        "Modules\\Test\\Providers\\TestServiceProvider" // 当前应用服务提供者类
      ]
    },
    "duxravel": {
      "service": [
        // 需要注册的服务层类
        "Modules\\Test\\Service\\Service",
        "Modules\\Test\\Service\\Menu",
        "Modules\\Test\\Service\\Type"
      ],
      "route": [
        // 需要注册的路由类
        "src/Test/Route/Api.php",
        "src/Test/Route/AuthAdmin.php",
        "src/Test/Route/Web.php"
      ]
    }
  },
  "config": {
    "optimize-autoloader": true,
    "sort-packages": true,
    "preferred-install": "dist"
  }
}
```

### 放置应用文件

将应用内的全部文件和目录放置在 git 仓库的 `src` 目录中，并将数据迁移文件放置在 `database` 目录中，形式如下：

<Tree>
<ul>
  <li>Database <small>数据迁移目录</small>
    <ul>
      <li>Migrations <small>数据结构目录</small>
        <ul>
          <li>20xx_06_01_xxxx.php</li>
        </ul>
      </li>
      <li>Seeders
        <ul>
          <li>DatabaseSeeder.php <small>数据填充类</small></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>src
    <ul>
      <li>Admin  <small>后台控制器目录</small></li>
      <li>Model</li>
      <li>Route</li>
      <li>Service</li>
      <li>View</li>
      <li>Providers <small>服务提供者类库</small>
          <ul>
            <li>TestServiceProvider.php</li>
          </ul>
      </li>
    </ul>
  </li>
  <li>package.json</li>
</ul>
</Tree>

### 建立数据表结构

在 git 仓库根目录中建立 `Database` 目录用于存放该应用的数据表结构和填充数据，具体数据结构和数据填充类请查阅 laravel 的数据迁移文档。

### 服务提供者

请在 `src` 目录中创建 `Providers` 目录 并创建 `TestServiceProvider` 类，模板如下：

```php
<?php

namespace Modules\Test\Providers;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class TestServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Router $router)
    {
        // 注册数据库迁移目录
        $this->loadMigrationsFrom(realpath(__DIR__ . '/../../../database/migrations'));
    }
}

```

在 `boot` 方法中注册数据迁移目录。

### 数据安装服务

请在 `src` 目录中创建 `Service` 目录 并创建 `Service` 类，模板如下：

```php
<?php

namespace Modules\Test\Service;

/**
 * 系统服务接口
 */
class Service
{

    /**
     * 获取安装数据
     */
    public function getInstallData()
    {
        return \Duxravel\Test\Seeders\DatabaseSeeder::class;
    }
}
```

该服务的主要作用是运行安装向导时进行数据导入。

### 发布应用

提交代码到线上 git 仓库，并在 [packagist](https://packagist.org/packages/submit) 中提交 composer 扩展包，并在线上 git 仓库中发布版本。

备份应用后删除当前项目 `modules` 下的应用目录，并删除相关数据表，并使用以下命令安装测试线上应用。

```shell
$ composer require xxxx/xxxx
```

具体的 `require` 命令请查看 packagist 发布后的地址。

### 安装数据

引入后请执行以下两条命令更新数据表和数据，命令参数请自行修改。

```shell
$ php artisan migrate
$ php artisan db:seed --class=\\Duxravel\\Test\\Seeders\\TestTableSeeder
```

## 自由形式

请按照 `应用形式` 创建数据迁移目录及文件，进行`zip`打包分享，用户解压后按照原结构放置在 `modules` 目录中，并执行以下命令进行安装和清理缓存。

```shell
$ php artisan app:install test
$ composer run-script post-autoload-dump
```
