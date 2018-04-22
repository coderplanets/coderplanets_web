
## 热加载导致代码错误

新的 react-hot-loader v4 在代码热加载的时候并不会像以前一样重新触发
componentDidMount 系列钩子函数， 见 [issues
771](https://github.com/gaearon/react-hot-loader/issues/771) [issue
64](https://github.com/gaearon/react-hot-loader/issues/64)。所以截止目前，如果你改动了 logic
层，你需要重新刷新页面。。


