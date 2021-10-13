- npx create-react-app xx
- npm i react-router-dom
- npm i redux react-redux redux-promise-middleware
- npm i -S redux-logger

- npx -p @storybook/cli sb init
- x.css => x.module.css

- 实现 storybook 的 css module
  添加./storybook/webpack.config.js 即可

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
```

- 添加 ionicons 字体支持
  npm install --save react-ionicons
  https://github.com/zamarrowski/react-ionicons
  图标搜索参考
  https://react-ionicons.netlify.app/

- storybook 的图片问题
  图片放 public 文件夹，直接这样引用就可以了

```
<img src="/city.jpeg" className={styles.cover} />
```

- react 图片占位(可以替换成加载动画 xx.gif)
  <img
  src="/images/city.jpeg"
  onError={(e) => {
  e.target.onerror = null;
  e.target.src = "/images/placeholder.jpg";
  }}
  className={styles.cover}
  />

- react-syntax-highlighter 里引用了 highlighter.js 中所有语言的高亮，导致 bundle 变大(+800kb)，可以换成 import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter"; 这样就会切割成每个语言一个小 bundle.js

- 分析 build 以后的 bundle 大小构成： npm i source-map-explorer, "analyze": "source-map-explorer 'build/static/js/\*.js'"

- 简单的 ssr = hydrate + renderToString(<Element />, data)
