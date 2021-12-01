import { REPORT } from '@/constant'

const items = [
  {
    title: '重复内容',
    raw: REPORT.ARTICLE.DUPLICATE,
    checked: false,
    detail: '已有类似的讨论、问题，或者常见的日经贴、月经贴。',
  },
  {
    title: '标题党',
    raw: REPORT.ARTICLE.CLICKBAIT,
    checked: false,
    detail:
      '包括但不限于有意夸大，制造焦虑，引战等引流内容。一般来说含有「史上」，「xx万字吐血整理」，「必问/必考」以及包含一个甚至多个「!」或 emoji 的标题大概率属于此类。',
  },
  {
    title: '传单',
    raw: REPORT.FLYER,
    checked: false,
    detail: '包括但不限于各种厂商活动推广，公众号、面经推广等硬/软广内容。',
  },
  {
    title: '侵权内容',
    raw: REPORT.VIOLATION,
    checked: false,
    detail:
      '包括但不限于盗版话题讨论，未授权转载，人身攻击，无根据造谣等内容。',
  },
  {
    title: '劣质问题',
    raw: REPORT.ARTICLE.BAD_QUESTION,
    checked: false,
    detail:
      '求助类问题没有明确的上下文信息，或所提问题过于宽泛、空洞。比如：怎样学习操作系统 ? ',
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
      '其他你认为不适合发表在本站的内容。如果你有合适的标签能代表此类内容，请在提交时一并附上。',
  },
]

export default items
