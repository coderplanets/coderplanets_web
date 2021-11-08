import OSS from 'ali-oss'
import { startsWith } from 'ramda'
import { ASSETS_ENDPOINT } from '@/config'

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

export const handleUploadFile = (ossClient, e, onUploadDone): void => {
  const { files } = e.target
  const file = files[0]

  doUploadFile(ossClient, file, onUploadDone)
}

export const doUploadFile = (ossClient, file, onUploadDone): void => {
  if (!file || !startsWith('image/', file.type)) return

  const fileSize = file.size / 1024 / 1024
  // eslint-disable-next-line no-alert
  if (fileSize > 1) return alert('不支持大于 1MB 的文件')

  // const { onUploadStart, onUploadError } = this.props

  // onUploadStart()
  const filename = file.name
  // const fullpath = `${getOSSDir()}/${getOSSFileName(filename)}`
  const fullpath = `/ugc/tmp/${filename}`

  ossClient
    .multipartUpload(fullpath, file)
    .then((result) => {
      const url = `${ASSETS_ENDPOINT}/${result.name}`
      onUploadDone(url)
    })
    .catch((err) => {
      // onUploadError(err)
      console.error(err)
    })
}
