import React from 'react'

import { ICON, ICON_CMD } from '@/config'

import { Button } from '@/components/Buttons'
import { Space } from '@/components/Common'
import DocUploader from '@/containers/tool/DocUploader'

import {
  InputFooter,
  InputHelper,
  HelperIcon,
  InputSubmit,
  FoldBtn,
  FoldArrow,
  FoldText,
} from './styles/editor_footer'

import { insertCode, insertQuote, onUploadImageDone } from './logic'

type TProps = {
  loading: boolean
  showPreview: boolean
  onCreate: () => void
  onBackEdit: () => void
  onPreview: () => void
  onFold: () => void
  showFold: boolean
}

const EditorFooter: React.FC<TProps> = ({
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
        <div onClick={insertCode}>
          <HelperIcon src={`${ICON_CMD}/extra_code.svg`} />
        </div>
        <div onClick={insertQuote}>
          <HelperIcon src={`${ICON_CMD}/extra_quote.svg`} />
        </div>
        <DocUploader onUploadDone={onUploadImageDone}>
          <HelperIcon src={`${ICON_CMD}/extra_image.svg`} />
        </DocUploader>
      </InputHelper>
    )}

    <InputSubmit>
      {showFold && (
        <FoldBtn onClick={onFold}>
          <FoldArrow src={`${ICON}/shape/vote-up.svg`} />
          <FoldText>收起</FoldText>
        </FoldBtn>
      )}
      <Space right={14} />
      {showPreview ? (
        <Button type="primary" ghost size="small" onClick={onBackEdit}>
          返回编辑
        </Button>
      ) : (
        <Button type="primary" ghost size="small" onClick={onPreview}>
          预<Space right={5} />览
        </Button>
      )}
      <Space right={10} />
      {!loading ? (
        <Button type="primary" size="small" onClick={onCreate}>
          提<Space right={5} />交
        </Button>
      ) : (
        <Button type="primary" size="small">
          提<Space right={5} />交 <Space right={5} /> ...
        </Button>
      )}
    </InputSubmit>
  </InputFooter>
)

export default React.memo(EditorFooter)
