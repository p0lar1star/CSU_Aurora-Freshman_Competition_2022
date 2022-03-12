# 2022新生赛-babe-sqli-1

Author: DHao2001
Time: 2022/01/21

## 配置flag

修改`aurora-2022-babe-sqli1-docker/flag`内容即可

## 容器构建与启动

```console
cd aurora-2022-babe-sqli1-docker
sudo docker build -t aurora-babe-sqli-1:1.0.0 .
sudo docker run --name babe-sql1 -p 80:80 -d aurora-babe-sqli-1:1.0.0
```

