---
title: 环境搭建
group:
  title: 环境搭建
  order: 1
group:
path: /guide
title: 介绍
order: 1
---

# 环境搭建

## windows 环境搭建

### 软件安装

请到[phpstudy 官网](https://www.xp.cn/)自行下载最新版软件进行安装。

### 环境安装

打开小皮面板进入软件管理页面安装如下软件：

<img src="/images/windows/1.png" width="600" />

### 站点建立

进入网站新建立站点或使用原有站点目录，确保目录内为空，点击管理 - php 扩展 开启如下扩展：

<img src="/images/windows/2.png" width="300" />

### 执行命令

点击网站的 管理 - composer 并选择 php 版本为 7.4 以上，执行以下命令查看版本：

```shell
$ composer -v
```

如果版本低于 v2.0 请执行以下命令升级到最新版本：

```shell
$ composer self-update
```

### 系统安装

在 composer 命令行中执行以下命令进行系统安装，该命令会将系统安装在当前网站目录。

```shell
$ composer create-project duxphp/ravelcms ./
```

- 如果安装途中下载缓慢请切换 composer 源为阿里云镜像加快下载。

```shell
$ composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

- 如果在开发中遇到更新不及时可以还原默认源，请自行利用网络加速加快下载速度。

```shell
composer config -g --unset repos.packagist
```

### 环境设置

安装完毕后请关闭命令行打开网站设置版本与目录信息：

请将 php 版本选择为 `7.4` 及以上，根目录指向站点的 `public` 目录。

<img src="/images/windows/3.png" width="600" />

进入伪静态标签，根据环境使用设置如下伪静态规则：

```apacheconf
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### 启动服务

进入软件首页启动如下图的套件 (redis 需要滚动才能看到)：

<img src="/images/windows/4.png" width="600" />

### 完成安装

套件启动完毕后请打开浏览器访问网站域名进入系统安装向导即可完成系统安装。

## linux 环境搭建

### 宝塔安装

请根据 linux 系统选择对应的[宝塔脚本](https://www.bt.cn/bbs/thread-19376-1-1.html)进行安装

### 宝塔软件

进入宝塔`软件商店`安装以下软件

- php 7.4 +
- mysql 5.7 +
- nginx (任意版本)
- redis

安装 php7.4 后进入设置界面安装常用扩展

- fileinfo
- redis
- mcrypt
- imagemagick
- bz2

进入禁用函数界面删除以下禁用函数 (可根据 composer 安装时提示进行删除)

- stocket

### 建立站点

进入宝塔 `网站` 进行添加站点，添加后进入网站跟路径删除跟路径所有文件。

进入宝塔 `网站` php 命令行版本，切换版本到 `php-74` 或以上。

进入站点根目录文件管理打开终端执行以下命令进行系统安装：

```shell
$ composer create-project duxphp/ravelcms ./
```

- 如果安装途中下载缓慢请切换 composer 源为阿里云镜像加快下载。

```shell
$ composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

- 如果在开发中遇到更新不及时可以还原默认源，请自行利用网络加速加快下载速度。

```shell
composer config -g --unset repos.packagist
```

安装完毕后进入宝塔 `网站` 设置网站目录 - 运行目录为 `/public` ()，设置伪静态规则如下：

```
location / {
  try_files $uri $uri/ /index.php?$query_string;
}
```
