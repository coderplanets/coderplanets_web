import { ICON_CMD } from '@config'

const filtersItems = [
  {
    id: '0',
    title: '城 市',
    icon: `${ICON_CMD}/navi/location.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '北京',
      },
      {
        id: '2',
        title: '上海',
      },
      {
        id: '3',
        title: '杭州',
      },
      {
        id: '4',
        title: '深圳',
      },
      {
        id: '5',
        title: '成都',
      },
    ],
  },
  {
    id: '101',
    title: '话 题',
    icon: `${ICON_CMD}/navi/topic.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '大前端',
      },
      {
        id: '2',
        title: '机器学习',
      },
      {
        id: '3',
        title: '架构',
      },
      {
        id: '4',
        title: '系统运维',
      },
      {
        id: '5',
        title: '体育活动',
      },
    ],
  },
  {
    id: '102',
    title: '费 用',
    icon: `${ICON_CMD}/navi/money-yuan.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '免费',
      },
      {
        id: '2',
        title: '50 以下',
      },
      {
        id: '3',
        title: '50-100',
      },
      {
        id: '4',
        title: '100-200',
      },
      {
        id: '5',
        title: '200 以上',
      },
    ],
  },
  {
    // 非 IT，设计类的网站
    id: '103',
    title: '人 数',
    icon: `${ICON_CMD}/navi/chair.svg`,
    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '10-30',
      },
      {
        id: '2',
        title: '30-50',
      },
      {
        id: '3',
        title: '50-100',
      },
      {
        id: '4',
        title: '100以上',
      },
    ],
  },
]

export default filtersItems
