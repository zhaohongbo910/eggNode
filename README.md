# example



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### 目录结构层
egg-project
├── package.json  -- 
├── app.js (可选)  -- app.js 和 agent.js 用于自定义启动时的初始化工作，可选，具体参见启动自定义
├── agent.js (可选)
├── app
|   ├── router.js  -- 用于配置 URL 路由规则
│   ├── controller -- 用于解析用户的输入，处理后返回相应的结果
│   |   └── home.js
│   ├── service (可选) -- 用于编写业务逻辑层，可选，建议使用，
│   |   └── User.js
│   ├── middleware (可选) -- 中间件层
│   |   └── response_time.js
│   ├── schedule (可选)  -- 用于定时任务
│   |   └── my_task.js
│   ├── public (可选) --用于放置静态资源
│   |   └── reset.css
│   ├── view (可选) -- 视图层
│   |   └── home.tpl
│   └── extend (可选) -- 用于框架的扩展
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js  -- 用于配置需要加载的插件，
|   ├── config.default.js  config/config.{env}.js 用于编写配置文件，具体参见配置。
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test  -- 用于单元测试，
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
