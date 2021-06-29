---
title: 表单
order: 0
toc: menu
nav:
  title: 部件
  path: /ui
  order: 4
---

## 基础说明

UI 组件为独立组件可以嵌套使用也可以在表格、表单组件内进行使用，最终会编译为 html 标签，组件支持通用方法如下，组件内方法请使用回调处理

```php
$widget = \Duxravel\Core\UI\Widget::$widget($params...);
// html 属性
$widget->attr('style', 'width: 100px;');
// class 样式
$widget->class('class');
// css 样式
$widget->css('width', '100px');
```

独立组件的渲染可使用回调方法与手动连贯操作，请根据场景自行选择：

```php
// 组件渲染
$html = \Duxravel\Core\UI\Widget::icon('fa fa-cog', function($icon) {
  $icon->tooltips('提示内容', 'top');
});
// 独立渲染
$html = (new \Duxravel\Core\UI\Widget\Icon('fa fa-cog'))->->tooltips('提示内容', 'top')->render();
```
