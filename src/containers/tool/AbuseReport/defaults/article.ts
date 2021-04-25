import { REPORT } from '@/constant'

const items = [
  {
    title: '重复内容',
    raw: REPORT.ARTICLE.DUPLICATE,
    checked: false,
    // info: "",
    detail: '',
  },
  {
    title: '标题党',
    raw: REPORT.ARTICLE.CLICKBAIT,
    checked: false,
    detail: '',
  },
  {
    title: '硬广，软广',
    raw: REPORT.ARTICLE.AD,
    checked: false,
    detail: '',
  },
  {
    title: '侵权内容',
    raw: REPORT.ARTICLE.VIOLATION,
    checked: false,
    detail: '',
  },
  {
    title: '坏问题',
    raw: REPORT.ARTICLE.BAD_QUESTION,
    checked: false,
    detail: '',
  },
  {
    title: '违法违规',
    raw: REPORT.ARTICLE.LAWS,
    checked: false,
    detail: '',
  },
  {
    title: '其他',
    raw: REPORT.ARTICLE.OTHERS,
    checked: false,
    detail: '',
  },
]

export default items
