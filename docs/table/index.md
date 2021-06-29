---
title: 基础开发
order: 1
toc: menu
nav:
  title: 表格
  path: /table
  order: 2
---

## 表格组件

本章节主要针对后台表格类 `Duxravel\Core\UI\Table` 的开发说明，duxravel 将后台的主要操作封装为表格与表单，通过表格可以实现记录的查询和展示等操作。

## 基本使用

表格组件针对各种常用的列表页面展示方式使用，系统内大部分列表功能均由表格组件完成，表格组件可支持 Eloquent 模型与 collect 集合作为数据源。

### 实例化表格

通过以下代码在控制器内进行使用，将模型作为数据源：

```php
public function table() {
	$table = new \Duxravel\Core\UI\Table(new Model());
  return $table;
}
```

将集合作为数据源：

```php
$table = new \Duxravel\Core\UI\Table(collect());
$table->key('id');
```

### 数据列

基于数据源表格会自动进行分页，可自定义每列显示的字段内:

```php
$table->column('表头标题', '数据字段名');
```

### 数据筛选

根据使用者自定义条件进行自定义条件筛选，筛选支持文本类、下拉选择类组件。

```php
$table->filter('查找标题', '筛选字段')->text('查找提示')->quick();
```

### 操作按钮

自定义表格右上角按钮，可进行跳转链接或自定义事件。

```php
$table->action()->button('按钮', '路由名');
```

### 批量操作

自定义表格左下角的批量操作组件，将选择的条目进行 AJAX 批量操作。

```php
$table->batch()->button('批量操作', '路由名');
```

### 弹窗布局

需要在 dialog 组件中展示表格，则需要使用弹窗布局。

```php
$table->dialog(true);
```

### 渲染表格

通过方法将表格渲染为视图返回给控制器 (继承扩展控制器只需要返回对象无需渲染)

```php
$table->render();
```

### 导出表格

需要将表格内容导出为 Excel 文件时使用

```php
$table->export(function ($export) {
    $export->title('表格标题');
    $export->column('表头标题', '数据字段名');
    $export->column('自定义处理', function ($data) {
        return date('Y-m-d H:i:s', $data->created_at);
    });
});
```

请根据导出路由定义 export 方法，表格对象可继承 table 方法，如下：

```php
<?php
public function export()
{
    return $this->table()->export(function ($export) {
        $export->title('表格标题');
        $export->column('表头标题', '数据字段名');
        $export->column('自定义处理', function ($data) {
            return date('Y-m-d H:i:s', $data->created_at);
        });
    });
}
```

### 设置主键

针对数据模型组件会自动获取表主键，针对数据集合需要手动指定主键便于批量等操作

```php
$table->key('name');
```

### 分页数量

设置每页表单需要显示的分页数量，默认显示 20 条

```php
$table->limit(20);
```

### AJAX 数据

某些特殊展示如选择器布局、弹窗布局需要使用 AJAX 进行分页，则整个表格数据需要使用动态加载

```php
$table->ajax(string $url = '');
```
