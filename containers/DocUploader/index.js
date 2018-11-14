/*
 *
 * DocUploader
 *
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { ASSETS_ENDPOINT } from '../../config'

import { Wrapper, InputFile } from './styles'

import { makeDebugger, storePlug, uid } from '../../utils'
import { init, onUploadError } from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:DocUploader')
/* eslint-enable no-unused-vars */

const getDir = () => {
  /* yearYmonthM */
  const date = new Date()
  let day = date.getDate()
  if (day < 10) {
    day = `0${day}`
  }

  return `posts/${date.getFullYear()}_${date.getMonth() + 1}/${day}`
}

const getFileName = filename => {
  const community = 'javascript'
  const part = 'post'
  const partId = '113'
  const nickname = 'mydearxym'
  const userId = '112'

  return `${community}--${part}--${partId}--${nickname}-${userId}--${filename}`
}

class DocUploaderContainer extends React.Component {
  constructor(props) {
    super(props)

    const { docUploader } = props
    init(docUploader)
    this.initOssClient()

    this.state = {
      ossClient: null,
      // use unique id to init the file input, otherwise it will be the some instance
      uniqueId: uid.gen(),
    }
  }

  componentWillUnmount() {
    /* eslint-disable */
    delete this.state.ossClient
    /* eslint-enable */
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

  onUploadDone(url) {
    /* eslint-disable */
    this.props.onUploadDone(url)
    delete this.state.ossClient
    /* eslint-enable */
    this.initOssClient()
  }

  /* eslint-disable */
  handleCHange(e) {
    const files = e.target.files
    /* console.log('handleCHange files: ', files) */
    const theFile = files[0]
    if (!theFile) return false

    const FileSize = theFile.size / 1024 / 1024
    if (FileSize > 2) {
      return alert('资源有限，请不要上传大于 2MB 的文件')
    }

    this.props.onUploadStart()
    const filename = theFile.name
    const fullpath = `${getDir()}/${getFileName(filename)}`

    this.state.ossClient
      .multipartUpload(fullpath, theFile)
      .then(result => {
        const url = `${ASSETS_ENDPOINT}/${result.name}`
        this.onUploadDone(url)
      })
      .catch(err => this.props.onUploadError(err))
  }
  /* eslint-enable */

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
          onChange={this.handleCHange.bind(this)}
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
}

DocUploaderContainer.defaultProps = {
  onUploadStart: debug,
  onUploadDone: debug,
  onUploadError,
}

export default inject(storePlug('docUploader'))(observer(DocUploaderContainer))
