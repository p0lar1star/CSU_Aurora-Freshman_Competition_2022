可以使用php中include的php://filter伪协议来读取文件。

题目提示了flag在flag.php中，使用如下payload读取文件内容：

```php
php://filter/read=convert.base64-encode/resource=flag.php
```

读取到base64内容，直接base64解密就可获得flag。