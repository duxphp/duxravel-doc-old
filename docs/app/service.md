---
title: 应用接口
order: 5
toc: menu
---

## 基础说明

应用接口也是应用服务层，主要用于各个应用之间的内部 hook 接口和提供相关功能，使用 `app_hook` 函数可获取或者触发各应用服务层的类方法，服务层位于应用目录下的 `Service` 目录。

已知后台菜单接口使用服务层做返回：

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

    }
}
```

使用 `app_hook('Menu', 'getAdminMenu')` 函数即可获取 `每个应用` 下 `Service` 目录中 `Menu` 类的 `getAdminMenu` 方法。

我们可以通过调用该函数自定义一些服务方法供每个应用之间互相调用或触发，极大的减小代码的耦合度。

## 菜单服务

系统内置菜单服务实现以下集中方法接入不同的菜单。

```php
<?php

namespace Modules\Test\Service;

/**
 * 系统菜单接口
 */

class Menu
{
    /**
     * 后台菜单
     */
    public function getAdminMenu()
    {
        return [
            'test' => [
                'name' => '菜单',
                'icon' => '',
                'order' => 10,
                'menu' => [
                    [
                        'name' => '菜单',
                        'order' => 0,
                        'menu' => [
                            [
                                'name' => '测试',
                                'url' => 'admin.test.test',
                            ],
                            // Generate Menu Make
                        ]
                    ],
                ],
            ],

        ];
    }

    /**
     * 应用中心菜单
     */
    public function getAppMenu()
    {
        return [
            [
                'name' => '自定义表单', // 应用名称
                'desc' => '多功能自定义表单功能',  // 应用描述
                'type' => 'tools',  // 应用类型 business(业务) market(营销)  tools(工具)  other(其他)
                'url' => 'admin.tools.form',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
            ]
        ];
    }
}
```

## 安装服务

如果开发的应用为扩展应用需要提供给他人使用，则需要创建一个服务类 `Service.php` 进行安装向导时的数据填充，数据则由 `Seeder` 进行生成。

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

## 运行服务

在系统引导后可以通过系统运行服务注册和设置一些参数和类库，创建服务类 `App.php`，进行配置。

```php
<?php

namespace Modules\Test\Service;

/**
 * 系统运行接口
 */
class App
{

    public function extend()
    {
        // 自定义运行服务
    }
}
```

我们可以在此处注册模板标签来扩展使用：

```php
public function extend()
{
    \Duxravel\Core\Util\Blade::loopMake('test', \Modules\Test\Service\Blade::class, 'test');
}
```

注册后在模板内可以通过以下标签使用。

```blade
@test(['key' => 'value'])
<li> ... </li>
@endtest
```

## 后台服务

系统在后台控制器扩展类中内置了 `hook` 触发器，通过这些埋点非侵入式定义控制器表格或者表单元素，创建服务类 `Manage.php`。

```php
<?php

namespace Modules\Test\Service;

/**
 * 系统运行接口
 */
class Manage
{

    /**
     * 表格接口
     * @param $class 调用类名
     * @param $table 表格类实例
     */
    public function table($class, \Duxravel\Core\UI\Table $table)
    {

    }

    /**
     * 表单接口
     * @param $class 调用类名
     * @param $form 表单类实例
     */
    public function form($class, \Duxravel\Core\UI\Form $form)
    {

    }

    /**
     * 删除接口
     * @param $class 调用类名
     * @param $id 主键值
     */
    public function del($class, $id)
    {

    }

    /**
     * 恢复接口
     * @param $class 调用类名
     * @param $id 主键值
     */
    public function recovery($class, $id)
    {

    }

    /**
     * 清除接口
     * @param $class 调用类名
     * @param $id 主键值
     */
    public function clear($class, $id)
    {

    }

    /**
     * 状态接口
     * @param $class 调用类名
     * @param $id 主键值
     */
    public function status($class, $id)
    {

    }
}

```
