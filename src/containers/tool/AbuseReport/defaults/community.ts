import { REPORT } from '@/constant'

const items = [
  {
    title: '不良风气',
    raw: REPORT.COMMUNITY.BAD_ETHOS,
    checked: false,
    detail:
      '该社区内多数内容令人不适，存在明显违背主流价值观的内容，包括但不限于教唆炒X，无底线割韭菜等。',
  },
  {
    title: '违法违规',
    raw: REPORT.LAWS,
    checked: false,
    detail:
      '该社区经常出现黄赌毒、涉政，涉暴以及民族宗教等明确不适合在本站讨论的内容，一经查实，相关账号将同时被永久封禁。',
  },
  {
    title: '其他',
    raw: REPORT.OTHERS,
    checked: false,
    detail:
      '该社区不适合本站。如果你有合适的标签能代表此类账户，请在提交时一并附上。',
  },
]

export default items
