import React from 'react'

import { ICON_ASSETS } from '../../config'
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
            <HelperIcon path={`${ICON_ASSETS}/cmd/extra_code.svg`} />
          </div>
          <HelperIcon path={`${ICON_ASSETS}/cmd/extra_quote.svg`} />
          <HelperIcon path={`${ICON_ASSETS}/cmd/extra_image.svg`} />
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
