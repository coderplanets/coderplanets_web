import { REPORT } from '@/constant'

const items = [
  {
    title: '不良信息',
    raw: REPORT.COMMENT.BAD_INFO,
    checked: false,
    detail:
      '包括但不限于无意义灌水、阴阳怪气、杠精言论、制造焦虑、人身攻击、低俗言论、不友善、无聊引战等内容。',
  },
  {
    title: '跑题内容',
    raw: REPORT.COMMENT.OFF_TOPIC,
    checked: false,
    detail: '所讨论或回答的内容与主题无关，且没有建设性。',
  },
  {
    title: '传单',
    raw: REPORT.FLYER,
    checked: false,
    detail: '包括但不限于各种厂商活动推广，公众号、面经推广等各种硬/软广内容。',
  },
  {
    title: '侵权内容',
    raw: REPORT.VIOLATION,
    checked: false,
    detail: '包括但不限于盗版话题讨论，无根据造谣等内容。',
  },
  {
    title: '违法违规',
    raw: REPORT.LAWS,
    checked: false,
    detail:
      '包括但不限于黄赌毒、涉政，涉暴以及民族宗教等明确不适合在本站讨论的信息。一经查实，相关账号将同时被永久封禁。',
  },
  {
    title: '其他',
    raw: REPORT.OTHERS,
    checked: false,
    detail:
      '其他你认为不适合发表在讨论区的内容。如果你有合适的标签能代表此类内容，请在提交时一并附上。',
  },
]

export default items
