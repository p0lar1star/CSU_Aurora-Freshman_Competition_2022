flag.zip中存在和readme.md相同的文件，根据提示进行了解。此处为zip明文攻击。

![image-20211001122235605](C:\Users\86199\AppData\Roaming\Typora\typora-user-images\image-20211001122235605.png)

注意明文攻击需要完全相同的加密算法，如这里文件内使用store，则构造readme.zip时也得使用store算法。

![image-20211001122625378](C:\Users\86199\AppData\Roaming\Typora\typora-user-images\image-20211001122625378.png)

![image-20211001122720547](C:\Users\86199\AppData\Roaming\Typora\typora-user-images\image-20211001122720547.png)

使用archpr明文攻击。

![image-20211001123017145](C:\Users\86199\AppData\Roaming\Typora\typora-user-images\image-20211001123017145.png)

经过1m41s，明文攻击成功。

flag：Aurora{Happy_Nati0na1_Day!with_m1sc!}