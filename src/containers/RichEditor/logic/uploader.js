// eslint-disable-next-line import/named
import { ASSETS_ENDPOINT } from '@config'

let ossClient = null
let store = null

export const initUploaderClient = _store => {
  store = _store
  /* eslint-disable */
  /* OSS sdk is import in _document from ali cdn */

  try {
    /* this.state.ossClient = new OSS.Wrapper({ */
    ossClient = new OSS.Wrapper({
      region: '',
      accessKeyId: '',
      accessKeySecret: '',
      bucket: '',
    })

    console.log('ossClient init done')
  } catch (e) {
    console.error(e)
    // this.props.onUploadError(e)
  }
  /* eslint-enable */
}

export const uploadFile = file => {
  // const { ossScriptLoaded } = this.state
  // if (!ossScriptLoaded) return alert('脚本未加载...')
  // if (!file || !R.startsWith('image/', file.type)) return false
  // const initTimestamp = Date.now() / 1000

  const fileSize = file.size / 1024 / 1024
  if (fileSize > 2) return alert('资源有限，请不要上传大于 2MB 的文件')

  // const curTimeStamp = Date.now() / 1000
  // if (curTimeStamp - initTimestamp <= 3) {
  //   return false
  // }

  // this.setState({ initTimestamp: curTimeStamp })

  // sendEvent('start')
  // onUploadStart()

  const filename = file.name
  const fullpath = `${getOSSDir()}/${getOSSFileName(filename)}`

  return ossClient
    .multipartUpload(fullpath, file)
    .then(result => {
      console.log('upload done result', result)
      const url = `${ASSETS_ENDPOINT}/${result.name}`
      return {
        success: 1,
        file: { url },
        // 'https://camo.githubusercontent.com/678857ab89085c81690b7a4069e266a2b1cc1c30/68747470733a2f2f636170656c6c612e706963732f37396365393436612d643633362d343163642d616139362d6433626335656366646530332e6a7067',
      }
      // const url = `${ASSETS_ENDPOINT}/${result.name}`
      // sendEvent('finish')
      // this.onUploadDone(url)
    })
    .catch(err => {
      console.log(err)
      // sendEvent('finish')
      // onUploadError(err)
    })
}

const getOSSDir = () => {
  const thread = store.curThread
  const date = new Date()
  let day = date.getDate()
  if (day < 10) {
    day = `0${day}`
  }

  return `${thread}/${date.getFullYear()}_${date.getMonth() + 1}/${day}`
}

const getOSSFileName = filename => {
  const community = store.curCommunity.raw
  const thread = store.curThread
  const userName = store.accountInfo.nickname
  const userId = store.accountInfo.id
  const id = store.viewingData.id || 'new'
  const curDate = new Date()
  const curTime = curDate.getTime()

  return `${community}-${thread}-${id}-${userName}-${userId}-${curTime}-${filename}`
}
