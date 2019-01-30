

styled-component 有优雅的主题实现, 可以在 props 包含我们自定义的主题信息。通过一个简单的[函数](https://github.com/coderplanets/coderplanets_web/blob/dev/utils/themes/index.js#L25) 封装后，我们就可以在每一个 styles 文件中轻松的引入主题支持: 

```js
export const RespectText = styled.div`
  color: ${theme('editor.placeholder')};
  display: block;
`
```
主题的 key 值可以参考 utils/theme/skils/cyan.js 

```js

const cyan = {
  name: 'cyan',
  logoText: descText,
  cover: primaryColor,
  coverIndex: '#F9FCFC',
  contrastFg: '#eca014',
  htmlBg: bannerBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

....

```

目前支持的所有主题都在 utils/theme/skins 下，未来会持续扩展.

```bash
skins/
├── cyan.js
├── github.js
├── green.js
├── index.js
├── iron_green.js
├── monokai.js
├── purple.js
├── solarized_dark.js
└── yellow.js
```

你和在 "搜索框" 中(或点击自己的头像进入用户中心)切换其他主题主题: 


![image](https://user-images.githubusercontent.com/6184465/51956903-69c03d00-2484-11e9-9c2a-b8ae844b5b3f.png)

![image](https://user-images.githubusercontent.com/6184465/51957049-fc60dc00-2484-11e9-89cf-ca3f56b07c34.png)

![image](https://user-images.githubusercontent.com/6184465/51956956-a2f8ad00-2484-11e9-9546-e73a75d9fb5f.png)

