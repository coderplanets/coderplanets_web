import { ICON_CMD } from '@/config'
import type { TTag } from '@/spec'
import { filter, findIndex, equals, startsWith } from 'ramda'
import uid from '@/utils/uid'

const tags = [
  {
    id: uid.gen(),
    title: '生产力',
    raw: 'productivity',
    icon: `${ICON_CMD}/navi/tool.svg`,
    extra: ['生产力'],
  },
  {
    id: uid.gen(),
    title: '命令行',
    raw: 'cmd',
    icon: `${ICON_CMD}/navi/shell.svg`,
    extra: ['生产力', '命令行'],
  },
  {
    id: uid.gen(),
    title: '工作效率',
    raw: 'efficiency-tools',
    icon: `${ICON_CMD}/navi/timer.svg`,
    extra: ['生产力', '工作效率'],
  },
  {
    id: uid.gen(),
    title: 'GTD 工具',
    raw: 'gtd',
    extra: ['生产力', '工作效率', ''],
  },
  {
    id: uid.gen(),
    title: '项目管理',
    raw: 'manage',
    extra: ['生产力', '工作效率', ''],
  },
  {
    id: uid.gen(),
    title: '编辑器圣战',
    raw: 'editor',
    extra: ['生产力', '工作效率', ''],
  },
  // {
  //   id: uid.gen(),
  //   title: 'Github',
  //   extra: ['生产力', '工作效率', ''],
  // },
  {
    id: uid.gen(),
    title: '写作 / 笔记',
    raw: 'writing',
    extra: ['生产力', '工作效率', ''],
  },
  {
    id: uid.gen(),
    title: '格式转换',
    raw: 'convert',
    extra: ['生产力', '工作效率', ''],
  },
  {
    id: uid.gen(),
    title: '设计灵感',
    raw: 'design-idea',
    icon: `${ICON_CMD}/navi/light.svg`,
    extra: ['设计灵感'],
  },
  {
    id: uid.gen(),
    title: '科幻世界',
    raw: 'sci-fi',
    icon: `${ICON_CMD}/navi/sci-fi.svg`,
    // displayType: 'IMAGE',
    extra: ['设计灵感', '科幻世界'],
  },
  {
    id: uid.gen(),
    title: '建筑之美',
    raw: 'arch',
    icon: `${ICON_CMD}/navi/bricks.svg`,
    extra: ['设计灵感', '建筑之美'],
  },
]

type TMenuItem = TTag & { children?: TMenuItem[]; extra: string[] }
type TMenu = TMenuItem[]

export const findUpdatePath = (menu: TMenu, extra: string[]): string[] => {
  // console.log('findUpdatePath menu: ', menu)
  // console.log('findUpdatePath extra: ', extra)

  const rootIndex = findIndex((item) => equals(item.extra, [extra[0]]), menu)
  if (rootIndex === -1) return []

  const updatePath = []

  const parentMenuPath = extra.slice(0, extra.length - 1)
  // console.log('findUpdatePath parentMenuPath: ', parentMenuPath)
  if (parentMenuPath.length === 1) {
    updatePath.push(rootIndex)
  }

  if (parentMenuPath.length === 2) {
    updatePath.push(rootIndex)

    const index = findIndex(
      (item) => equals(item.extra, parentMenuPath),
      menu[rootIndex].children,
    )

    updatePath.push(index)
  }

  return updatePath
}

/**
 * covert tags data to menu format data
 */
export const tags2Menu = (): TMenu => {
  // let menu = []

  // const rawMenu = filter((item) => item.extra.length === 1, tags)
  // menu = rawMenu.map((item) => ({ ...item, children: [] }))

  const menu = filter((item) => item.extra.length === 1, tags)

  // const rawMenu = filter((item) => item.extra.length === 1, tags)
  // menu = rawMenu.map((item) => ({ ...item, children: [] }))

  // level-2
  const menu2 = filter((item) => item.extra.length === 2, tags)
  menu2.forEach((item) => {
    const pathIndex = findUpdatePath(menu, item.extra)
    if (!menu[pathIndex[0]].children) menu[pathIndex[0]].children = []
    menu[pathIndex[0]].children.push(item)
  })

  // level-3
  const menu3 = filter((item) => item.extra.length === 3, tags)
  menu3.forEach((item) => {
    const pathIndex = findUpdatePath(menu, item.extra)

    if (!menu[pathIndex[0]].children[pathIndex[1]].children) {
      menu[pathIndex[0]].children[pathIndex[1]].children = []
    }
    menu[pathIndex[0]].children[pathIndex[1]].children.push(item)
  })

  console.log('findal: ', menu)
  return menu
}

export const holder = 1
