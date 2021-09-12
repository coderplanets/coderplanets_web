import { FC, memo, useCallback } from 'react'
import { TID } from '@/spec'

import Button from '@/components/Buttons/Button'
import { Space } from '@/components/Common'
import Folder from '@/components/Folder'

import {
  Wrapper,
  Header,
  Artiment,
  ListWrapper,
  FolderWrapper,
  Footer,
} from './styles/setter'

import {
  setContent,
  unSetContent,
  switchToCreator,
  switchToUpdater,
} from './logic'

type TProps = {
  show: boolean
  selectedId: TID
}

const Setter: FC<TProps> = ({ show, selectedId }) => {
  const handleMenu = useCallback((key) => {
    if (key === 'edit') switchToUpdater()
  }, [])

  return (
    <Wrapper show={show}>
      <Header>
        添加<Artiment>某篇文章或讨论</Artiment>到收藏夹
      </Header>
      <ListWrapper>
        <FolderWrapper>
          <Folder onMenuClick={handleMenu} lock />
        </FolderWrapper>

        <FolderWrapper>
          <Folder lock />
        </FolderWrapper>
        <FolderWrapper>
          <Folder lock />
        </FolderWrapper>
        <FolderWrapper>
          <Folder lock />
        </FolderWrapper>
        <FolderWrapper>
          <Folder lock />
        </FolderWrapper>
        <FolderWrapper>
          <Folder lock />
        </FolderWrapper>
        <FolderWrapper>
          <Folder lock />
        </FolderWrapper>
        <FolderWrapper>
          <Folder lock />
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
