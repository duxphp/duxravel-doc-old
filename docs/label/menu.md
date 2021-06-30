---
title: 菜单标签
order: 2
toc: menu
---

## 基础说明

菜单标签用于调用菜单内容的循环。

## 菜单列表

基础标签模板如下：

```html
@menu()
<div>{{ $item->name }}</div>
<div>{{ $item->url }}</div>
@endmenu
```

输出后的内容：

```html
<div>菜单名</div>
<div>http://localhost/</div>
```

可以为循环列表指定参数：

```html
@menu(['参数1' => 参数值2, '参数2' => 参数值2])
<li>{{$item->name}}</li>
@endmenu
```

支持参数如下：

| 参数   | 示例值 | 说明        |
| ------ | ------ | ----------- |
| id     | 1      | 菜单 id     |
| parent | 1      | 上级数据 id |
| limit  | 10     | 查询条数    |

循环内可调用字段如下：

| 参数 | 示例值                 | 说明     |
| ---- | ---------------------- | -------- |
| name | '中国'                 | 菜单名   |
| url  | 'http://www.china.com' | 菜单链接 |

## 子菜单

默认输出顶级菜单，可以使用以下内循环来输出子菜单：

```html
@menu()
<ul>
  {{ $item->name }} @foreach ($item->children as $vo)
  <li>{{ $vo->name }}</li>
</ul>
@endmenu
```
