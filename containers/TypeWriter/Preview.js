/*
 * Editor based on Draft
 */

import React from 'react'
import Remarkable from 'remarkable'
import remarkableemoj from 'remarkable-emoji'
import mentions from 'remarkable-mentions'
// import Prism from 'mastani-codehighlight'
import { Button } from 'antd'

import MarkDownStyle from '../../containers/ThemeWrapper/MarkDownStyle'
import { BodyWrapper, BodyHeader, BackToEditBtn } from './styles'

const md = new Remarkable()
md.use(mentions({ url: 'http:coderplanets.com/users/' }))
md.use(remarkableemoj)

/* eslint-disable react/no-danger */
const Preview = ({ onBack, body }) => {
  return (
    <BodyWrapper>
      <BodyHeader>
        &nbsp;
        <BackToEditBtn>
          <Button size="small" type="primary" ghost onClick={onBack}>
            返回编辑
          </Button>
        </BackToEditBtn>
      </BodyHeader>
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
    </BodyWrapper>
  )
}
/* eslint-enable react/no-danger */

export default Preview
