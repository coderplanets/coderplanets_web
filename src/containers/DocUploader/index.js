/*
 *
 * DocUploader
 *
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import T from 'prop-types'
import { startsWith } from 'ramda'

import { ASSETS_ENDPOINT } from '@/config'
import { buildLog, storePlug, uid, Global } from '@/utils'

import { Wrapper, InputFile } from './styles'

import {
  init,
  uninit,
  onUploadError,
  getOSSDir,
  getOSSFileName,
  sendEvent,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:DocUploader')

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
    ossScriptAnchor: null,
    ossScriptLoaded: false,
    // use unique id to init the file input, otherwise it will be the some instance
    uniqueId: uid.gen(),
    initTimestamp: Date.now() / 1000,
  }

  componentDidMount() {
    this.loadScriptAndInitOSS()

    const { docUploader, pasteImage } = this.props
    init(docUploader)

    // if (ossScriptLoaded) this.initOssClient()
    if (pasteImage) this.initPasteWatcher()
  }

  componentWillUnmount() {
    log('componentWillUnmount')
    const { ossScriptLoaded, ossScriptAnchor } = this.state

    /* eslint-disable */
    delete this.state.ossClient
    /* eslint-enable */
    const { pasteImage } = this.props
    if (pasteImage) {
      Global.removeEventListener('paste', this.handlePaste.bind(this), true)
    }
    uninit()

    if (ossScriptLoaded) {
      ossScriptAnchor.removeEventListener('load', () => {
        this.setState({ ossScriptLoaded: false })
      })
    }
  }

  loadScriptAndInitOSS() {
    let { ossScriptAnchor } = this.state

    ossScriptAnchor = document.createElement('script')
    ossScriptAnchor.src =
      'https://gosspublic.alicdn.com/aliyun-oss-sdk-5.2.0.min.js'
    ossScriptAnchor.async = true
    document.getElementsByTagName('head')[0].appendChild(ossScriptAnchor)

    ossScriptAnchor.addEventListener('load', () => {
      log('load done')
      this.initOssClient()
      this.setState({ ossScriptLoaded: true, ossScriptAnchor })
    })
    ossScriptAnchor.addEventListener('error', () => {
      this.setState({ ossScriptLoaded: false, ossScriptAnchor: null })
    })
  }

  initPasteWatcher() {
    log('initPasteWatcher')
    Global.addEventListener('paste', this.handlePaste.bind(this), true)
  }

  initOssClient() {
    /* eslint-disable */
    /* OSS sdk is import in _document from ali cdn */
    try {
      /* this.state.ossClient = new OSS.Wrapper({ */
      const ossClient = new OSS.Wrapper({
        region: process.env.NEXT_PUBLIC_ALI_OSS_RESION,
        accessKeyId: process.env.NEXT_PUBLIC_ALI_ACCESS_KEY,
        accessKeySecret: process.env.NEXT_PUBLIC_ALI_ACCESS_SECRET,
        bucket: process.env.NEXT_PUBLIC_ALI_OSS_BUCKET,
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
    // const {files} = e.target.files
    const file = files[0]

    this.doUploadFile(file)
  }

  doUploadFile(file) {
    const { ossScriptLoaded } = this.state
    // eslint-disable-next-line no-alert
    if (!ossScriptLoaded) return alert('脚本未加载...')
    if (!file || !startsWith('image/', file.type)) return false

    const fileSize = file.size / 1024 / 1024
    // eslint-disable-next-line no-alert
    if (fileSize > 2) return alert('资源有限，请不要上传大于 2MB 的文件')

    const { onUploadStart, onUploadError } = this.props
    const { ossClient, initTimestamp } = this.state

    const curTimeStamp = Date.now() / 1000
    if (curTimeStamp - initTimestamp <= 3) {
      return false
    }

    this.setState({ initTimestamp: curTimeStamp })

    sendEvent('start')
    onUploadStart()
    const filename = file.name
    const fullpath = `${getOSSDir()}/${getOSSFileName(filename)}`

    ossClient
      .multipartUpload(fullpath, file)
      .then((result) => {
        const url = `${ASSETS_ENDPOINT}/${result.name}`
        sendEvent('finish')
        this.onUploadDone(url)
      })
      .catch((err) => {
        sendEvent('finish')
        onUploadError(err)
      })
  }

  render() {
    const { children, fileType } = this.props
    const { uniqueId } = this.state

    return (
      <Wrapper>
        <InputFile
          type="file"
          name={`file-${uniqueId}`}
          id={`file-${uniqueId}`}
          accept={fileType}
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
  children: T.oneOfType([T.string, T.node]).isRequired,
  onUploadStart: T.func,
  onUploadError: T.func,
  onUploadDone: T.func,
  docUploader: T.any.isRequired,
  pasteImage: T.bool,
  fileType: T.oneOf(['image/*']),
}

DocUploaderContainer.defaultProps = {
  onUploadStart: log,
  onUploadDone: log,
  onUploadError,
  pasteImage: true,
  fileType: 'image/*',
}

export default inject(storePlug('docUploader'))(observer(DocUploaderContainer))
