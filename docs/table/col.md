---
title: 数据列
order: 1
toc: menu
---

## 基本说明

数据列为表格 `Html` 中的 `td` 标签列，可以根据不同的配置展示不同的内容。

## 基本方法

`$name` 表头标题

`$label` 字段名可为空，为空则不调用字段显示

`$callback` 回调方法为闭包函数，可以自定义返回显示的内容

```php
$table->column(string $name = '', string $label = '', $callback = null);
```

## 字段说明

使用 `.` 来查询关联模型，组件会自动使用 Eloquent 的模型关联作为查询[模型关联](https://learnku.com/docs/laravel/8.x/eloquent-relationships/9407)

```php
// 一对多查询指定字段，调用模型中 roles 关联方法查询关联模型的 name 字段
$table->column('角色名', 'roles.name');
```

使用 `->` 来指定集合对象或数组，如果字段值为数组或者集合则可通过该字符获取数组内部数据。

```php
/**
 * data字段内容示例
 * $data = [
 *      'name' => '名称',
 *  ];
 */
$table->column('数组名称', 'data->name');
```

您也可以同时使用 `.` 与 `->` 进行混合查询关联模型中的数组数据。

## 自定义数据

`$vale` 为当前字段的值

`$row` 为当前列的数据集合

```php
$table->column($name, $label， function($value, $row) {
    retutn $value;
});
```

## 设置宽度

```php
$table->column($name, $label)->width(int $width);
```

## 水平对齐

水平对齐参数支持 `left` `center` `right`。

```php
$table->column($name, $label)->align(string $name);
```

## 文字颜色

单元格文字颜色，支持 `tailwind` 颜色定义。

```php
$table->column($name, $label)->color(string $name);
```

## 格式化时间

将字段值的时间戳格式化为时间日期将调用 `date` 函数处理，如 `Y-m-d H:i:s`。

```php
$table->column($name, $label)->date($format);
```

## 自定义样式

自定义表格单元格 `css` 样式，多个样式使用多个方法。

```php
$table->column($name, $label)->style(string $name, string $value);
```

## 自定义样式类

自定义表格单元格 `class` 样式，多个样式使用多个方法。

```php
$table->column($name, $label)->class(string $class);
```

## 自定义属性

自定义表格单元格属性与内容，如 `属性名="属性值"` 多个属性使用多个方法。

```php
$table->column($name, $label)->attr(string $name, string $value);
```

## 文字描述

将指定值以灰色显示在主字段下方，可以调用多次方法，回调方法与自定义数据一致。

```php
$table->column($name, $label)->desc(string $label, callable $callback = null);
```

## 图片显示

将指定值以图片显示在主字段左边，可以调用多次方法显示多张图片。

```php
$table->column($name, $label)->image(string $label, int $width = 40, int $height = 40);
```

## 状态显示

将字段值作为状态样式显示，可指定颜色与文字，第一个参数指定文字数组，第二个参数指定颜色数组。

```php
$table->column($name, $label)->status([
    2 => '审核中',
    1 => '通过',
    0 => '拒绝'
], [
    2 => 'warning',
    1 => 'success',
    0 => 'danger'
]);
```

## 切换开关

将字段值作为切换显示，通过 AJAX 异步值切换，切换值只支持 `0` 或 `1`，切换时会通过 `GET` 请求指定 `URL` ，请获取对应参数完成处理，成功后请返回成功状态如：`return app_success('ok');`。

`$field` 为 ajax 请求传递字段

`$url` 为 ajax 请求地址

```php
$table->column($name, $label)->toggle(string $field = '', string $url = '', array $params = []);
```

可以直接在后台扩展类继承中使用，来快速切换条目状态。

```php
$table->column('状态', 'status')->toggle('status', 'admin.demo.test.status', ['id' => 'test_id']);
```

## 显示进度条

将字段值作为进度条显示，支持 `tailwind` 颜色。

```php
$table->column($name, $label)->progress(string $color = '', int $max = 100);
```

## 显示链接

在当前单元格自定义链接显示，可显示多个链接

`$name` 链接文字

`$route` 路由名

`$params` 路由参数，最终转化为 `param1=a&param2=b`，数组值可为字段名如果无匹配字段名则为参数值

```php
$column = $table->column('操作');
// 链接方法
$column->link(string $name, string $route = '', array $params = []);
// 普通链接
$column->link('编辑', 'admin.demo.test.page', ['id' => 'id']);
// 弹窗链接
$column->link('编辑', 'admin.demo.test.page', ['id' => 'id'])->type('dialog');
// 异步链接
$column->link('删除', 'admin.demo.test.del', ['id' => 'test_id'])->type('ajax')->data(['type' => 'post']);
```
