import React from 'react'
import { Button, Icon } from 'antd'

import { Space } from 'components/BaseStyled'
import { ICON_CMD } from 'config'

import DocUploader from '../DocUploader'

import * as logic from './logic'

import {
  InputFooter,
  InputHelper,
  HelperIcon,
  InputSubmit,
} from './styles/editor_footer'

const EditorFooter = ({
  loading,
  showPreview,
  onCreate,
  onBackEdit,
  onPreview,
}) => {
  return (
    <InputFooter>
      {showPreview ? (
        <InputHelper />
      ) : (
        <InputHelper>
          <div onClick={logic.insertCode}>
            <HelperIcon src={`${ICON_CMD}/extra_code.svg`} />
          </div>
          <div onClick={logic.insertQuote}>
            <HelperIcon src={`${ICON_CMD}/extra_quote.svg`} />
          </div>
          <DocUploader onUploadDone={logic.onUploadImageDone}>
            <HelperIcon src={`${ICON_CMD}/extra_image.svg`} />
          </DocUploader>
        </InputHelper>
      )}

      <InputSubmit>
        {showPreview ? (
          <Button type="primary" ghost size="small" onClick={onBackEdit}>
            返回编辑
          </Button>
        ) : (
          <Button type="primary" ghost size="small" onClick={onPreview}>
            预<Space right="5px" />览
          </Button>
        )}
        <Space right="10px" />
        {!loading ? (
          <Button type="primary" size="small" onClick={onCreate}>
            提<Space right="5px" />交
          </Button>
        ) : (
          <Button type="primary" size="small">
            <Icon type="loading" />提<Space right="5px" />交
          </Button>
        )}
      </InputSubmit>
    </InputFooter>
  )
}

export default EditorFooter
