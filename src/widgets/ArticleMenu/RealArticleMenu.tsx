/*
 *
 * ArticleMenu
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { EVENT } from '@/constant'

import { moveToCommunity, mirrorToCommunity, setTag } from '@/utils/helper'
import MenuButton from '@/widgets/Buttons/MenuButton'

import { Wrapper, MoreIcon } from './styles'

type TProps = {
  testid?: string
  verticalIcon: boolean
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
    title: '镜像到社区',
  },
  {
    key: EVENT.MOVE_TO_COMMUNITY,
    icon: `${ICON}/article/community-move.svg`,
    title: '移动到社区',
  },
]

const hendleSelect = (key) => {
  switch (key) {
    case EVENT.MOVE_TO_COMMUNITY: {
      return moveToCommunity()
    }
    case EVENT.MIRROR_TO_COMMUNITY: {
      return mirrorToCommunity()
    }
    case EVENT.SET_TAG: {
      return setTag()
    }
    default: {
      // eslint-disable-next-line no-useless-return
      return
    }
  }
  // moveToCommunity
}

const ArticleMenu: FC<TProps> = ({
  testid = 'archived-sign',
  verticalIcon,
}) => {
  const icon = verticalIcon
    ? `${ICON}/shape/more-l.svg`
    : `${ICON}/shape/more.svg`

  return (
    <MenuButton
      options={menuOptions}
      extraOptions={extraOptions}
      placement="bottom-end"
      onClick={hendleSelect}
    >
      <Wrapper testid={testid}>
        <MoreIcon src={icon} />
      </Wrapper>
    </MenuButton>
  )
}

export default memo(ArticleMenu)
