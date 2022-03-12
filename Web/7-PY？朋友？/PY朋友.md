直接写Python脚本就可以解决问题：

```java
import requests

url = "http://xxx.xxx.xxx.xxx/"
new_url = url + "index.php"

for i in range(1000):
    content = requests.get(new_url).text
    new_url = url + content
    print(content)
```

