---
title: 基础开发
order: 2
toc: menu
---

## 目录结构

一个普通的使用 duxravel 做开发的项目目录结构大致如下：

<Tree>
  <ul>
    <li>
      app
      <small>laravel 基础应用目录</small>
      <ul>
        <li>
          Console
          <small>artisan相关命令</small>
        </li>
        <li>
          Exceptions
          <small>异常处理相关类目录</small>
        </li>
        <li>
          Http
          <small>laravel mvc应用结构，在 duxravel 中仅作为基础继承类于配置</small>
          <ul>
            <li>
              Controllers
              <small>公共控制器目录</small>
            </li>
            <li>
              Middleware
              <small>公共中间层目录</small>
            </li>
            <li>
              Kernel.php
              <small>http 核心文件</small>
            </li>
          </ul>
        </li>
        <li>
          Providers
          <small>服务提供者相关文件，仅公共基础服务</small>
        </li>
      </ul>
    </li>
    <li>
      bootstrap
      <small>启动引导</small>
      <ul>
        <li>
          app.php
          <small>应用初始化文件</small>
        </li>
        <li>
          cache
          <small>启动缓存文件</small>
          <ul>
            <li>
              duxravel.php
              <small>duxravel 应用缓存</small>
            </li>
            <li>
              packages.php
              <small>laravel 扩展包缓存</small>
            </li>
            <li>
              services.php
              <small>laravel 服务缓存</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      config
      <small>系统配置目录</small>
    </li>
    <li>
      database
      <small>数据库备份、迁移相关目录</small>
      <ul>
        <li>
          Factories
          <small>模型工厂类目录，负责数据生成</small>
        </li>
        <li>
          migrations
          <small>数据库迁移文件，负责数据表创建、修改、删除等</small>
        </li>
        <li>
          Seeders
          <small>数据填充类目录，填充数据表内容</small>
        </li>
      </ul>
    </li>
    <li>
      modules
      <small>duxravel 应用目录，所有的模块开发均在该目录</small>
    </li>
    <li>
      public
      <small>公共目录，该目录面向对外访问</small>
      <ul>
        <li>
          static
          <small>静态文件目录，存放 css、js、image等静态文件</small>
        </li>
        <li>
          themes
          <small>主题目录，针对前台访问的主题模板</small>
        </li>
        <li>
          upload
          <small>上传目录，本地上传文件目录</small>
        </li>
        <li>
          .htaccess
          <small>apache 伪静态配置</small>
        </li>
        <li>
          favicon.ico
          <small>站点图标</small>
        </li>
        <li>
          index.php
          <small>入口文件</small>
        </li>
        <li>
          robots.txt
          <small>蜘蛛爬虫限制</small>
        </li>
        <li>
          web.config
          <small>iis 伪静态配置</small>
        </li>
      </ul>
    </li>
    <li>
      resources
      <small>内置资源目录，存放前端编译源文件、多语言文件等内部文件</small>
    </li>
    <li>
      storage
      <small>存储目录，存放系统、模板缓存、日志等文件</small>
    </li>
    <li>
      tests
      <small>测试目录，系统开发的测试用例</small>
    </li>
    <li>
      vendor
      <small>扩展包目录，composer 安装扩展目录</small>
    </li>
    <li>
      .editorconfig
      <small>编辑器配置文件</small>
    </li>
    <li>
      .env
      <small>环境配置文件 (默认 git 不同步)</small>
    </li>
    <li>
      .env.example
      <small>环境配置文件示例</small>
    </li>
    <li>
      .gitattributes
      <small>git 设置文件</small>
    </li>
    <li>
      .gitignore
      <small>git 过滤文件</small>
    </li>
    <li>
      .styleci.yml
      <small>StyleCI 集成配置文件</small>
    </li>
    <li>
      artisan
      <small>artisan 命令启动文件</small>
    </li>
    <li>
      composer.json
      <small>composer 配置文件</small>
    </li>
    <li>
      phpunit.xml
      <small>单元测试配置文件</small>
    </li>
    <li>
      README.md
      <small>系统说明文件</small>
    </li>
    <li>
      server.php
      <small>内置web启动文件</small>
    </li>
  </ul>
</Tree>

为了方便开发 duxravel 采用了 [HMVC](https://baike.baidu.com/item/hmvc/8470262?fr=aladdin) 应用式结构，为了区分 laravel 的应用，开发目录使用 `modules`
目录和对应的命名空间 `\Modules\*` 作为应用基础目录。

## 第一个应用

我们可以把 duxravel 基础系统比作一个手机操作系统，手机里每一个 app 代表一个独立的功能，我们可以安装各种软件来满足日常使用，相对应的我们可以开发各种 duxravel 的应用来满足项目需求。

每个 duxravel 应用均为独立功能、独立目录相互之间通过系统内 hook 做通讯，同时又能保证每个功能开发互不干扰即插即用，满足团队协作开发需求。

### 应用生成

在项目目录中执行以下命令可生成一个基础的应用结构 `test` 为应用模块名

```shell
$ php artisan app:make test
```

执行成功后会在 `modules` 目录下生成以下目录结构

<Tree>
  <ul>
    <li>
      Test
        <ul>
          <li>Admin <small>后台控制器</small></li>
          <li>Api <small>接口控制器</small></li>
          <li>
            Config <small>配置文件</small>
            <ul>
              <li>Config.php  <small>应用信息配置</small></li>
            </ul>
          </li>
          <li>Model <small>数据模型</small></li>
          <li>
            Route <small>路由</small>
            <ul>
              <li>AuthAdmin.php  <small>后台授权路由，登录后路由</small></li>
            </ul>
          </li>
          <li>
            Service <small>服务接口</small>
            <ul>
              <li>Menu.php  <small>菜单服务，提供系统后台菜单等菜单配置</small></li>
            </ul>
          </li>
          <li>
            View
            <ul>
              <li>Admin <small>后台模板目录</small></li>
            </ul>
          </li>
        </ul>
    </li>
  </ul>
</Tree>

进入后台会在菜单列表中出现一个名称为 `菜单` 的链接，此时我们只生成了应用基础结构并未生成控制器模型等。

### 后台控制器生成

继续执行以下命令生成控制器与对应的路由和菜单，`test`为刚刚生成的应用名。

```shell
$ php artisan app:make-admin test
```

执行后询问类名与功能名，我们输入类名为 `test` 功能名为 `测试`进行生成。

查看应用目录下的 `Admin` 目录中生成了 `Test.php` 文件，文件内容如下：

```php

<?php

namespace Modules\Test\Admin;

use Duxravel\Core\UI\Form;
use Duxravel\Core\UI\Table;

class Test extends \Modules\System\Admin\Expend
{

    public string $model = \Duxravel\Core\Model\Base::class;

    protected function table(): Table
    {
        $table = new Table(new $this->model());
        $table->title('测试');
        return $table;
    }

    public function form(int $id = 0): Form
    {
        $form = new Form(new $this->model());
        $form->title('测试');
        return $form;
    }

}

```

查看应用目录下的 `route` 目录中的 `AuthAdmin.php` 文件发现生成了对应的路由配置：

```php

<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix'   => 'test',
    'auth_app' => '应用名称'
], function () {
    Route::group([
        'auth_group' => '测试'
    ], function () {
        Route::manage(\Modules\Test\Admin\Test::class)->make();
    });
    // Generate Route Make
});

```

查看应用目录下的 `Service` 目录中的 `Menu.php` 文件发现生成了对应的菜单配置：

```php

<?php

namespace Modules\Test\Service;

/**
 * 系统菜单接口
 */
class Menu
{
    /**
     * 获取菜单结构
     */
    public function getAdminMenu()
    {
        return [
            'test' => [
                'name' => '菜单',
                'icon' => '',
                'order' => 10,
                'menu' => [
                    [
                        'name' => '菜单',
                        'order' => 0,
                        'menu' => [
                            [
                                'name' => '测试',
                                'url' => 'admin.test.test',
                            ],
                            // Generate Menu Make
                        ]
                    ],
                ],
            ],

        ];
    }
}

```

此时我们进入后台刷新页面点击左侧`菜单`链接后，可以看到刚刚生成对应的子菜单 `测试`，这时点击进入后会进入异常页面，接下来继续生成数据模型。

### 模型生成

继续执行以下命令生模型与对应数据库表，`test`为应用名。

```shell
$ php artisan app:make-model test
```

执行后询问表名与主键名，输入表名为 `test` 主键名为 `test_id` 进行生成。

执行成功后发现应用目录下的 `Model` 目录中增加了一个模型类文件 `Test.php`，内容如下：

```php
<?php

namespace Modules\Test\Model;

/**
 * class Test
 * @package Modules\Test\Model
 */
class Test extends \Duxravel\Core\Model\Base
{

    protected $table = 'test';

    protected $primaryKey = 'test_id';

}
```

打开应用的后台控制器文件 `Test/Admin/Test.php` 修改对应的模型类文件为当前生成的文件类。

将以下代码：

```php
public string $model = \Duxravel\Core\Model\Base::class;
```

替换为以下代码：

```php
public string $model = \Modules\Test\Model\Test::class;
```

### 增加表格与表单元素

默认生成的后台控制器代码仅包含基础的引用，还需要增加对应的功能与字段，打开后台控制器类进行增加代码。

在 表格 `table` 方法中增加一列 `文本展示` 和 `编辑` `删除` 链接，并增加一个 `添加` 按钮和 `搜索` 筛选：

```php
protected function table(): Table
{
    $table = new Table(new $this->model());
    $table->title('测试');

    $table->filter('搜索', 'title')->text('请输入标题搜索')->quick();

    $table->action()->button('添加', 'admin.test.test.page', ['model' => $this->modelId])->icon('plus');

    $table->column('标题', 'title');

    $column = $table->column('操作')->width('180')->align('right');
    $column->link('编辑', 'admin.test.test.page', ['id' => 'test_id']);
    $column->link('删除', 'admin.test.test.del', ['id' => 'test_id'])->type('ajax')->data(['type' => 'post']);
    return $table;
}
```

在表单 `form` 方法中设置表单提交的路由并增加一个 `card` 元素，在 `card` 内增加一个文本字段 `title`：

```php
public function form(int $id = 0): Form
{
    $form = new Form(new $this->model());
    $form->action(route('admin.test.test.save', ['id' => $id]));
    $form->title('测试');
    $form->card(function (Form $form) {
        $form->text('标题', 'title');
    });
    return $form;
}
```

打开数据库表 `test` 表增加一个字段名为 `title` 类型为 `VARCHAR` 的字段。

### 测试使用

此时我们创建了一个基础的测试应用，可以实现增删查改功能，访问后台左侧的 `菜单` - `测试` 进行功能的测试使用。
