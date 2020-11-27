import React from 'react'

import ArticleEditToolbar from '@/components/ArticleEditToolbar'
import Adder from './Adder'

import { Wrapper, TitleInput, Divider } from '../styles/header'

const Header = () => {
  const editData = {
    copyRight: 'translate',
    linkAddr: '',
  }

  return (
    <Wrapper>
      <ArticleEditToolbar editData={editData} />
      <TitleInput
        placeholder="标 题."
        defaultValue=""
        // value
        onChange={console.log}
        behavior="textarea"
        autoFocus
      />
      <Divider>
        <Adder />
      </Divider>
    </Wrapper>
  )
}

export default React.memo(Header)
