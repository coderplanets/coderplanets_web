import React from 'react'

import { ICON_CMD } from '@config'

import { Button } from '@components/Buttons'
import { Space } from '@components/Common'
import DocUploader from '@containers/DocUploader'

import {
  InputFooter,
  InputHelper,
  HelperIcon,
  InputSubmit,
  FoldBtn,
  FoldArrow,
  FoldText,
} from './styles/editor_footer'

import * as logic from './logic'

const EditorFooter = ({
  loading,
  showPreview,
  onCreate,
  onBackEdit,
  onPreview,
  showFold,
  onFold,
}) => (
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
      {showFold && (
        <FoldBtn onClick={onFold}>
          <FoldArrow src={`${ICON_CMD}/arrow-up-o.svg`} />
          <FoldText>收起</FoldText>
        </FoldBtn>
      )}
      <Space right="14px" />
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
          提<Space right="5px" />交 <Space right="5px" /> ...
        </Button>
      )}
    </InputSubmit>
  </InputFooter>
)

export default React.memo(EditorFooter)
