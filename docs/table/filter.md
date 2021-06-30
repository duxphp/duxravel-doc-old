---
title: 数据筛选
order: 2
toc: menu
---

## 基本说明

数据筛选为表格左上角的筛选组件，筛选分为快速筛选和扩展筛选两块，快速筛选显示在页面内，扩展筛选显示在折叠面板中

`$name` 筛选标题

`$field` 筛选字段，可以使用 `.` 来指定关联模型字段

`$where` 自定义筛选，如果为 `false` 则只展示不执行筛选，如果为闭包则可自定义条件进行查询

```php
$table->filter(string $name, string $field, $where = true)
```

## 自定义条件

`$query` 模型对象可调用 `where` 方法设置条件，请参考[查询构造文档](https://learnku.com/docs/laravel/8.x/queries/9401#where-clauses)

`$value` 用户输入筛选内容

```php
$table->filter('标题', 'title', function ($query, $value) {
    $query->where('title', 'like', '%'.$value.'%');
})->text('请输入标题进行搜索')->quick();
```

## 文本框

`$placeholder` 文本框输入提示

`$callback` 文本框组件回调

```php
$table->filter($title, $field)->text(string $placeholder = '', callable $callback = NULL);
```

文本框组件回调对象与表单文本框方法一致。

```php
$table->filter('标题', 'title')->text('请输入标题内容', function(Text $text) {
    $text->afterText('test');
})
```

## 日期选择

`$placeholder` 日期选择提示

`$callback` 日期组件回调，回调对象参考 表单 - 日期选择组件

```php
$table->filter($title, $field)->date(string $placeholder = '', callable $callback = NULL);
```

## 日期时间选择

`$placeholder` 日期时间选择提示

`$callback` 日期时间组件回调，回调对象参考 表单 - 日期时间选择组件

```php
$table->filter($title, $field)->datetime(string $placeholder = '', callable $callback = NULL);
```

## 日期范围选择

`$placeholder` 日期范围选择提示

`$callback` 日期范围组件回调，回调对象参考 表单 - 日期范围选择

```php
$table->filter($title, $field)->daterange(string $placeholder = '', callable $callback = NULL);
```

## 下拉选择

`$data` 下拉选择数组

`$callback` 下拉选择组件回调，回调对象参考 数据表单 - 下拉选择

```php
<?php
$data = [
    0 => '选项一',
  	1 => '选项二',
];
$table->filter($title, $field)->select($data, callable $callback = NULL);
```

## 级联选择

`$data` 级联选择数组

`$callback` 级联选择组件回调，回调对象参考 数据表单 - 级联选择

```php
$data = [
    0 => '选项一',
  	1 => '选项二',
];
$table->filter($title, $field)->cascader($data, callable $callback = NULL);
```

##
