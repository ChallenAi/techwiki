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
  https://zamarrowski.github.io/react-ionicons/
