import React from 'react'

import { ICON_CMD } from '../../config'
import { Space, Button, Icon } from '../../components'

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
          <HelperIcon src={`${ICON_CMD}/extra_quote.svg`} />
          <HelperIcon src={`${ICON_CMD}/extra_image.svg`} />
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
