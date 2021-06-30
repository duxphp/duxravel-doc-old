---
title: 表单
order: 0
toc: menu
nav:
  title: 表单
  path: /form
  order: 3
---

## 基础开发

表单组件用于各类后端表单页提交用途，表单组件可支持 `Eloquent` 模型与 `collect` 集合作为数据源。

## 实例化表单

通过以下代码在控制器内进行使用，将模型作为数据源。

```php
public function form() {
	$form = new \Duxravel\Core\UI\Form(new Model());
  return $form;
}
```

将集合作为数据源，`id` 为编辑时的主键值。

```php
$form = new \Duxravel\Core\UI\Form(collect());
$form->setKey('user_id', $id);
```

## 提交地址

组件已自动化指定提交地址，请根据异常提醒设置路由，部分场景需要使用该方法自定义提交地址。

```php
$form->action($uri);
```

## 获取表单数据

获取表单主键对应数据，编辑时有效。

```php
$form->info();
```

## 获取表单模型

获取表单实例化为模型的类。

```php
// 模型代理，可以直接操作模型
$form->model();
// elo模型，仅作为实例化使用
$form->modelElo();
```

## 数据处理前回调

表单数据处理之前回调，该方法可多次调用。

`$type` 表单提交数据

`$time` 提交类型 add 或 edit

```php
$form->front(function($data, $time, $model) {
});
```

## 提交时回调

表单数据提交前回调处理，该方法可多次调用。

`$data` 表单提交数据

`$type` 提交类型 add 或 edit

```php
$form->submit(function($data, $time, $model) {
  $data['test'] = request()->post('test');
    return $data;
});
```

## 保存前回调

表单数据保存为模型前进行回调，集合不支持该方法，该方法可多次调用。

`$data` 表单提交数据

`$type` 提交类型 add 或 edit

`$model` 模型对象

```php
$form->before(function($data, $type, $model) {
});
```

## 保存后回调

表单数据保存为模型后进行回调，集合不支持该方法，该方法可多次调用。

`$data` 表单提交数据

`$type` 提交类型 add 或 edit

`$model` 模型对象

```php
$form->before(function($data, $type, $model) {
});
```

## 弹窗布局

部分功能表单可以放置在弹窗内，表单则需要适应弹窗布局。

```php
$form->dialog(true);
```

## 表单 js

部分场景需要自定义使用 js,可以用该方法使用 js。

```php
<?php
$form->script('alert("ok");');
```
