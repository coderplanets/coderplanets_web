import { FC, memo, useCallback } from 'react'

import type { TID, TArticle } from '@/spec'

import NoticeBar from '@/widgets/NoticeBar'
import Button from '@/widgets/Buttons/Button'
import { Space } from '@/widgets/Common'
import Folder from '@/widgets/Folder'

import {
  Wrapper,
  Header,
  Artiment,
  ListWrapper,
  FolderWrapper,
  Footer,
} from './styles/setter'

import {
  // setContent,
  // unSetContent,
  switchToCreator,
  switchToUpdater,
} from './logic'

type TProps = {
  show: boolean
  selectedId: TID
  article: TArticle
}

const Setter: FC<TProps> = ({ show, selectedId, article }) => {
  const handleMenu = useCallback((key) => {
    if (key === 'edit') switchToUpdater()
  }, [])

  return (
    <Wrapper show={show}>
      <Header>
        添加<Artiment>{article.title}</Artiment>到收藏夹
      </Header>
      <NoticeBar
        type="notice"
        content="抱歉，收藏功能前端部分尚未完成，暂不可用。如果你对 UI/UX 或功能有建议，欢迎移步 /feedback 参与讨论。"
        bottom={20}
        top={20}
      />
      <ListWrapper>
        <FolderWrapper>
          <Folder onMenuClick={handleMenu} lock />
        </FolderWrapper>

        <FolderWrapper>
          <Folder />
        </FolderWrapper>
      </ListWrapper>
      <Footer>
        选择要收入的收藏夹，或者
        <Space right={10} />
        <Button type="primary" onClick={switchToCreator} size="small" ghost>
          创建新收藏夹
        </Button>
      </Footer>
    </Wrapper>
  )
}

export default memo(Setter)
