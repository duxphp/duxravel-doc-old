---
title: 数据模型
order: 2
toc: menu
---

## 基础说明

数据模型主要继承 laravel 的 [Eloquent](https://learnku.com/docs/laravel/8.x/eloquent/9406)，并在此基础上增加了一些统一定义和扩展方法。

## 模型生成

使用以下命令生成应用内的模型与数据表，`test` 为指定应用名。

```shell
$ php artisan app:make-model test
```

## 模型继承

应用内模型应该继承以下基础模型类：

```php
class Test extends \Duxravel\Core\Model\Base
```

为统一开发习惯基础类实现了以下预设功能：

- 时间戳：创建、更新、删除时间使用了时间戳。

- 时间字段：将 `created_at`、`updated_at` 和 `deleted_at` 字段变更为 `create_time`、`update_time` 和 `delete_time`

## 模型扩展

duxravel 实现了一些常用模型扩展和引入了第三方扩展模型功能。

在模型类中引入对应功能类 `trait` 即可使用相关功能。

### 自定义表单

配合后台的自定义表单功能，可以对任意模型进行内容字段扩展。

```php
use Duxravel\Core\Traits\Form;
```

#### 表单数据

表单数据使用关联模型，可以通过关联模型查询对应数据。

```php
$info = Model::find(1);
$info->form->data->xxx;
```

#### 数据保存

可使用 `formSave` 方法保存关联表单数据。

```php
/**
 * 表单数据保存
 * $formId 表单id
 * $data 表单数据
 */
Model::find(1)->formSave($formId, $data = []);
```

#### 数据删除

可使用 `formDel` 方法保存关联表单数据。

```php
Model::find(1)->formDel();
```

### 访客统计

引入该类可以对任意模型记录进行 pv、uv 统计

```php
use Duxravel\Core\Traits\Visitor;
```

#### 增加访客

```php
/**
 * 增加访客数据
 * $driver 访客来源
 */
Model::find(1)->viewsInc(string $driver = 'web');
```

#### 删除访客

```php
Model::find(1)->viewsDel();
```

#### 获取访问、访客量

访客数据使用关联模型，可以通过关联模型查询对应数据。

```php
$info = Model::find(1);
$info->views->pv;
$info->views->uv;
```

#### 获取天数内每天访客数据

```php
$info = Model::find(1);
$data = $info->viewsData($day = 7);
foreach ($data as $item) {
    //
}
```

### 树形结构

使用 [laravel-nestedset](https://github.com/lazychaser/laravel-nestedset) 获取树形结构功能。

```php
    use \Kalnoy\Nestedset\NodeTrait;
```

### TAG 标签

使用 [laravel-tagging](https://github.com/rtconner/laravel-tagging) 获取内容标签功能。

```php
    use \Conner\Tagging\Taggable;
```
