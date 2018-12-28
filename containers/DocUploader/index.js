/*
 *
 * DocUploader
 *
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ASSETS_ENDPOINT } from '../../config'

import { Wrapper, InputFile } from './styles'

import { makeDebugger, storePlug, uid, Global } from '../../utils'
import { init, onUploadError, getOSSDir, getOSSFileName } from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:DocUploader')
/* eslint-enable no-unused-vars */

class DocUploaderContainer extends React.Component {
  /*
  constructor(props) {
    super(props)

    const { docUploader } = props
    init(docUploader)
    this.initOssClient()

    this.state = {
      ossClient: null,
      uniqueId: uid.gen(),
    }
  }
  */

  state = {
    ossClient: null,
    // use unique id to init the file input, otherwise it will be the some instance
    uniqueId: uid.gen(),
  }

  componentDidMount() {
    const { docUploader, pasteImage } = this.props
    init(docUploader)

    this.initOssClient()
    if (pasteImage) this.initPasteWatcher()
  }

  componentWillUnmount() {
    debug('componentWillUnmount')
    /* eslint-disable */
    delete this.state.ossClient
    /* eslint-enable */
    const { pasteImage } = this.props
    if (pasteImage) {
      Global.removeEventListener('paste', this.handlePaste.bind(this), true)
    }
  }

  initPasteWatcher() {
    debug('initPasteWatcher')
    Global.addEventListener('paste', this.handlePaste.bind(this), true)
  }

  initOssClient() {
    /* eslint-disable */
    /* OSS sdk is import in _document from ali cdn */
    try {
      /* this.state.ossClient = new OSS.Wrapper({ */
      const ossClient = new OSS.Wrapper({
        region: process.env.ALI_OSS_RESION,
        accessKeyId: process.env.ALI_ACCESS_KEY,
        accessKeySecret: process.env.ALI_ACCESS_SECRET,
        bucket: process.env.ALI_OSS_BUCKET,
        /* internal: true, */
        /* secure: true, */
      })

      this.setState({ ossClient })
    } catch (e) {
      console.error(e)
      this.props.onUploadError(e)
    }
    /* eslint-enable */
  }

  handlePaste({ clipboardData: { files } }) {
    const file = files[0]
    this.doUploadFile(file)
  }

  onUploadDone(url) {
    /* eslint-disable */
    this.props.onUploadDone(url)
    delete this.state.ossClient
    /* eslint-enable */
    this.initOssClient()
  }

  handleInputChange({ target: { files } }) {
    console.log('handleInputChange e: ', files)
    // const {files} = e.target.files
    const file = files[0]

    this.doUploadFile(file)
  }

  doUploadFile(file) {
    if (!file || !R.startsWith('image/', file.type)) return false
    console.log('is Image!')

    const fileSize = file.size / 1024 / 1024
    if (fileSize > 2) {
      return alert('资源有限，请不要上传大于 2MB 的文件')
    }
    const { onUploadStart, onUploadError } = this.props
    const { ossClient } = this.state

    onUploadStart()
    const filename = file.name
    const fullpath = `${getOSSDir()}/${getOSSFileName(filename)}`

    ossClient
      .multipartUpload(fullpath, file)
      .then(result => {
        const url = `${ASSETS_ENDPOINT}/${result.name}`
        this.onUploadDone(url)
      })
      .catch(err => onUploadError(err))
  }

  render() {
    const { children } = this.props
    const { uniqueId } = this.state

    return (
      <Wrapper>
        <InputFile
          type="file"
          name={`file-${uniqueId}`}
          id={`file-${uniqueId}`}
          accept="image/*"
          onChange={this.handleInputChange.bind(this)}
        />
        {/* eslint-disable */}
        <label htmlFor={`file-${uniqueId}`}>{children}</label>
        {/* eslint-enable */}
      </Wrapper>
    )
  }
}

DocUploaderContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onUploadStart: PropTypes.func,
  onUploadError: PropTypes.func,
  onUploadDone: PropTypes.func,
  docUploader: PropTypes.any.isRequired,
  pasteImage: PropTypes.bool,
}

DocUploaderContainer.defaultProps = {
  onUploadStart: debug,
  onUploadDone: debug,
  onUploadError,
  pasteImage: true,
}

export default inject(storePlug('docUploader'))(observer(DocUploaderContainer))
