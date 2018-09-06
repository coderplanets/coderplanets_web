import React from 'react'

import { ICON_CMD } from '../../config'
import { uid } from '../../utils'

import { SectionLabel, Button } from '../../components'

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

const Setter = ({ show, entries }) => {
  return (
    <Wrapper show={show}>
      <SectionLabel
        title="添加收藏"
        desc="选择你要添加的收藏夹"
        iconSrc={`${ICON_CMD}/folder.svg`}
      />
      <ListWrapper>
        {entries.map(cat => (
          <CatWrapper key={uid.gen()}>
            <CatContent>
              <CatMain>
                <CatHeader>
                  <CatTitle>{cat.title}</CatTitle>
                </CatHeader>
                <CatDec>{cat.desc}</CatDec>
                <CatCounter>3 条内容</CatCounter>
              </CatMain>
              <SetBtn>
                <Button type="primary" ghost>
                  收入
                </Button>
              </SetBtn>
            </CatContent>
            <CatDivider />
          </CatWrapper>
        ))}
      </ListWrapper>
      <Footer>
        <Button type="primary">创建新收藏夹</Button>
      </Footer>
    </Wrapper>
  )
}

export default Setter
