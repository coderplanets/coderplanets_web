import React from 'react'

import ArticleEditToolbar from '@/components/ArticleEditToolbar'
import Adder from './Adder'
import Deleter from './Deleter'

import {
  Wrapper,
  TitleInput,
  SubTitleWrapper,
  SubTitleInput,
  Divider,
} from '../styles/header'

const Header = ({ showSubTitle }) => {
  const editData = {
    copyRight: 'translate',
    linkAddr: '',
  }

  return (
    <Wrapper>
      <ArticleEditToolbar editData={editData} />
      <TitleInput
        placeholder="标题"
        defaultValue=""
        // value
        onChange={console.log}
        behavior="textarea"
        size="large"
        autoFocus
      />
      {showSubTitle && (
        <SubTitleWrapper>
          <Deleter />
          <SubTitleInput
            placeholder="副标题"
            defaultValue=""
            onChange={console.log}
            behavior="textarea"
            autoFocus
          />
        </SubTitleWrapper>
      )}
      <Divider>{!showSubTitle && <Adder />}</Divider>
    </Wrapper>
  )
}

export default React.memo(Header)
