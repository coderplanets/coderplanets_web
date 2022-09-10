import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'

import type { TTagView } from '../spec'
import { TAG_VIEW } from '../constant'

import { Wrapper, Title, Actions } from '../styles/tag_setter/header'
import { changeTagView } from '../logic'

// import DotDivider from '@/widgets/DotDivider'
// import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

type TProps = {
  view: TTagView
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

const Header: FC<TProps> = ({ view }) => {
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
          right={8}
          hintDelay={0}
          hint="设置标签"
          active={view === TAG_VIEW.SELECT}
          onClick={() => changeTagView(TAG_VIEW.SELECT)}
        />
        <IconButton
          path="shape/add.svg"
          size={20}
          right={8}
          hintDelay={0}
          hint="新增标签"
          active={view === TAG_VIEW.CREATE_ITEM}
          onClick={() => changeTagView(TAG_VIEW.CREATE_ITEM)}
        />
        <IconButton
          path="edit/publish-pen.svg"
          size={18}
          right={8}
          hintDelay={0}
          hint="编辑标签"
          active={view === TAG_VIEW.UPDATE}
          onClick={() => changeTagView(TAG_VIEW.UPDATE)}
        />
        <IconButton
          path="shape/delete.svg"
          size={18}
          hintDelay={0}
          hint="删除标签"
          active={view === TAG_VIEW.DELETE}
          onClick={() => changeTagView(TAG_VIEW.DELETE)}
        />
      </Actions>
    </Wrapper>
  )
}

export default memo(Header)
