/*
 * Editor based on Draft
 */

import React from 'react'
import Remarkable from 'remarkable'
import remarkableemoj from 'remarkable-emoji'
import mentions from 'remarkable-mentions'
// import Prism from 'mastani-codehighlight'
import { MENTION_USER_ADDR } from '../../config'
import { Button } from '../../components'

import MarkDownStyle from '../ThemeWrapper/MarkDownStyle'
import { Wrapper, Header, BackToEditBtn, PreviewHeader } from './styles/preview'

const md = new Remarkable()
md.use(mentions({ url: MENTION_USER_ADDR }))
md.use(remarkableemoj)

/* eslint-disable react/no-danger */
const Preview = ({ onBack, editData: { title, body } }) => (
  <Wrapper>
    <Header>
      <BackToEditBtn>
        <Button size="small" type="primary" ghost onClick={onBack}>
          返回编辑
        </Button>
      </BackToEditBtn>
    </Header>
    <PreviewHeader>{title}</PreviewHeader>

    <MarkDownStyle>
      <div className="markdown-body">
        <div
          id="typewriter-preview-container"
          dangerouslySetInnerHTML={{
            __html: md.render(body),
          }}
        />
      </div>
    </MarkDownStyle>
  </Wrapper>
)
/* eslint-enable react/no-danger */

export default Preview
