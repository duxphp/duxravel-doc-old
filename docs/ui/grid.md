---
title: 网格布局
order: 1
---

## 基本说明

经典网格布局，可将一行划为为多列内容。

行总列数为 12 可以设置每行相加为 12 的多种列宽组合，不指定列宽为平均分配。

```php
$html = \Duxravel\Core\UI\Widget::row(function($row) {
    // 设置列宽度为9
  $row->column(function() {
    return 'html或组件';
  }, 9);
  // 设置列宽度为3
  $row->column(function() {
    return 'html或组件';
  }, 3);
});
```
