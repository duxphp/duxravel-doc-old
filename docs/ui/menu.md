---
title: 下拉菜单
order: 6
---

## 基本说明

该组件为按钮菜单，点击按钮展开功能菜单

```php
/**
 * Menu constructor.
 * @param string $name 按钮名称
 * @param string $type 按钮类型 支持通用颜色
 * @param callable|null $callback 按钮回调
 */
\Duxravel\Core\UI\Widget::menu(string $name, string $type = 'default', callable $callback = NULL);
```

菜单条目设置方法如下，链接条目方法参考链接组件

```php
\Duxravel\Core\UI\Widget::menu('下拉菜单', 'default', function($menu) {
  // 添加条目
  $menu->link(string $name, string $route = '', array $params = []);
});
```
