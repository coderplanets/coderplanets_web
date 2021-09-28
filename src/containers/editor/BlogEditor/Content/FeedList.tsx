import { FC, memo } from 'react'

import FeedItem from './FeedItem'
import RSSItem from './RSSItem'

import { Wrapper, Inputer, Hint } from '../styles/content/feed_list'

const list = [
  {
    id: '1',
    title: 'HTML slot 插槽元素深入',
    digest:
      '本文应该是目前最深入最细致的介绍 HTML slot 插槽元素的文章了，如果您对Web 组件开发感兴趣，则本文内容不容错过。',
    linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/',
    published: 'Sun, 15 Aug 2021 04:40:49 +0000',
  },
  {
    id: '2',
    title: 'SVG任意基本图形转path路径',
    digest:
      '虽然不属于常用场景，但是对于部分开发者却很需要，所以还是专门分享了出来，希望可以帮到需要的人。',
    linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/',
    published: 'Sat, 07 Aug 2021 15:18:51 +0000',
  },
  {
    id: '3',
    title: '为什么HTML <picture>元素很少见人使用？',
    digest:
      '元素还是很实用的，带大家了解下，顺便讲讲为什么这个HTML属性平时项目开发很少见人使用',
    linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/07/html-picture/',
    published: 'Mon, 26 Jul 2021 15:35:20 +0000',
  },
  {
    id: '4',
    title: '借助HTML ping属性实现数据上报',
    digest:
      'Navigator.sendBeacon() 是浏览器提供的 JS 层面的数据上报方法，而 HTML ping 属性则是浏览器在 HTML 层面提供的 POST 数据埋点上报方法，比预想的好实用些，大家可以过来了解下，说不定就可以用起来。',
    linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/09/html-ping',
    published: 'Tue, 14 Sep 2021 08:02:05 +0000',
  },
  {
    id: '5',
    title: 'APNG在线制作、兼容、播放和暂停',
    digest:
      'APNG用起来还是挺爽的，整体来看，要比CSS动画+图片序列实现动画要更好，本文就基于实际开发经验，把如何控制APNG，使用注意事项等，通过文字描述加演示告知大家，让大家可以快速上手使用。',
    linkAddr:
      'https://www.zhangxinxu.com/wordpress/2021/09/apng-maker-pause-play-ie/',
    published: 'Sun, 12 Sep 2021 09:12:07 +0000',
  },
  {
    id: '6',
    title: '不使用file类型input也能触发文件上传',
    digest:
      '介绍全新的File System Access API，也就是文件系统访问API，可以无需专门的 HTML 文件选择控件，纯 JS 代码就可以触发本地文件的选择，支持文件类型的指定，有demo，有代码示意，可以进来了解下。',
    linkAddr:
      'https://www.zhangxinxu.com/wordpress/2021/08/file-system-access-api/',
    published: 'Sun, 22 Aug 2021 02:43:11 +0000',
  },
  {
    id: '7',
    title: '关于《CSS新世界》这本书',
    digest:
      '推荐我的新书《CSS新世界》，我为自己代言，点击进入了解关于本书更多信息。',
    linkAddr:
      'https://www.zhangxinxu.com/wordpress/2021/08/css%e6%96%b0%e4%b8%96%e7%95%8c/',
    published: 'Mon, 16 Aug 2021 17:46:28 +0000',
  },
]

const FeedList: FC = () => {
  return (
    <Wrapper>
      <RSSItem left={12} bottom={14} />
      <Inputer placeholder="// 按标题搜索" />
      <Hint>请选择你要提交的博客, 可使用标题搜索</Hint>
      {list.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default memo(FeedList)
