/*
 *
 * TypeWriter
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

// import ContentInput from './ContentInput'
import { ICON_CMD } from '../../config'

import Editor from './Editor'
import Preview from './Preview'
import MarkDownHelper from './MarkDownHelper'
import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

import Footer from './Footer'

import {
  Wrapper,
  EditorBlock,
  PreviewBlock,
  Header,
  UsageText,
  MarkdownIcon,
  MarkDownHint,
  BackToEditHint,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:TypeWriter')
/* eslint-enable no-unused-vars */

const View = ({
  curView,
  articleType,
  copyrightChange,
  title,
  body,
  linkAddr,
}) => {
  // const curView = 'create' // markdown_help

  if (curView === 'CREATE_VIEW' || curView === 'PREVIEW_VIEW') {
    return (
      <React.Fragment>
        <EditorBlock name="CREATE_VIEW" curView={curView}>
          <Editor
            articleType={articleType}
            copyrightChange={copyrightChange}
            title={title}
            titleOnChange={logic.titleOnChange}
            linkAddr={linkAddr}
            linkSourceOnChange={logic.linkSourceOnChange}
            body={body}
            bodyOnChange={logic.bodyOnChange}
            onPreview={logic.changeView.bind(this, 'PREVIEW_VIEW')}
          />
        </EditorBlock>
        <PreviewBlock name="PREVIEW_VIEW" curView={curView}>
          <Preview
            title={title}
            body={body}
            onBack={logic.changeView.bind(this, 'CREATE_VIEW')}
          />
        </PreviewBlock>
      </React.Fragment>
    )
  }
  return <MarkDownHelper />
}

const TopHeader = ({ curView }) => {
  switch (curView) {
    case 'MARKDOWN_HELP_VIEW': {
      return (
        <Header>
          <UsageText>Github Flavor Markdown</UsageText>
          <BackToEditHint onClick={logic.changeView.bind(this, 'CREATE_VIEW')}>
            <MarkdownIcon src={`${ICON_CMD}/original.svg`} />
            返回编辑
          </BackToEditHint>
        </Header>
      )
    }
    default:
      return (
        <Header>
          <UsageText>发布帖子</UsageText>
          <MarkDownHint
            onClick={logic.changeView.bind(this, 'MARKDOWN_HELP_VIEW')}
          >
            <MarkdownIcon src={`${ICON_CMD}/markdown.svg`} />
            markdown 语法 / emojj 速查
          </MarkDownHint>
        </Header>
      )
  }
}

// TODO: use input in old IE
class TypeWriterContainer extends React.Component {
  componentWillMount() {
    const { typeWriter } = this.props
    logic.init(typeWriter)
  }

  componentWillUnmount() {
    debug('TODO: store state to localstarange')
    // Message.success('草稿已经保存')
  }

  render() {
    const {
      typeWriter: {
        articleType,
        curView,
        linkAddr,
        title,
        body,
        publishing,
        success,
        error,
        warn,
        statusMsg,
      },
    } = this.props

    return (
      <Wrapper>
        <TopHeader curView={curView} />
        <View
          curView={curView}
          linkAddr={linkAddr}
          title={title}
          body={body}
          articleType={articleType}
          copyrightChange={logic.copyrightChange}
        />
        <Footer
          onPublish={logic.onPublish}
          publishing={publishing}
          success={success}
          error={error}
          warn={warn}
          statusMsg={statusMsg}
        />
      </Wrapper>
    )
  }
}

// TypeWriterContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// closePreview: PropTypes.func.isRequired,
// }

// TypeWriterContainer.defaultProps = {}

export default inject(storePlug('typeWriter'))(observer(TypeWriterContainer))
