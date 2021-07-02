---
title: 基础标签
order: 0
toc: menu
nav:
  title: 模板
  path: /label
  order: 5
---

## 基础说明

标签使用 laravel 的 [badge 模板](https://learnku.com/docs/laravel/8.x/blade/9377) 标签，您可以查看该文档使用常规的操作，web 前台模板放置在 `public/theme`
目录内，请根据后台设置来设置默认模板目录。

## 模板继承

模板继承主要用于模板公用，首先我们建立一个 `公共模板` 比如头部和底部：

模板文件名为 `layout.blade.php`。

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{$meta->title}}</title>
    <meta name="Keywords" content="{{$meta->keywords}}" />
    <meta name="Description" content="{{$meta->description}}" />
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <script src="//unpkg.com/alpinejs" defer></script>
  </head>
  <body>
    <h1>这里是展示</h1>

    <header>@yield('header')</header>

    <main>@yield('content')</main>

    <footer>@yield('footer')</footer>
  </body>
</html>
```

然后我们建立一个首页模板作为继承模板的演示：

模板文件名为 `index.blade.php`。

```html
@extends('layout') @section('header', '这里是头部插槽') @section('content')
这里是内容插槽 @endsection @section('footer') 这里是底部插槽 @endsection
```

其中 `layout` 为 `layout.blade.php` 文件的文件名。

简单理解相当于我们建立一个公共模板在公共模板上面标记`@yield`插槽，然后在编写模板的时候引入`@extends`该公共模板然后通过 `@section` 在插槽内插入内容或者 html。

## 显示变量

开发者可以使用变量标签进行内容输出，变量为页面定义的变量。

```html
你好，{{ $name }}
```

二维数组标签

```html
你好，{{ $item->title }}
```

## 显示 html

如果变量内容为 html 使用该标签进行输出。

```html
{!! $content !!}
```

## 判断标签

常用判断标签。

```html
@if ($num == 1) 如果数量等于1 @elseif ($num > 1) 如果数量大于1 @else
如果数量小于1 @endif
```

## 循环标签

用于数组或对象数组循环。

```html
@foreach ($items as $item)
<p>{{$item->name}}</p>
@endforeach @foreach ($items as $item) @if ($loop->first) 循环第一个显示 @endif
@if ($loop->last) 循环最后一个显示 @endif

<p>{{$item->name}}</p>
@endforeach
```

## 标题关键词

每个页面均可使用该标签统一调用。

```html
<title>{{$meta->title}}</title>
<meta name="Keywords" content="{{$meta->keywords}}" />
<meta name="Description" content="{{$meta->description}}" />
```
