import { REPORT } from '@/constant'

const items = [
  {
    title: '散播不良信息',
    raw: REPORT.USER.SPAMMER,
    checked: false,
    detail:
      '该用户所发布内容多为无意义灌水、阴阳怪气、杠精言论、制造焦虑、人身攻击、低俗言论、不友善、无聊引战等负能量内容。',
  },
  {
    title: '乱发传单',
    raw: REPORT.FLYER,
    checked: false,
    detail: '该用户所发布内容多为低质量产品/服务广告，标题党等 SEO 引流内容。',
  },
  {
    title: '滥用权限',
    raw: REPORT.USER.ABUSE_POWER,
    checked: false,
    detail: '该用户滥用社区管理权限，给社区造成不良影响或不必要的麻烦。',
  },
  {
    title: '违法违规',
    raw: REPORT.LAWS,
    checked: false,
    detail:
      '该用户发布过黄赌毒、涉政，涉暴以及民族宗教等明确不适合在本站讨论的信息。一经查实，账号将被永久封禁。',
  },
  {
    title: '其他',
    raw: REPORT.OTHERS,
    checked: false,
    detail:
      '该用户不适合本社区。如果你有合适的标签能代表此类账户，请在提交时一并附上。',
  },
]

export default items
