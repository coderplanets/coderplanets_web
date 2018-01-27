/*
 * Editor based on Draft
*/

import React from 'react'
import PropTypes from 'prop-types'

import { Popover, Button } from 'antd'

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

import { getSVGIconPath } from '../../utils'

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
          path={getSVGIconPath('check2')}
          active={active}
          value="original"
        />
        <CheckText active={active} value="original">
          原创
        </CheckText>
      </Selector>
      <Selector onClick={onSelect.bind(this, 'reprint')}>
        <CheckIcon
          path={getSVGIconPath('check2')}
          active={active}
          value="reprint"
        />
        <CheckText active={active} value="reprint">
          转载
        </CheckText>
      </Selector>
      <Selector onClick={onSelect.bind(this, 'translate')}>
        <CheckIcon
          path={getSVGIconPath('check2')}
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
  onChange,
  onPreview,
  bodyContent,
}) => (
  <div>
    <BodyWrapper>
      <BodyHeader>
        <CopyRightCheck>
          <ReprintIcon path={getSVGIconPath(articleType)} />
          &nbsp;&nbsp;
          <CopyRightText>{articleTypeDic[articleType]}</CopyRightText>
          <Popover
            content={
              <OriginalSelector
                active={articleType}
                onSelect={copyrightChange}
              />
            }
            placement="right"
            trigger="hover"
          >
            <div>
              <MoreIcon path={getSVGIconPath('more')} />
            </div>
          </Popover>
        </CopyRightCheck>
        {articleType !== 'original' ? (
          <SourceLink>
            <LinkLabel>原地址:</LinkLabel>
            <LinkInput placeholder="请填写url地址, 比如 https://www.mastani.com/intro" />
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
      <TitleInput placeholder="文章标题." />
      <br />
      <BodyEditor onChange={onChange} bodyContent={bodyContent} />
    </BodyWrapper>
  </div>
)

Editor.propTypes = {
  // https://www.npmjs.com/package/prop-types
  articleType: PropTypes.string.isRequired,
  copyrightChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  bodyContent: PropTypes.string,
}

Editor.defaultProps = {
  bodyContent: '',
}

export default Editor
