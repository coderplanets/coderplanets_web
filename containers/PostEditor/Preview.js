/*
 * Editor based on Draft
 */

import React from 'react'
import { Button } from 'antd'

import MarkDownRender from '../../components/MarkDownRender'
import { Wrapper, Header, BackToEditBtn, PreviewHeader } from './styles/preview'

/* eslint-disable react/no-danger */
const Preview = ({ onBack, editData: { title, body }, contentDomId }) => (
  <Wrapper>
    <Header>
      <BackToEditBtn>
        <Button size="small" type="primary" ghost onClick={onBack}>
          返回编辑
        </Button>
      </BackToEditBtn>
    </Header>
    <PreviewHeader>{title}</PreviewHeader>

    <MarkDownRender body={body} contentDomId={contentDomId} />
  </Wrapper>
)
/* eslint-enable react/no-danger */

export default Preview
