得益于 [Next.js](https://github.com/zeit/next.js)  强大而优雅的实现， coderplanets 默认支持服务端渲染。 同时为了更精准的匹配搜索引擎的 spider, 使用了 [next-seo](https://github.com/garmeeh/next-seo) 作为增强，

以 community 页面为例：

![image](https://user-images.githubusercontent.com/6184465/51661322-7dceef00-1feb-11e9-9395-637e6682446b.png)

会自动注入以下 meta 标签：

![image](https://user-images.githubusercontent.com/6184465/51661309-73145a00-1feb-11e9-95fb-88cf34f7fed4.png)

更多用法请查看  [next-seo](https://github.com/garmeeh/next-seo) 文档

另外，本人对 SEO 的认识仅仅局限于 "好的内容就是最好的 SEO", 非常表层，如果您有 SEO 技巧或优化方面的经验，恳请分享和赐教。

需要指出的是，鉴于百度令人 XX 和 XXX 以及 XXXX 的种种行为，本项目在 /static/robot.txt 中默认屏蔽了百度的爬虫 ([#344](https://github.com/coderplanets/coderplanets_web/issues/344)), 特此说明。



