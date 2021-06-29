---
title: 通用方法
order: 5
toc: menu
---## 基础说明

表单组件通用方法，支持 `所有表单组件` 进行连贯操作

## 自定义值

```php
$form->text()->value('name');
```

## 设置默认值

```php
$form->text()->default('默认');
```

## 组件帮助

```php
// 该信息显示在输入组件之后
$form->text()->help('组件帮助描述信息');
// 该信息显示在单独行
$form->text()->helpLine('组件帮助描述信息');
// 该信息显示为帮助图标
$form->text()->prompt('组件帮助描述信息');
```

## 必填样式

指定元素标题显示红点，并对该字段做验证。

```php
$form->text()->must();
```

## 组件属性

设置组件元素的 `html` 属性，支持多次调用。

```php
$form->text()->attr('data-xx', 'value');
```

## 组件样式

指定组件元素的 `class` 样式表，支持多次调用。

```php
$form->text()->class('app-text');
```

## css 样式

指定元素的 css 样式，支持多次调用。

```php
$form->text()->style('width', '100px');
```

## 必填样式

指定元素标题显示红点，仅进行展示不做数据验证。

```php
$form->text()->must();
```

## 组件验证

设置组件提交数据验证，验证规则请查看文档。

https://learnku.com/docs/laravel/8.x/validation/9374

`$rule` 验证规则，请查看文档

`$msg` 规则提示，不符合验证规则的提示信息

`$time` 验证时间，支持 全部 `all` 新增 `add` 编辑 `edit

```php
$form->text()->verify($rule, array $msg = [], string $time = 'all');
// 示例如下：
 $form->text('文本框', 'title')->verify('required|min:4', [
   'required' => '必须填写该内容',
   'min'      => '最小字符不能少于4个',
 ]);
```

## 格式化数据

自定义格式化组件提交数据

`$value` 提交值，该组件提交数据

```php
$time` 格式化时间，支持 全部 `all` 新增 `add` 编辑 `edit

$form->text()->format(function($value) {
  return $value;
}, $time);
```
