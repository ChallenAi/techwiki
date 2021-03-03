import React from "react";
import Editor from "./index";

export default {
  title: "Widgets",
};

export const FragmentEditor = () => {
  return (
    <div style={{ margin: "280px 300px" }}>
      <Editor
        content="
        nodejs .Dockerfile示例

```Dockerfile
# .Dockerfile

# 设置基础镜像 和 维护者

FROM example.com/node:8

MAINTAINER username@example.com

# 设置env环境

ENV HTTP_PORT 8000

# 设置工作目录 和 复制本地镜像到容器中

COPY . /app

WORKDIR /app

# npm install

RUN npm install

# 暴露的端口

EXPOSE 8000

# 命令

CMD ['npm', 'start']
```
        "
      />
    </div>
  );
};
