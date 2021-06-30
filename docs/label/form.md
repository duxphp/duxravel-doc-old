---
title: 表单标签
order: 3
toc: menu
---

## 基础说明

表单标签用于调用后台应用中的自定义表单数据。

## 表单列表

基础标签模板如下：

```html
@form()
<div>{{ $item->name }}</div>
@endform
```

输出后的内容：

```html
<div>自定义字段值</div>
```

可以为循环列表指定参数：

```html
@form(['参数1' => 参数值2, '参数2' => 参数值2])
<li>{{$item->title}}</li>
@endform
```

支持参数如下：

| 参数  | 示例值 | 说明     |
| ----- | ------ | -------- |
| id    | 1      | 表单 id  |
| page  | true   | 是否分页 |
| limit | 10     | 查询条数 |

循环内字段为表单设计器中定义字段。

## 列表分页

默认输出顶级菜单，可以使用以下内循环来输出子菜单：

```html
@menu()
<ul>
  {{ $item->name }} @foreach ($item->children as $vo)
  <li>{{$vo->name}}</li>
</ul>
@endmenu
```

## 表单列表页

## 列表页面

在列表页面 `http://localhost/form/list/1` 中可使用的页面标签。

```html
{{$formInfo->name}}
```

## 详情页面

在详情页面 `http://localhost/form/info/1` 中可使用的页面标签。

```html
{{$info->自定义字段}} {{$formInfo->name}}
```

## 表单提交

开发者可自行编写表单 html 元素用于表单提交，表单提交需要满足以下条件：

- 表单设置中打开`独立管理`
- 表单设置中打开`外部提交`

基础表单 html 如下：

```html
<form
  method="post"
  enctype="multipart/form-data"
  action="{{route('web.form.push', ['id' => 1])}}"
>
  <h3>文本框</h3>
  <input name="title" type="text" />

  <h3>单选</h3>
  <label><input name="title" type="radio" value="选项一" /> 选项一</label>
  <label><input name="title" type="radio" value="选项二" /> 选项二</label>

  <h3>单图片上传</h3>
  文件：<input name="images" type="file" />

  <h3>多图片上传</h3>
  文件：<input name="images[]" type="file" /> 文件：<input
    name="images[]"
    type="file"
  />
  文件：<input name="images[]" type="file" />

  <h3>验证码</h3>
  <div>
    <img src="{{ captcha_src() }}" /> <input type="text" name="captcha" />
  </div>

  <input type="hidden" name="_token" value="{{csrf_token()}}" />
  <button type="submit" name="check">提交</button>
</form>
```

其中 `action` 中 `url`参数为表单 id，表单中含有隐藏字段 `_token` 用于 `csrf` 验证，同时必须填写图形验证码，图形验证码可以通过刷新页面或 ajax 请求 `http://localhost/captcha/api/math` 进行刷新。
