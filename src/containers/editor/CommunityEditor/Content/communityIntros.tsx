import { ICON_BASE } from '@/config'
import { HCN } from '@/constant'

const COMMUNITY_INTRO = {
  PUBLIC: {
    title: '什么是公共社区?',
    desc: '编程语言，编程框架，DevOps 等公共领域的社区，包含帖子，雷达，博客, 101，分布地图，招聘等版块。志愿者参与日常维护管理。',
    threads: ['帖子', '雷达', '博客', '酷导航', '成员分布', '工作'],
    demos: [
      {
        title: 'javascript',
        raw: 'JavaScript',
        logo: `${ICON_BASE}/pl/javascript.png`,
      },
      {
        title: 'React',
        raw: 'react',
        logo: `${ICON_BASE}/framework/react.png`,
      },
      {
        title: 'Phoenix',
        raw: 'phoneix',
        logo: `${ICON_BASE}/framework/phoenix.png`,
      },
      {
        title: 'Elixir',
        raw: 'elixir',
        logo: `${ICON_BASE}/pl/elixir.png`,
      },
      {
        title: 'Nim',
        raw: 'Nim',
        logo: `${ICON_BASE}/pl/nim.png`,
      },
    ],
  },
  WORKS: {
    title: '什么是作品社区?',
    desc: '为你的作品讨论需求，收集反馈，公布进度等，包含帖子，看板，技术栈，团队信息等版块。管理权限属于作者。',
    threads: ['讨论', '看板', '技术栈', '团队'],
    demos: [
      {
        title: 'CoderPlaents',
        raw: HCN,
        logo: '',
      },
    ],
  },
  TEAM: {
    title: '什么是团队社区?',
    desc: '为你的团队收集意见反馈，展示作品，动态，招聘等的专门社区。管理权限属于团队成员。',
    threads: ['帖子', '博客', '作品', '技术栈', '工作'],
    demos: [
      {
        title: 'CP-feedback',
        raw: HCN,
      },
    ],
  },
  CITY: {
    title: '什么事同城社区？',
    desc: '以城市为单元的社区，包含同城的话题讨论，酷团队，作品以及工作招聘等。志愿者参与日常维护管理。',
    threads: ['帖子', '酷团队', '作品', '工作'],
    demos: [
      {
        title: '北京',
        raw: 'beijing',
        logo: `${ICON_BASE}/city/beijing.svg`,
      },
      {
        title: '上海',
        raw: 'shanghai',
        logo: `${ICON_BASE}/city/shanghai.svg`,
      },
      {
        title: '杭州',
        raw: 'hangzhou',
        logo: `${ICON_BASE}/city/hangzhou.svg`,
      },
      {
        title: '深圳',
        raw: 'shenzhen',
        logo: `${ICON_BASE}/city/shenzhen.svg`,
      },

      {
        title: '成都',
        raw: 'chengdu',
        logo: `${ICON_BASE}/city/chengdu.svg`,
      },
    ],
  },
}

export default COMMUNITY_INTRO
