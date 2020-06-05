const cache = {
  mine: {}, // 登录的时候会获取信息填充， Todo(ssr): cookie登录的时候，json里除了预渲染数据也有mine字段
  user: {},
};

export default cache;
