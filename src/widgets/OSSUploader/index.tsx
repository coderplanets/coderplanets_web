/* eslint-disable jsx-a11y/label-has-for */
/*
 * OSSUploader
 */

import { FC, memo, ReactNode, useState, useEffect } from 'react'

import { buildLog } from '@/utils/logger'
import uid from '@/utils/uid'

import { Wrapper, InputFile } from './styles'
import { initOSSClient, handleUploadFile } from './helper'

/* eslint-disable-next-line */
const log = buildLog('c:OSSUploader:index')

type TProps = {
  children: ReactNode
  onUploadDone?: () => void
  fileType?: string
}

const OSSUploader: FC<TProps> = ({
  children,
  fileType = 'image/*',
  onUploadDone = log,
}) => {
  const [uniqueId, setUniqueId] = useState(null)
  const [ossClient, setOSSClient] = useState(null)

  useEffect(() => {
    const ossClient = initOSSClient()

    setOSSClient(ossClient)
    setUniqueId(uid.gen())
  }, [])

  return (
    <Wrapper>
      <InputFile
        type="file"
        name={`file-${uniqueId}`}
        id={`file-${uniqueId}`}
        accept={fileType}
        onChange={(e) => handleUploadFile(ossClient, e, onUploadDone)}
      />
      <label htmlFor={`file-${uniqueId}`}>{children}</label>
    </Wrapper>
  )
}

export default memo(OSSUploader)
