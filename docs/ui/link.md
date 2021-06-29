---
title: 链接按钮
order: 5
---

## 基本说明

可将字符串设置为超链接或者按钮，数据表格与表单的链接按钮部分均调用该组件。

```php
/**
  * Link constructor.
  * @param string $name 链接名称
  * @param string $route 路由名
  * @param array $params 路由参数
  * @param callable|null $callback 组件回调
  */
\Duxravel\Core\UI\Widget::link(string $name, string $route = '', array $params = [], string $type = 'primary', callable $callback = NULL);
```

内部方法如下：

```php
$html = \Duxravel\Core\UI\Widget::link('链接文字', 'admin.index', ['a' => 1, 'b' => 1], function($link) {
  // 设置为按钮,按钮颜色仅支持通用颜色
  $link->button('primary');
  // 弹窗链接
  $link->type('dialog');
  // AJAX链接
  $link->type('ajax')->data(['type' => 'post']);
});
```
