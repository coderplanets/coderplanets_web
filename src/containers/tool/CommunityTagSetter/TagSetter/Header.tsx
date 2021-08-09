import { FC, Fragment, memo } from 'react'

import { ICON_BASE } from '@/config'

import {
  Wrapper,
  Title,
  Actions,
  CommunityLabel,
  CommunityLogo,
} from '../styles/tag_setter/header'

import IconButton from '@/components/Buttons/IconButton'
import DotDivider from '@/components/DotDivider'
// import LavaLampLoading from '@/components/Loading/LavaLampLoading'

import type { TView } from '../spec'

type TProps = {
  view: TView
  setView: (view: TView) => void
}

const getTitle = (view: TView): string => {
  switch (view) {
    case 'do-create': {
      return '新增标签'
    }
    case 'do-update': {
      return '编辑标签'
    }
    case 'update': {
      return '编辑标签'
    }
    case 'delete': {
      return '删除'
    }
    default: {
      return '设置标签'
    }
  }
}

const Header: FC<TProps> = ({ view, setView }) => {
  return (
    <Wrapper>
      <Title>
        {getTitle(view)}
        {/* {view === 'list' && (
          <CommunityLabel>
            <CommunityLogo src={`${ICON_BASE}/pl/javascript.svg`} />
            <div>javascript</div>
          </CommunityLabel>
        )} */}
      </Title>

      <Actions>
        <IconButton
          path="shape/settings.svg"
          size={18}
          mRight={8}
          hintDelay={0}
          hint="设置标签"
          active={view === 'select'}
          onClick={() => setView('select')}
        />
        <IconButton
          path="shape/add.svg"
          size={20}
          mRight={8}
          hintDelay={0}
          hint="新增标签"
          active={view === 'do-create'}
          onClick={() => setView('do-create')}
        />
        <IconButton
          path="edit/publish-pen.svg"
          size={18}
          mRight={8}
          hintDelay={0}
          hint="编辑标签"
          active={view === 'update'}
          onClick={() => setView('update')}
        />
        <IconButton
          path="shape/delete.svg"
          size={18}
          mRight={0}
          hintDelay={0}
          hint="删除标签"
          active={view === 'delete'}
          onClick={() => setView('delete')}
        />
      </Actions>
    </Wrapper>
  )
}

export default memo(Header)
