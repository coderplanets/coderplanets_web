/*
 *
 * ArticleMenu
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import MenuButton from '@/components/Buttons/MenuButton'

import { Wrapper, MoreIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleMenu:index')

type TProps = {
  testid?: string
}

const menuOptions = [
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
    key: 'community-mirror',
    icon: `${ICON}/article/community-mirror.svg`,
    title: '镜像到社区',
  },
  {
    key: 'community-move',
    icon: `${ICON}/article/community-move.svg`,
    title: '移动到社区',
  },
]

const ArticleMenu: FC<TProps> = ({ testid = 'archived-sign' }) => {
  return (
    <MenuButton
      options={menuOptions}
      extraOptions={extraOptions}
      onClick={console.log}
      placement="bottom-end"
    >
      <Wrapper testid={testid}>
        <MoreIcon src={`${ICON}/shape/more.svg`} />
      </Wrapper>
    </MenuButton>
  )
}

export default memo(ArticleMenu)
