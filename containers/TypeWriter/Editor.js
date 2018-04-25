/*
 * Editor based on Draft
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Popover, Button } from 'antd'

import { ICON_ASSETS } from '../../config'
import BodyEditor from './BodyEditor'

import {
  BodyWrapper,
  LinkLabel,
  LinkInput,
  TitleInput,
  BodyHeader,
  ReprintIcon,
  CopyRightCheck,
  CopyRightText,
  MoreIcon,
  SourceLink,
  PreviewBtn,
  PopoverDIY,
  PopoverPointer,
  Selector,
  CheckIcon,
  CheckText,
} from './styles'

const articleTypeDic = {
  original: '原创',
  reprint: '转载',
  translate: '翻译',
}

const OriginalSelector = ({ active, onSelect }) => {
  return (
    <PopoverDIY>
      <PopoverPointer />

      <Selector onClick={onSelect.bind(this, 'original')}>
        <CheckIcon
          path={`${ICON_ASSETS}/cmd/check2.svg`}
          active={active}
          value="original"
        />
        <CheckText active={active} value="original">
          原创
        </CheckText>
      </Selector>
      <Selector onClick={onSelect.bind(this, 'reprint')}>
        <CheckIcon
          path={`${ICON_ASSETS}/cmd/check2.svg`}
          active={active}
          value="reprint"
        />
        <CheckText active={active} value="reprint">
          转载
        </CheckText>
      </Selector>
      <Selector onClick={onSelect.bind(this, 'translate')}>
        <CheckIcon
          path={`${ICON_ASSETS}/cmd/check2.svg`}
          active={active}
          value="translate"
        />
        <CheckText active={active} value="translate">
          翻译
        </CheckText>
      </Selector>
    </PopoverDIY>
  )
}

const Editor = ({
  articleType,
  copyrightChange,
  title,
  titleOnChange,
  body,
  bodyOnChange,
  linkAddr,
  linkSourceOnChange,
  onPreview,
}) => (
  <BodyWrapper>
    <BodyHeader>
      <CopyRightCheck>
        <ReprintIcon path={`${ICON_ASSETS}/cmd/${articleType}.svg`} />
        &nbsp;&nbsp;
        <CopyRightText>{articleTypeDic[articleType]}</CopyRightText>
        <Popover
          content={
            <OriginalSelector active={articleType} onSelect={copyrightChange} />
          }
          placement="right"
          trigger="hover"
        >
          <div>
            <MoreIcon path={`${ICON_ASSETS}/cmd/more.svg`} />
          </div>
        </Popover>
      </CopyRightCheck>
      {articleType !== 'original' ? (
        <SourceLink>
          <LinkLabel>原地址:</LinkLabel>
          <LinkInput
            placeholder="请填写url地址, 比如: https://coderplanets/js/posts/..."
            value={linkAddr}
            onChange={linkSourceOnChange}
          />
        </SourceLink>
      ) : (
        <div />
      )}
      <PreviewBtn>
        <Button size="small" type="primary" ghost onClick={onPreview}>
          预览
        </Button>
      </PreviewBtn>
    </BodyHeader>
    <TitleInput
      placeholder="文章标题."
      defaultValue=""
      value={title}
      onChange={titleOnChange}
    />
    <br />
    <BodyEditor onChange={bodyOnChange} body={body} />
  </BodyWrapper>
)

Editor.propTypes = {
  // https://www.npmjs.com/package/prop-types
  articleType: PropTypes.string.isRequired,
  copyrightChange: PropTypes.func.isRequired,
  bodyOnChange: PropTypes.func.isRequired,
  titleOnChange: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  body: PropTypes.string,
  title: PropTypes.string,
  linkAddr: PropTypes.string,
  linkSourceOnChange: PropTypes.func.isRequired,
}

Editor.defaultProps = {
  body: '',
  title: '',
  linkAddr: '',
}

export default Editor
