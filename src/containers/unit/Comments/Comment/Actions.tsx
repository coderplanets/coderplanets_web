import { FC, memo, useCallback } from 'react'

import type { TAccount, TComment } from '@/spec'
import { ICON } from '@/config'

import IconButton from '@/components/Buttons/IconButton'
import MenuButton from '@/components/Buttons/MenuButton'
import { SpaceGrow } from '@/components/Common'

import { Wrapper, ReplyAction } from '../styles/comment/actions'
import { openUpdateEditor, openReplyEditor, onDelete } from '../logic'

type TProps = {
  data: TComment
  accountInfo: TAccount
}

const menuOptions = [
  {
    key: 'quote',
    icon: `${ICON}/shape/quote.svg`,
    title: '引用',
  },
  {
    key: 'share',
    icon: `${ICON}/article/share.svg`,
    title: '分享',
  },
  {
    key: 'report',
    icon: `${ICON}/article/report.svg`,
    title: '举报',
  },
]

const Actions: FC<TProps> = ({ data, accountInfo }) => {
  let extraOptions = []

  if (String(data.author.id) === accountInfo.id) {
    extraOptions = [
      {
        key: 'edit',
        icon: `${ICON}/edit/publish-pen.svg`,
        title: '编辑',
      },
      {
        key: 'delete',
        icon: `${ICON}/shape/delete.svg`,
        title: '删除',
      },
    ]
  }

  const handleAction = useCallback(
    (key) => {
      switch (key) {
        case 'share': {
          return console.log('todo: share')
        }
        case 'quote': {
          return console.log('todo: quote')
        }
        case 'report': {
          return console.log('todo: report')
        }
        case 'edit': {
          return openUpdateEditor(data)
        }
        case 'delete': {
          return onDelete(data)
        }
        default: {
          // eslint-disable-next-line no-useless-return
          return
        }
      }
    },
    [data],
  )

  return (
    <Wrapper>
      <ReplyAction onClick={() => openReplyEditor(data)}>回复</ReplyAction>
      <SpaceGrow />
      <MenuButton
        options={menuOptions}
        extraOptions={extraOptions}
        onClick={handleAction}
      >
        <IconButton path="shape/more.svg" size={16} />
      </MenuButton>
    </Wrapper>
  )
}

export default memo(Actions)
