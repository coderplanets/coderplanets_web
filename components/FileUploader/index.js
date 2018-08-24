/*
 *
 * FileUploader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { FileUploaderWrapper, InputFile } from './styles'
import { ASSETS_ENDPOINT } from '../../config'
import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:FileUploader')
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

class FileUploader extends React.Component {
  constructor(props) {
    super(props)
    /* eslint-disable */
    /* OSS sdk is import in _document from ali cdn */
    debug('process.env', process.env)
    try {
      this.state.ossClient = new OSS.Wrapper({
        region: process.env.ALI_OSS_RESION,
        accessKeyId: process.env.ALI_ACCESS_KEY,
        accessKeySecret: process.env.ALI_ACCESS_SECRET,
        bucket: process.env.ALI_OSS_BUCKET,
      })
    } catch (e) {
      console.error(e)
    }
    /* eslint-enable */
  }

  state = {
    ossClient: null,
  }

  componentWillUnmount() {
    /* eslint-disable */
    delete this.state.ossClient
    /* eslint-enable */
  }

  /* eslint-disable */
  handleCHange(e) {
    // TODO: Dir nameing
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
    this.state.ossClient
      .multipartUpload(`${getDir()}/${getFileName(filename)}`, theFile)
      .then(result => {
        /* console.log('result: ', result) */
        const url = `${ASSETS_ENDPOINT}/${result.name}`
        /* console.log('result.url: ', url) */
        this.props.onUploadDone(url)
      })
      .catch(err => {
        this.props.onUploadError(err)
      })
  }
  /* eslint-enable */

  render() {
    const { children } = this.props
    return (
      <FileUploaderWrapper>
        <InputFile
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={this.handleCHange.bind(this)}
        />
        {/* eslint-disable */}
        <label htmlFor="file">{children}</label>
        {/* eslint-enable */}
      </FileUploaderWrapper>
    )
  }
}

FileUploader.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onUploadStart: PropTypes.func,
  onUploadError: PropTypes.func,
  onUploadDone: PropTypes.func,
}

FileUploader.defaultProps = {
  onUploadStart: debug,
  onUploadError: debug,
  onUploadDone: debug,
}

export default FileUploader
