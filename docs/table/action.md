---
title: 操作按钮
order: 3
toc: menu
---## 基本说明

操作按钮为表格右上角功能区域，主要放置一些按钮与菜单，基础方法如下：

```php
$table->action();
```

## 链接按钮

AJAX 链接为点击按钮出发 ajax 请求，默认为 get 请求，可以传递 data 方法来指定 post 等类型，成功后将会刷新页面

`$name` 按钮名称

`$route` 路由名

`$params` 路由参数

`$type` 颜色类型，支持颜色表类型

```php
$table->action()->button(string $name, string $route = '', array $params = [], string $type = 'blue');
// 普通链接
$table->action()->button('添加', 'admin.add');
// 弹窗链接
$table->action()->button('添加', 'admin.add')->type('dialog');
// AJAX链接
$table->action()->button('添加', 'admin.add')->type('ajax')->data(['type' => 'post']);
```

## 菜单按钮

按钮太多时需要将多个按钮合并在一个菜单内可以使用该方法

`link` 方法与链接按钮的连贯方法一致均可使用 `dialog` 与 `ajax` 类型

```php
$menu = $table->action()->menu('菜单名称');
$menu->link('添加', 'admin.add');
$menu->link('导出', 'admin.export');
```
