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

// const View = ({ curView, thread, copyRight, title, body, linkAddr }) => {
const View = ({ curView, thread, editData, mentionList }) => {
  if (curView === 'CREATE_VIEW' || curView === 'PREVIEW_VIEW') {
    return (
      <React.Fragment>
        <ViewerWrapper active={curView === 'CREATE_VIEW'}>
          <Editor
            thread={thread}
            editData={editData}
            mentionList={mentionList}
          />
        </ViewerWrapper>
        <ViewerWrapper active={curView === 'PREVIEW_VIEW'}>
          <Preview
            editData={editData}
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
  constructor(props) {
    super(props)
    const { typeWriter, attachment } = props

    init(typeWriter, attachment)
  }

  componentWillUnmount() {
    debug('TODO: store state to localstarange')
    uninit()
  }

  render() {
    const { typeWriter } = this.props

    const {
      copyRight,
      thread,
      curView,
      publishing,
      success,
      error,
      warn,
      isEdit,
      statusMsg,
      editData,
      mentionListData,
      referUsersData,
    } = typeWriter

    debug('referUsersData: ', referUsersData)

    return (
      <Wrapper>
        <Header
          isEdit={isEdit}
          curView={curView}
          thread={thread}
          referUsers={referUsersData}
        />
        <View
          curView={curView}
          editData={editData}
          thread={thread}
          copyRight={copyRight}
          mentionList={mentionListData}
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
