---
title: 图标
order: 3
---

## 基本说明

支持 fontawesome 图标代码。https://fontawesome.com/icons

```php
$html = \Duxravel\Core\UI\Widget::icon('fa fa-cog', function($icon) {
  // 文本提示 Popover，参数为内容与方向 top bottom left right
  $icon->tooltips('提示内容', 'top');
});
```

系统集成 heroicons 的 svg 图标，如果图标内容为 svg 图标名则会渲染为 svg 图标，图标名称请[参考](<[Heroicons](https://heroicons.com/)>)。

```php
$html = \Duxravel\Core\UI\Widget::icon('archive');
```
