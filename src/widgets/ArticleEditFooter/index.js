/*
 *
 * ArticleEditFooter
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'

import Button from '@/widgets/Buttons/Button'
import { Space } from '@/widgets/Common'

import { Wrapper, RespectText, PublishButtons, Divider } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ArticleEditFooter:index')

const DoingText = ({ isEdit }) => {
  return isEdit ? <>更新</> : <>发布</>
}

const ArticleEditFooter = ({ isEdit, publishing, onCancel, onPublish }) => (
  <Wrapper>
    <RespectText>请尊重自己和他人的时间，不要发布无意义的内容。</RespectText>
    <Divider />
    <PublishButtons>
      {publishing ? (
        <div>
          <Button size="default" type="primary" ghost>
            取消
          </Button>
          <Space right={15} />
          <Button size="default" type="primary">
            正在
            <DoingText isEdit={isEdit} />
            ...
          </Button>
        </div>
      ) : (
        <div>
          <Button size="default" type="primary" ghost onClick={onCancel}>
            取消
          </Button>
          <Space right={15} />
          <Button size="default" type="primary" onClick={onPublish}>
            <DoingText isEdit={isEdit} />
          </Button>
        </div>
      )}
    </PublishButtons>
  </Wrapper>
)

ArticleEditFooter.propTypes = {
  isEdit: T.bool,
  publishing: T.bool,

  onCancel: T.func,
  onPublish: T.func,
}

ArticleEditFooter.defaultProps = {
  isEdit: false,
  publishing: false,

  onCancel: log,
  onPublish: log,
}

export default React.memo(ArticleEditFooter)
