import { FC, memo, useCallback } from 'react'

import type { TComment } from '@/spec'
import { ICON } from '@/config'

import { useAccount } from '@/hooks'
import IconButton from '@/components/Buttons/IconButton'
import MenuButton from '@/components/Buttons/MenuButton'
import { SpaceGrow } from '@/components/Common'

import { Wrapper, ReplyAction, MoreWrapper } from '../styles/comment/actions'
import { openUpdateEditor, openReplyEditor } from '../logic'

type TProps = {
  data: TComment
}

const menuOptions = [
  // {
  //   key: 'quote',
  //   icon: `${ICON}/shape/quote.svg`,
  //   title: '引用',
  // },
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

const Actions: FC<TProps> = ({ data }) => {
  const { user } = useAccount()

  let extraOptions = []

  if (data.author.login === user.login) {
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
          return console.log('todo: delete')
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
        <MoreWrapper>
          <IconButton path="shape/more.svg" size={16} />
        </MoreWrapper>
      </MenuButton>
    </Wrapper>
  )
}

export default memo(Actions)
