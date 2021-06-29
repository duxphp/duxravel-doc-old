---
title: 提示框
order: 4
---

## 基本说明

```php
$html = \Duxravel\Core\UI\Widget::alert('提示框内容', '提示框标题', function($alert) {
  // 提示框颜色
  $alert->type('red');
  // 提示框图标，图标组件内容
  $alert->icon('alert-circle');
});
```
