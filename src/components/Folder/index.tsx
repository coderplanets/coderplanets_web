/*
 *
 * Folder
 * see orignal example at: https://codepen.io/mydearxym2/pen/YzyLYqL
 *
 */

import { FC, memo } from 'react'
import { TSIZE_SM } from '@/spec'

import { ICON_CMD } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils'

import Content from './Content'
import Footer from './Footer'

import { Wrapper, TabShape } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Folder:index')

type TProps = {
  title?: string
  total?: number
  updatedAt?: string
  lock?: boolean
  editable?: boolean
  onEdit?: () => void
  onSelect?: () => void
  onMenuClick?: (key: string) => void
  size?: TSIZE_SM
}

const Folder: FC<TProps> = ({
  size = SIZE.MEDIUM,
  title = '新收藏夹',
  total = 12,
  updatedAt = '',
  lock = false,
  editable = false,
  onEdit = log,
  onSelect = log,
  onMenuClick = log,
}) => {
  return (
    <Wrapper testid="folder" size={size}>
      {/* {editable && (
        <EditIconWrapper onClick={onEdit}>
          <EditIcon src={`${ICON_CMD}/edit.svg`} />
        </EditIconWrapper>
      )} */}
      <TabShape />
      <Content total={total} lock={lock} updatedAt={updatedAt} />
      <Footer title={title} onClick={onSelect} onMenuClick={onMenuClick} />
    </Wrapper>
  )
}

export default memo(Folder)
