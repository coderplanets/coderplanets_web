import { ICON_CMD } from './assets'

const LABEL_POOL = {
  default: {
    iconSrc: `${ICON_CMD}/extra_tag.svg`,
  },
  city: {
    iconSrc: `${ICON_CMD}/city_map.svg`,
  },
  salary: {
    iconSrc: `${ICON_CMD}/money_yuan.svg`,
    data: [
      '2k以下',
      '2k-5k',
      '5k-10k',
      '10k-15k',
      '15k-25k',
      '25k-50k',
      '50k以上',
    ],
  },
  exp: {
    iconSrc: `${ICON_CMD}/footer_exp.svg`,
    data: ['不限', '应届', '3年以下', '3-5年', '5-10年', '10年以上'],
  },
  education: {
    iconSrc: `${ICON_CMD}/profile_education.svg`,
    data: ['不限', '大专', '本科', '硕士', '博士'],
  },
  finance: {
    data: [
      '未融资',
      '天使轮',
      'A轮',
      'B轮',
      'C轮',
      'D轮以上',
      '已上市',
      '不需融资',
    ],
    iconSrc: `${ICON_CMD}/stock2.svg`,
  },
  scale: {
    iconSrc: `${ICON_CMD}/footer_scale.svg`,
    data: [
      '少于15人',
      '15-50人',
      '50-150人',
      '150-500人',
      '500-2000人',
      '2000人以上',
    ],
  },
  field: {
    iconSrc: `${ICON_CMD}/footer_field.svg`,
    data: [
      '互联网',
      '电子商务',
      '金融',
      '企业服务',
      '教育',
      '游戏',
      'O2O',
      '区块链',
    ],
  },
}

export default LABEL_POOL
