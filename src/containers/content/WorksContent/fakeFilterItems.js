import { ICON_CMD } from '@/config'

const filtersItems = [
  {
    id: '0',
    title: '流行趋势',
    icon: `${ICON_CMD}/navi/location.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '本周',
      },
      {
        id: '2',
        title: '本月',
      },
      {
        id: '3',
        title: '今年',
      },
    ],
  },
  {
    id: '3',
    title: '发布平台',
    icon: `${ICON_CMD}/navi/money-yuan.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '网站',
      },
      {
        id: '2',
        title: 'Android',
      },
      {
        id: '3',
        title: 'iOS',
      },
    ],
  },
  {
    id: '1',
    title: '排 序',
    icon: `${ICON_CMD}/navi/topic.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '最新发布',
      },
      {
        id: '2',
        title: '浏览最多',
      },
    ],
  },
]

export default filtersItems
