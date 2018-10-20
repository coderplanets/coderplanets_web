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
import Header from './Header'
import Footer from './Footer'

import { Wrapper, ViewerWrapper } from './styles'

import { init, uninit, changeView } from './logic'
import { makeDebugger, storePlug } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:TypeWriter')
/* eslint-enable no-unused-vars */

const View = ({ curView, thread, cpType, title, body, linkAddr }) => {
  if (curView === 'CREATE_VIEW' || curView === 'PREVIEW_VIEW') {
    return (
      <React.Fragment>
        <ViewerWrapper active={curView === 'CREATE_VIEW'}>
          <Editor
            cpType={cpType}
            thread={thread}
            title={title}
            linkAddr={linkAddr}
            body={body}
          />
        </ViewerWrapper>
        <ViewerWrapper active={curView === 'PREVIEW_VIEW'}>
          <Preview
            title={title}
            body={body}
            onBack={changeView.bind(this, 'CREATE_VIEW')}
          />
        </ViewerWrapper>
      </React.Fragment>
    )
  }
  return <MarkDownHelper />
}

// TODO: use input in old IE
class TypeWriterContainer extends React.Component {
  componentDidMount() {
    const { typeWriter, attachment } = this.props

    init(typeWriter, attachment)
  }

  componentWillUnmount() {
    debug('TODO: store state to localstarange')
    // Message.success('草稿已经保存')
    uninit()
  }

  render() {
    const { typeWriter } = this.props

    const {
      cpType,
      thread,
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
        <Header isEdit={isEdit} curView={curView} thread={thread} />
        <View
          curView={curView}
          thread={thread}
          linkAddr={linkAddr}
          title={title}
          body={body}
          cpType={cpType}
        />
        <Footer
          isEdit={isEdit}
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
