# nginx
## Nginx 是什么
`Nginx`（即 `[engine x]`)，它是一个基于异步框架的网页服务器，同时，它也可以用作反向代理服务器、负载均衡服务器、邮件代理服务器和通用 `TCP/UDP` 代理服务器，最初由俄罗斯程序员 [Igor Sysoev](http://sysoev.ru/en/)编写实现。它在 [Yandex](http://www.yandex.ru/)、 [Mail.Ru](https://mail.ru/)等网站均有应用。

根据权威机构 [Netcraft](https://www.netcraft.com/) 2022年8月26日发布的[最新调查数据](https://news.netcraft.com/archives/2022/08/26/august-2022-web-server-survey.html)显示，`Nginx` 服务和代理已经超越 `Apache`，在主流网站中市场份额中占有率最高。可参考下图：

![nginx_market](https://tva1.sinaimg.cn/large/e6c9d24egy1h5m8bpm5fnj21960kyq4s.jpg)
## 为什么使用 Nginx
`Nginx` 最核心的是高性能，它可以让 `Web` 服务器在高并发压力下正常提高服务。基于事件驱动型设计、全异步的网络 `I/O` 处理机制、极少的进程间切换以及许多优化设计，使得 `Nginx` 天生善于处理高并发压力下的网络请求，同时`Nginx`降低了资源消耗，可以把服务器硬件资源发挥到极致。`Nginx` 的主要特性可概括如下：

![nginx_function](https://tva1.sinaimg.cn/large/e6c9d24egy1h5kapgx7nuj20u0124wgv.jpg)
## 如何使用
### Nginx 安装
首先是 `Nginx` 的安装，可以从 [`Nginx`官网](https://nginx.org/en/download.html)下载安装，具体安装步骤这里就不展开讲了（如果需要自己开发或者自定义 `Nginx` 相关模块，可以选择从源码构建，需要安装`GCC`、`PCRE`、`zlib`、`OpenSSL`等相关库，这里先作为了解，不展开）

### Nginx 配置文件
首先打开 `nginx.conf`，通过命令行 ` vi /usr/local/etc/nginx/nginx.conf` 查看配置项：

```shell
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       8080;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
}
```
### 常见命令
我们可以通过命令行 `nginx -h`，查看 `Nginx` 常见命令，如下

![nginx_help](assets/nginx-h.jpg)

对于 `Nginx` 来讲，日常一般应用使用最高频的配置文件就是 `nginx.conf` 了，这里我们以更改该配置文件为例，了解下会涉及到哪些命令行操作。

我们先将 `nginx.conf` 中监听的服务端口号改为 `8082`，目的是将 `Nginx` 的服务将由默认的 `http://localhost:80/` 转移到 `http://localhost:8082/`，配置更改如下

```shell
server {
    listen 8082;
}
```
由于 `Nginx` 对配置文件有严格的缩紧语法要求，所以当我们更改了配置文件后，可以通过命令行：

`nginx -t` 

对配置文件格式进行正确性检测，可以看到如下信息，表示配置文件语法正确无误：

```text
nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful
```
接着，我们需要重新加载 `Nginx` 配置，才能使刚才的更改生效，如下

```shell
nginx -s reload
```
生效后，我们访问 `http://localhost:8082/` 页面，可以看到 `Nginx` 默认页面已出现，配置已经生效

![nginx-port](assets/nginx-port.jpg)

如果我们要强制停止运行该服务，可使用
```shell
nginx -s stop
```
`-s` 参数其实是告诉 `Nginx` 程序向正在运行的 `Nginx` 服务发送信号量，`Nginx` 程序通过 `nginx.pid` 文件中得到 `master` 进程的进程 `ID`，再向运行中的 `master` 进程发送 `TERM` 信号来快速地关闭该服务。

我们也可以通过 `kill` 命令直接向 `nginx master` 进程发送 `TERM` 或者 `INT` 信号，如下
```shell
# 先查看当前运行进程
ps -ef | grep nginx

501 59054     1   0 10:21上午 ??         0:00.01 nginx: master process nginx -q 
501 60079 59054   0 10:54上午 ??         0:00.01 nginx: worker process 

# 直接 kill
kill -s SIGINT 59054 
or 
kill -s SIGTERM 59054
```

如果希望 `Nginx` 服务可以正常地处理完当前所有请求再停止服务，可以使用
```shell
nginx -s quit
```
其他命令可以使用 `nginx -h` 命令查询使用。
## 常见配置
### 静态资源文件
`Nginx` 作为网页服务器，可以指定静态资源文件所在位置，具体配置如下：
```shell
location / {
    #指定静态资源文件到桌面的 index.html 文件
    root   /Users/apple/Desktop/;
    index  index.html index.htm;
}
```
`nginx -s reload` 加载配置，查看页面，可以看到页面已经从默认页转到了我们指定的页面

![](https://files.mdnice.com/user/8106/ac84f5c7-f7c5-4306-b112-b24b7cb6d033.png)
### gzip
在日常开发过程中，我们经常会涉及到性能优化，特别是针对服务端返回的内容，而在 `Nginx` 中开启 `gzip` 就是一个有效的优化手段。

`nginx gzip` 配置可以参考 [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html)，示例配置如下：
```shell
#是否开启gzip模块，on表示开启，off表示关闭
gzip  on;
##设置允许压缩的页面最小字节(从header头的Content-Length中获取) ，当返回内容大于此值时才会使用gzip进行压缩,以K为单位,当值为0时，所有页面都进行压缩。建议大于1k
gzip_min_length 1000;
##设置用于处理请求压缩的缓冲区数量和大小。比如32 4K表示按照内存页（one memory page）大小以4K为单位（即一个系统中内存页为4K），申请32倍的内存空间，建议使用默认值
gzip_buffers  32 4k;
#用于识别http协议的版本，默认在http/1.0的协议下不开启gzip压缩
gzip_http_version  1.0;
#指定压缩的MIME类型,线上配置时尽可能配置多的压缩类型
gzip types  text/plain application/xml text/css text/xml application/javascript;
#可以让前端的缓存服务器缓存经过gzip压缩的页面; 表示在传送数据时，给客户端说明使用了gzip压缩
gzip_vary  on
#根据请求和响应启用或禁用代理请求的响应gzip压缩。请求被代理的事实是由Via请求头字段的存在决定的
gzip_proxied  expired no-cache no-store private auth;
```
开启压缩功能后，可以使用 `ab(Apache bench)` 命令进行压测，验证效果。
### 基于客户端 IP 地址的访问控制
`Nginx` 可以通过 [ngx_http_access_module](https://nginx.org/en/docs/http/ngx_http_access_module.html) 模块实现基于客户端 IP 地址的访问控制，配置如下：
```shell
location / {
    allow 10.37.129.2;
    allow 192.168.31.246;
    deny all;
}
```
通过以上配置，我们就可以实现访问 IP 白名单或者说黑名单，仅仅放行 `10.37.129.2`&`1192.168.31.246` 这两个 `IP`进行访问，其余 `IP` 一律返回 `403 Forbidden`，当然，也可以配置 `IP` 网段进行控制。
### 响应速度限制
结合 `IP` 地址的访问控制，更进一步，如果我们想要防止多个用户下载时占用过高的带宽，可以针对指定资源文件进行限速处理，比如我们针对 `mp4` 类型文件进行限制，当下载文件大小超过 `500k` 时，限制其下载速率为 `50k`，这里是不是可以联想到某知名网盘😂，可如下配置：
```shell
location /mp4/ {
    mp4;
    limit_rate_after 500k;
    limit_rate       50k;
}
```
#### 限制来自同一个地址的同时连接或请求的数量
如果有恶意攻击者对 `Web` 应用发起流量攻击，短时间内使用脚本无限制地请求`Web` 应用地址，就会造成该应用带宽流量上升，无法响应其他正常用户的请求，这时候我们可以使用[ngx_http_limit_conn_module](https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html)和[ngx_http_limit_req_module](https://nginx.org/en/docs/http/ngx_http_limit_req_module.html)**针对同一个地址的同时连接和请求的数量进行限制**，可参考如下配置

- 同一个地址的同时连接个数限制为 5
```shell
http {
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    ...
    server {
        ...
        location /download/ {
            limit_conn addr 5;
            #限制与虚拟服务器的连接总数
            limit_conn perserver 100；
        }
    }
}
```
- 同一个地址的同时请求的数量限制为 5，即平均每秒不超过 5 个请求，并且突发不超过 50 个请求，这里的限制机制采用了 [leaky bucket(漏桶算法)](https://en.wikipedia.org/wiki/Leaky_bucket)方法完成。
```shell
http {
    limit_req_zone $binary_remote_addr zone=one:10m rate=5r/s;
    ...
    server {
        ...
        location /search/ {
            limit_req zone=one burst=50;
        }
    }
}
```
#### 基于 IP 的地理定位

#### njs 脚本语言
#### 反向代理

#### 负载均衡

图像转换格式

## 原理相关


## 资料
- [Nginx 性能优化功能](https://www.cnblogs.com/kevingrace/p/10018914.html)
