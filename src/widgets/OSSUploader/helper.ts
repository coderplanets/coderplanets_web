import OSS from 'ali-oss'
import { startsWith } from 'ramda'
import { ASSETS_ENDPOINT } from '@/config'

const getOSSDir = (): string => {
  const curDateTime = new Date()
  const year = curDateTime.getFullYear()
  const month = curDateTime.getMonth() + 1
  const day = curDateTime.getDate()

  return `ugc/${year}-${month}-${day}`
}

export const initOSSClient = (): any => {
  const ossClient = new OSS.Wrapper({
    // region: process.env.NEXT_PUBLIC_ALI_OSS_RESION,
    // accessKeyId: process.env.NEXT_PUBLIC_ALI_ACCESS_KEY,
    // accessKeySecret: process.env.NEXT_PUBLIC_ALI_ACCESS_SECRET,
    // bucket: process.env.NEXT_PUBLIC_ALI_OSS_BUCKET,
    region: 'oss-cn-shanghai',
    accessKeyId: 'LTAI5tGbMRig5pytvsYCfkLK',
    accessKeySecret: 'acnQofqG56fGnJ4DhmEjXAJXR9hlkg',
    bucket: 'cps-oss',
    /* internal: true, */
    /* secure: true, */
  })

  return ossClient
}

export const handleUploadFile = (ossClient, e, filePrefix, callbacks): void => {
  const { files } = e.target
  const file = files[0]

  doUploadFile(ossClient, file, filePrefix, callbacks)
}

export const doUploadFile = (ossClient, file, filePrefix, callbacks): void => {
  if (!file || !startsWith('image/', file.type)) return

  const fileSize = file.size / 1024 / 1024
  // eslint-disable-next-line no-alert
  if (fileSize > 1) return alert('不支持大于 1MB 的文件')

  callbacks.onStart()

  const timestamp = new Date().getTime()
  // onUploadStart()

  const filename = `${timestamp}_${file.name}`
  const fileFullname = filePrefix ? `${filePrefix}_${filename}` : filename
  const OSSDir = getOSSDir()

  const fullpath = `${OSSDir}/${fileFullname}`

  ossClient
    .multipartUpload(fullpath, file)
    .then((result) => {
      const url = `${ASSETS_ENDPOINT}/${result.name}`
      callbacks.onDone(url)
    })
    .catch((err) => {
      callbacks.onError('上传失败')
      // onUploadError(err)
      console.error(err)
    })
}
