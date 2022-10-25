# ts + express + mongoose 模板

知识点:

- 自定义 Error
- 包装异常
- 中间件统一全局异常
- `Object.assign`
- `Object.defineProperty`
- 使用 morgan 日志和其他输出重定向
- src 下的目录结构
- 其他 ts 类型, mongoose 结合 ts 的知识点

不足: 刚开始还是用了 `babel` 来处理 `@` 别名, 但后面发现 `babel` 编译时不输出非 .ts 文件, 并且还输出了 .d.js 文件, 于是抛弃了 `babel`