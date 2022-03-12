# 最可爱的社会主义核心价值观

jpg文件的文件头为FFD8FF，文件尾为FFD9

使用WinHex或010editor分析可知，文件末尾被添加了一堆base64编码

![image-20220123231332598](wp.assets/image-20220123231332598.png)

解码得到社会主义核心价值观编码的内容

![image-20220123231416901](wp.assets/image-20220123231416901.png)

继续解码得到颜文字编码的内容（aaencode）

![image-20220123231448724](wp.assets/image-20220123231448724.png)

继续解码得到flag

![image-20220123231527656](wp.assets/image-20220123231527656.png)

flag：

```
actf{Socialism_is_Good}
```

