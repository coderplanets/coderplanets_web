Styled-component has an elegant theme implementation that can contain our custom theme information in props. After a simple [function](https://github.com/coderplanets/coderplanets_web/blob/dev/utils/themes/index.js#L25) wrapped, we can easily introduce the theme in each styles file. like:

```js
Export const RespectText = styled.div`
  Color: ${theme('editor.placeholder')};
  Display: block;
`
```

The key value of the theme can refer to utils/theme/skils/cyan.js

```js

Const cyan = {
  Name: 'cyan',
  logoText: descText,
  Cover: primaryColor,
  coverIndex: '#F9FCFC',
  contrastFg: '#eca014',
  htmlBg: bannerBg,
  Loading: {
    Basic: bannerBg,
    Animate: lighten(0.03, bannerBg),
  },
  Error: {
    Title: primaryColor,
    Desc: darken(0.1, primaryColor),
    Bg: lighten(0.02, contentBoxBg),
  },

....

```

All the topics currently supported are under utils/theme/skins and will continue to expand in the future.

```bash
Skins/
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

![image](https://user-images.githubusercontent.com/6184465/51738138-5fd7bc00-20c9-11e9-9242-4f730f42eab8.png)

![image](https://user-images.githubusercontent.com/6184465/51738172-767e1300-20c9-11e9-8a0f-d9089d671ace.png)
