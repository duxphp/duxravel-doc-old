---
title: 表单组件
order: 2
toc: menu
---

## 基础说明

数据表单封装了大部分常用的表单组件，也可以根据需求进行扩展组件，通用参数说明：

`$name` 组件名称

`$field` 字段名

`$has` 关联数据，某些场景下提交字段名和显示数据不一致通过该字段设置显示数据，如一对多关联方法或关联表字段。

## 文本框

文本框组件均支持扩展方法，更多文本框类型请参考 `文本框组件`。

```php
$form->text(string $name, string $field, string $has = '');
// 整数输入
$form->text()->type('number');
// 文本框前内容
$form->text()->beforeText('每天');
// 文本框后内容
$form->text()->afterText('个');
// 文本框前图标 支持字体图标html与svg
$form->text()->beforeIcon($content);
// 文本框后图标
$form->text()->afterIcon($content);
```

## 下拉选择

`$data` 选择数据，支持数组与回调

```php
$form->select(string $name, string $field, $data = null, string $has = '');
// 数组选项
$form->select('选择器', 'class_id', [
    1 => '分类一',
  2 => '分类二'
]);
// 回调选项
$form->select('选择器', 'class_id', function($value) {
  return [
    1 => '分类一',
    2 => '分类二'
  ];
});
```

## 下拉多选

```php
$form->select('多选组件', 'type', [
  1 => '类型一',
  2 => '类型二',
])->multi();
```

## 搜索组件

ajax 下拉搜索组件，通过远程数据进行搜索内容，联动选择需要解析 `linkage` 中的字段作为 `GET` 进行条件处理。

```php
// 搜索选择
$form->select('搜索组件', 'role_id')->search($uri);
// 联动选择
$form->select('省份', 'province')->search($uri)->linkage('city', 1);
$form->select('城市', 'city')->search($uri)->linkage('area', 2);
$form->select('地区', 'area')->search($uri)->linkage(null, 3);
```

ajax 请求 `uri` 可以指向到后台扩展控制器中的 `data`方法。

## 普通单选

```php
$form->radio('状态', 'status', [
   1 => '启用',
   0 => '禁用',
]);
```

## 多选

```php
$form->checkbox('多选组件', 'type', [
  1 => '类型一',
  2 => '类型二',
]);
```

## 文件上传

```php
$form->file(string $name, string $field, string $has = '');
```

## 图片上传

`$width` 与 `$height` 单位为像素

```
$type` 缩图类型支持，等比缩放 `scale` 居中裁剪 `center` 固定尺寸 `fixed
$position` 水印位置，左上角 `top-left` 上局中 `tup` 右上角 `top-right` 左局中 `left` 居中 `center` 右居中 `right` 左下角 `bottom-left` 下居中 `bottom` 右下角 `bottom-right
```

`$alpha` 水印透明度百分比

```php
// 图片上传
$form->image(string $name, string $field, string $has = '');
$form->image('图片上传', 'image');
// 图片缩小
$form->image()->thumb(int $width, int $height, string $type = 'scale');
// 图片水印
$form->image()->water($position = 'center', int $alpha = 80);
```

## 组图上传

```php
$form->images(string $name, string $field, string $has = '');
$form->images('组图上传', 'images');
```

## 关联选择器

一般用于多条数据的关联选择，选择器会调用弹窗表格选择，数据值请按照表单提交返回二维数组，至少包含主键值

```php
// 基础调用
$form->choice(string $name, string $field, string $has = '');
// 设置选择数据源
$form->choice(...)->ajax(route('路由名'), '数据主键', function ($column) {
  // 选择器展示列
  $column->text('显示标题', 'title');
  $column->image('显示图片', 'image');
  return $column;
})
// 仅展示
$form->choice(...)->show($name, $field);
// 文本输入
$form->choice(...)->text($name, $field);
// 图片上传
$form->choice(...)->image($name, $field);
// 隐藏字段
$form->choice(...)->hidden($name, $filed);
// 禁止添加编辑
$form->choice(...)->option(false);
// 最大数量 0不限制
$form->choice(...)->num(0);
```

## 列表输入器

用于自定义多条数据输入

```php
// 基础调用
$form->data(string $name, string $field, string $has = '');
// 仅展示
$form->data(...)->show($name, $field);
// 文本输入
$form->data(...)->text($name, $field);
// 图片上传
$form->data(...)->image($name, $field);
// 隐藏字段
$form->data(...)->hidden($name, $filed);
// 禁止添加编辑
$form->data(...)->option(false);
// 最大数量 0不限制
$form->data(...)->num(0);
```

## 日期选择

```php
$form->date(string $name, string $field, string $has = '');
```

## 日期时间选择

```php
$form->datetime(string $name, string $field, string $has = '');
```

## 日期范围选择

```php
$form->daterange(string $name, string $field, string $has = '');
```

## 时间选择

```php
$form->time(string $name, string $field, string $has = '');
```

## 颜色选择

支持通用颜色色系与 16 进制颜色

```php
$form->color(string $name, string $field, string $has = '');
// 自定义颜色
$form->color([
 '#F5F5F5',
]);
// 调用html颜色选择器
$form->picker();
```

## 自定义 html

回调传递参数为当前编辑数据，可以直接返回 html 或者渲染后的其他组件

```html
$form->html('标题', function($info) { // 自定义 html return '<span>内容</span>';
// 其他模板 return response(view('Common.UI.View.Components.nodata', ['title' =>
'暂无选择数据', 'content' => '您可以点击"+"选择更多条目', 'reload' =>
false]))->getContent(); // 其他组件 return Widget::Badges('标签'，
function(Widget\Badges $badges) { $badges->color('blue'); }); });
```

## 多级选择器

```php
$form->cascader(string $name, string $field, $data = null, string $has = '');
// 数据选项
$form->cascader('多级选择', 'class_id', [
    [
    'id' => 1,
    'name' => '选项一',
    'pid' => 0
  ],
    [
    'id' => 1,
    'name' => '子选项',
    'pid' => 1
  ],
]);
// 回调选项
$form->cascader('多级选择', 'class_id', function ($value) {
  return (new $this->model)->get(['class_id as id', 'parent_id as pid', 'name']);
});
// 数据多选
$form->cascader(...)->multi();
```

## 选项开关

```php
$form->toggle('选项内容', '选项描述', $field, string $has = '');
```

## 坐标选择器

```php
$form->map(string $name, string $field,  array $maps = [], string $has = '');

// 第三个参数为配合省市区设置的name值
$form->map('地图选择', 'coord', [
  			'province' => 'province',
        'city' => 'city',
        'region' => 'region',
        'address' => 'address'
]);
```

##
