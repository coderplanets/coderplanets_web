import React from 'react'

import { ICON_CMD } from '@/config'
import { Button } from '@/components/Buttons'
import SectionLabel from '@/components/SectionLabel'

import {
  Wrapper,
  CatWrapper,
  ListWrapper,
  CatContent,
  CatMain,
  SetBtn,
  CatHeader,
  CatTitle,
  CatDec,
  CatCounter,
  CatDivider,
  Footer,
} from './styles/setter'

import { setContent, unSetContent, onSetterCreateCat } from './logic'

const Setter = ({ show, entries, selectedId }) => (
  <Wrapper show={show}>
    <SectionLabel
      title="添加收藏"
      desc="选择你要添加的收藏夹"
      iconSrc={`${ICON_CMD}/folder.svg`}
    />
    <ListWrapper>
      {entries.map((cat) => (
        <div key={cat.id}>
          <CatWrapper>
            <CatContent>
              <CatMain>
                <CatHeader>
                  <CatTitle>{cat.title}</CatTitle>
                </CatHeader>
                <CatDec>{cat.desc}</CatDec>
                <CatCounter>共 {cat.totalCount} 条内容</CatCounter>
              </CatMain>
              <SetBtn>
                {selectedId === cat.id ? (
                  <Button type="red" ghost onClick={() => unSetContent(cat.id)}>
                    移除
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    ghost
                    onClick={() => setContent(cat.id)}
                  >
                    加入
                  </Button>
                )}
              </SetBtn>
            </CatContent>
          </CatWrapper>
          <CatDivider />
        </div>
      ))}
    </ListWrapper>
    <Footer>
      <Button type="primary" onClick={onSetterCreateCat}>
        创建新收藏夹
      </Button>
    </Footer>
  </Wrapper>
)

export default React.memo(Setter)
