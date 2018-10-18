## 框架内置基础对象
> 包括从 Koa 继承而来的 4 个对象（
  Application, 
  Context, 
  Request, 
  Response) 
  以及框架扩展的一些对象
  （Controller, Service, Helper, Config, Logger）

### Application

Application 是全局应用对象，在一个应用中，只会实例化一个，它继承自 Koa.Application，在它上面我们可以挂载一些全局的方法和对象。我们可以轻松的在插件或者应用中扩展 Application 对象。
