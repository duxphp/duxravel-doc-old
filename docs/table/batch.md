---
title: 批量操作
order: 4
toc: menu
---

## 基本说明

将选中数据进行 `Ajax` 提交给后端进行数据处理，处理成功后刷新页面，基础方法如下：

```php
$table->batch();
```

## 操作按钮

点击按钮系统会 `Ajax` 请求指定路由并附带选中表格条目 `id` ，请使用 `request()` 自行接收请求参数处理，默认会传递 `ids` 选中 id 数组。

`$name` 按钮名称

`$route` 路由名

`$params` 路由参数

`$type` 颜色类型，支持颜色表类型

```php
$table->batch()->button(string $name, string $route = '', array $params = [], string $type = 'blue');
```

## 下拉操作

同一类型的多个操作可以放在一个操作中传递给后端进行批量处理，默认会传递 `type` 与 `ids`，type 为自定义操作类型，`ids` 为选中 id 数组

`$name` 选择器名称

`$route` 路由名

`$data` 下拉数据

```php
$table->batch()->select(string $name, string $route = '', array $data = []);
// 下拉示例
$table->batch()->select('批量操作', 'system.batch', [
            0 => '导出',
            1 => '删除'
        ]);
// 菜单示例
$menu = $table->action()->menu('菜单名称');
$menu->link('添加', 'admin.add');
$menu->link('导出', 'admin.export');
```
