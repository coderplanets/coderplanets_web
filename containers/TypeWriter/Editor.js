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
  ReprintWrapper,
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
import {
  ExtraWrapper,
  ExtraItem,
  ExtraItemTitle,
  ExtraItemIcon,
  ExtraDivider,
} from './styles/editor'

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
        <Popover
          content={
            <OriginalSelector active={articleType} onSelect={copyrightChange} />
          }
          placement="right"
          trigger="hover"
        >
          <ReprintWrapper>
            <ReprintIcon path={`${ICON_ASSETS}/cmd/${articleType}.svg`} />
            <CopyRightText>{articleTypeDic[articleType]}</CopyRightText>
            <MoreIcon path={`${ICON_ASSETS}/cmd/more.svg`} />
          </ReprintWrapper>
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
    <ExtraWrapper>
      <ExtraItem>
        <ExtraItemIcon path={`${ICON_ASSETS}/cmd/extra_tag.svg`} />
        <ExtraItemTitle>标签</ExtraItemTitle>
      </ExtraItem>
      <ExtraDivider path={`${ICON_ASSETS}/cmd/more.svg`} />
      <ExtraItem>
        <ExtraItemIcon path={`${ICON_ASSETS}/cmd/extra_vote.svg`} />
        <ExtraItemTitle>投票</ExtraItemTitle>
      </ExtraItem>
      <ExtraDivider path={`${ICON_ASSETS}/cmd/more.svg`} />
      <ExtraItem>
        <ExtraItemIcon path={`${ICON_ASSETS}/cmd/extra_code.svg`} />
        <ExtraItemTitle>代码</ExtraItemTitle>
      </ExtraItem>
      <ExtraDivider path={`${ICON_ASSETS}/cmd/more.svg`} />
      <ExtraItem>
        <ExtraItemIcon path={`${ICON_ASSETS}/cmd/extra_image.svg`} />
        <ExtraItemTitle>图片</ExtraItemTitle>
      </ExtraItem>
      <ExtraDivider path={`${ICON_ASSETS}/cmd/more.svg`} />
      <ExtraItem>
        <ExtraItemIcon path={`${ICON_ASSETS}/cmd/extra_setting.svg`} />
        <ExtraItemTitle>设置</ExtraItemTitle>
      </ExtraItem>
    </ExtraWrapper>
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
