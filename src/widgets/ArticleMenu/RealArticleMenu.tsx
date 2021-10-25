/*
 *
 * ArticleMenu
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { EVENT } from '@/constant'

import type { TArticle } from '@/spec'
import MenuButton from '@/widgets/Buttons/MenuButton'

import { Wrapper, MoreIcon } from './styles'
import { hendleMenu } from './helper'

type TProps = {
  testid?: string
  verticalIcon: boolean
  article: TArticle
}

const menuOptions = [
  {
    key: 'pin',
    icon: `${ICON}/edit/publish-pen.svg`,
    title: '置顶',
  },
  {
    key: 'sink',
    icon: `${ICON}/edit/publish-pen.svg`,
    title: '下沉',
  },
  {
    key: 'edit',
    icon: `${ICON}/edit/publish-pen.svg`,
    title: '编辑',
  },
  {
    key: 'edit-histor',
    icon: `${ICON}/edit/publish-pen.svg`,
    title: '修改记录',
  },
]

const extraOptions = [
  {
    key: 'delete',
    icon: `${ICON}/shape/delete.svg`,
    title: '删除',
  },
  {
    key: EVENT.MIRROR_TO_COMMUNITY,
    icon: `${ICON}/article/community-mirror.svg`,
    title: '镜像到..',
  },
  {
    key: EVENT.MOVE_TO_COMMUNITY,
    icon: `${ICON}/article/community-move.svg`,
    title: '移动到..',
  },
]

const ArticleMenu: FC<TProps> = ({
  testid = 'archived-sign',
  verticalIcon,
  article,
}) => {
  const icon = verticalIcon
    ? `${ICON}/shape/more-l.svg`
    : `${ICON}/shape/more.svg`

  return (
    <MenuButton
      options={menuOptions}
      extraOptions={extraOptions}
      placement="bottom-end"
      onClick={(key) => hendleMenu(key, article)}
    >
      <Wrapper testid={testid}>
        <MoreIcon src={icon} />
      </Wrapper>
    </MenuButton>
  )
}

export default memo(ArticleMenu)
