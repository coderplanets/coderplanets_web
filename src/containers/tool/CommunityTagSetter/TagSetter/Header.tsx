import { FC, memo } from 'react'

import {
  Wrapper,
  Title,
  Actions,
  // CommunityLabel,
  // CommunityLogo,
} from '../styles/tag_setter/header'

import IconButton from '@/components/Buttons/IconButton'
// import DotDivider from '@/components/DotDivider'
// import LavaLampLoading from '@/components/Loading/LavaLampLoading'

import type { TTagView } from '../spec'
import { TAG_VIEW } from '../constant'

type TProps = {
  view: TTagView
  setView: (view: TTagView) => void
}

const getTitle = (view: TTagView): string => {
  switch (view) {
    case TAG_VIEW.CREATE_ITEM: {
      return '新增标签'
    }
    case TAG_VIEW.UPDATE_ITEM: {
      return '编辑标签'
    }
    case TAG_VIEW.UPDATE: {
      return '编辑标签'
    }
    case TAG_VIEW.DELETE: {
      return '删除标签'
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
          active={view === TAG_VIEW.SELECT}
          onClick={() => setView(TAG_VIEW.SELECT)}
        />
        <IconButton
          path="shape/add.svg"
          size={20}
          mRight={8}
          hintDelay={0}
          hint="新增标签"
          active={view === TAG_VIEW.CREATE_ITEM}
          onClick={() => setView(TAG_VIEW.CREATE_ITEM)}
        />
        <IconButton
          path="edit/publish-pen.svg"
          size={18}
          mRight={8}
          hintDelay={0}
          hint="编辑标签"
          active={view === TAG_VIEW.UPDATE}
          onClick={() => setView(TAG_VIEW.UPDATE)}
        />
        <IconButton
          path="shape/delete.svg"
          size={18}
          mRight={0}
          hintDelay={0}
          hint="删除标签"
          active={view === TAG_VIEW.DELETE}
          onClick={() => setView(TAG_VIEW.DELETE)}
        />
      </Actions>
    </Wrapper>
  )
}

export default memo(Header)
