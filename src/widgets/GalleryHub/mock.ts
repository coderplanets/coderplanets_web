import { ASSETS_ENDPOINT } from '@/config'
import type { TGallery } from '@/spec'

export const mockProducts = (): TGallery[] => {
  return [
    {
      id: '0',
      homeLink: 'https://www.icloud.com/notes',
      title: 'Notes',
      desc: '苹果自带的笔记应用，使用方便，功能完善，iCloud 自动同步。',
      tags: ['Apple 生态'],
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-apple-notes.png`,
    },
    {
      id: '1',
      homeLink: 'https://sipapp.io',
      title: 'Sip',
      desc: 'Mac 下的一款多功能取色器，简洁专注，功能强大。',
      tags: ['Mac', '可试用 / 付费', '取色'],
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-sip.svg`,
    },
    {
      id: '2',
      homeLink: 'https://proxyman.io',
      title: 'Proxyman',
      desc: 'Mac 下 HTTP(s) 抓包工具，使用简单，设计精美。',
      tags: ['Mac', '付费'],
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-proxyman.png`,
    },
    {
      id: '3',
      homeLink: 'https://convertio.co/zh',
      title: 'Convertio',
      desc: '格式转换服务，支持超过 2500 种格式之间的相互转换.',
      tags: ['Web'],
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-convertio.png`,
    },
    {
      id: '4',
      homeLink: 'https://plausible.io',
      title: 'Plausible Analytics',
      desc: '尊重隐私的 Google Analysis 替代品，可独立部署。',
      tags: ['SaaS', '隐私保护', '欧洲'],
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-plausible.png`,
    },
    {
      id: '5',
      homeLink: 'https://www.frame.io/',
      title: 'Frame.io',
      tags: ['视频协作', 'Adobe'],
      desc: '视频工作流协作平台。支持团队间分享，剪辑，沟通，转码，版本控制等。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-frameio.png`,
    },
    {
      id: '6',
      homeLink: 'https://www.typeform.com',
      title: 'Typeform',
      desc: '在线问卷，调查工具，自定义功能强大，可集成至多种流行平台。',
      tags: ['SaaS', '西班牙'],
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-typeform.png`,
    },
    {
      id: '7',
      homeLink: 'http://remixicon.com/',
      title: 'Remixicon',
      desc: '为设计师和开发者创作的 neutral 风格的图标集，简单而优雅。',
      tags: ['免费开源', '国货'],
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-remixicon.png`,
    },
  ]
}

export const mockFameous = (): TGallery[] => {
  return [
    {
      id: '0',
      aka: 'Andrew Chi-Chih Yao',
      birthPlace: 'china',
      nation: 'american',
      nationName: '中国',
      title: '姚期智',
      birthday: '1946 / 74岁',
      desc: '图灵奖首位的华人学者，主要研究计算理论及其在密码学和量子计算中的应用。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-yqz.jpeg`,
    },
    {
      id: '1',
      aka: '布莱姆·米勒',
      birthPlace: 'dutch',
      nation: 'dutch',
      nationName: '荷兰',
      title: 'Bram Moolenaar',
      birthday: '1961 / 60 岁',
      desc: 'vim、A-A-P 作者，也是编程语言Zimbu 的开发者。他也协助CAcert的开发。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-bm.jpeg`,
    },
    {
      id: '2',
      aka: '理查德·马修·斯托曼',
      birthPlace: 'american',
      nation: 'american',
      nationName: '美国',
      title: 'Richard Matthew Stallman',
      birthday: '1953 / 68岁',
      desc: '发起了GNU项目，并成立了自由软件基金会。他开发了GCC、GDB、GNU Emacs，同时编写了GNU通用公共许可协议。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-rms.png`,
    },
    {
      id: '3',
      aka: '法布里斯·贝拉',
      birthPlace: 'franch',
      nation: 'franch',
      nationName: '法国',
      title: 'Fabrice Bellard',
      birthday: '1972 / 49 岁',
      desc: '因 FFmpeg、QEMU 等项目而闻名业内。他也是最快圆周率算法贝拉公式、TCCBOOT 和 TCC 等项目的作者。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-fb.jpeg`,
    },
    {
      id: '4',
      aka: 'Matz / まつもとゆきひろ',
      birthPlace: 'japan',
      nation: 'japan',
      nationName: '日本',
      title: '松本行弘',
      birthday: '1965 / 56 岁',
      desc: 'Ruby 程序设计语言的主要设计者和实现者。 自 2011 年起，松本行弘在 Heroku 担任首席 Ruby 架构师，同时他也是乐天技术研究所的成员。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-sbxh.jpeg`,
    },
    {
      id: '5',
      aka: '罗伯托·耶鲁萨林斯希',
      birthPlace: 'brazil',
      nation: 'brazil',
      nationName: '巴西',
      title: 'Roberto Ierusalimschy',
      birthday: '1953 / 68 岁',
      desc: 'Lua 语言作者。他拥有里约热内卢天主教大学计算机科学博士学位，并出任该校信息学副教授。他于1992年在滑铁卢大学做博士后， 2012年在史丹佛大学做客座教授。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-ri.jpeg`,
    },
    {
      id: '5',
      aka: '乔·阿姆斯特朗',
      birthPlace: 'england',
      nation: 'england',
      nationName: '英国',
      title: 'Joe Armstrong',
      birthday: '1950 - 2019 / 69 岁',
      desc: 'Erlang 编程语言的设计者与主架构师，也是开放电信平台的主要架构师。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-ja.jpeg`,
    },
    {
      id: '6',
      aka: '林纳斯·托瓦兹',
      birthPlace: 'finland',
      nation: 'american',
      nationName: '芬兰',
      title: 'Linus Torvalds',
      birthday: '1969 / 51 岁',
      desc: 'Linux 内核的首要架构师与项目协调者，是当今世界最著名的电脑程序员、黑客之一。他还发起了开源项目Git，并为主要的开发者。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-lt.jpeg`,
    },
    {
      id: '7',
      aka: '安德斯·海尔斯伯格',
      birthPlace: 'denmark',
      nation: 'denmark',
      nationName: '丹麦',
      title: 'Anders Hejlsberg',
      birthday: '1960 / 60 岁',
      desc: 'Borland Turbo Pascal 编译器的主要作者。进入微软公司后，先后主持了Visual J++、.Net， C# 和 TypeScript。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-ah.jpeg`,
    },
    {
      id: '8',
      aka: '詹姆斯·高斯林',
      birthPlace: 'canada',
      nation: 'canada',
      nationName: '加拿大',
      title: 'James Gosling',
      birthday: '1955 / 66 岁',
      desc: 'Java编程语言的共同创始人之一，一般公认他为 “Java之父”。',
      icon: `${ASSETS_ENDPOINT}/ugc/tmp/guide-people-jg.jpeg`,
    },
  ]
}

export const mockDevelopers = (): TGallery[] => {
  return [
    {
      id: '0',
      birthPlace: 'china',
      nation: 'american',
      title: '姚期智',
      desc: '图灵奖首位的华人学者，主要研究计算理论及其在密码学和量子计算中的应用',
      icon: 'https://assets.coderplanets.com/navi/fame-people/yao-qi-zhi.jpg',
    },
    {
      id: '1',
      birthPlace: 'american',
      nation: 'american',
      title: 'Charles P. Thacker',
      desc: '程序员，架构师，working at @Groupher',
      icon: 'https://assets.coderplanets.com/navi/fame-people/yao-qi-zhi.jpg',
    },
    {
      id: '2',
      birthPlace: 'american',
      nation: 'american',
      title: 'Richard Matthew Stallman',
      desc: '最性感的开发者社区',
      icon: 'https://assets.coderplanets.com/navi/fame-people/rms.png',
    },
    {
      id: '3',
      birthPlace: 'american',
      nation: 'american',
      title: 'Richard Matthew Stallman',
      desc: '最性感的开发者社区',
      icon: 'https://assets.coderplanets.com/navi/fame-people/rms.png',
    },
  ]
}
