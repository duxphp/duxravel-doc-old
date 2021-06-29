---
title: 标签
order: 2
toc: menu
---## 基本说明

标签为文字标签，作为重点文字使用。

```php
\Duxravel\Core\UI\Widget::badges('标签', function($badge) {
	// 标签颜色，仅支持通用颜色
  $badge->color('blue');
  // 标签颜色，浅色背景
  $badge->color('blue-lt');
  // 大圆角
  $badge->pill();
  // 超链接
  $badge->url($uri);
  // 图片标签
  $badge->avatar($uri);
});
// 空心圆
\Duxravel\Core\UI\Widget::badges();
```
