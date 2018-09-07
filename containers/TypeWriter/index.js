/*
 *
 * TypeWriter
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import Editor from './Editor'
import Preview from './Preview'
import MarkDownHelper from './MarkDownHelper'
import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

import Header from './Header'
import Footer from './Footer'

import { Wrapper, EditorBlock, PreviewBlock } from './styles'

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

// TODO: use input in old IE
class TypeWriterContainer extends React.Component {
  componentWillMount() {
    const { typeWriter, attachment } = this.props

    logic.init(typeWriter, attachment)
  }

  componentWillUnmount() {
    debug('TODO: store state to localstarange')
    // Message.success('草稿已经保存')
    logic.uninit()
  }

  render() {
    const { typeWriter } = this.props

    const {
      articleType,
      curView,
      linkAddr,
      title,
      body,
      publishing,
      success,
      error,
      warn,
      isEdit,
      statusMsg,
    } = typeWriter

    return (
      <Wrapper>
        <Header isEdit={isEdit} curView={curView} />
        <View
          curView={curView}
          linkAddr={linkAddr}
          title={title}
          body={body}
          articleType={articleType}
          copyrightChange={logic.copyrightChange}
        />
        <Footer
          isEdit={isEdit}
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
