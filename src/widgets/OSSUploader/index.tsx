/* eslint-disable jsx-a11y/label-has-for */
/*
 * OSSUploader
 */

import { FC, memo, ReactNode, useState, useEffect, useRef } from 'react'

import { buildLog } from '@/utils/logger'
import uid from '@/utils/uid'

import { Wrapper, Label, HintIcon, InputFile } from './styles'
import { initOSSClient, handleUploadFile } from './helper'

/* eslint-disable-next-line */
const log = buildLog('c:OSSUploader:index')

type TProps = {
  children: ReactNode
  onUploadDone?: () => void
  filePrefix?: string | null
  fileType?: string
}

const OSSUploader: FC<TProps> = ({
  children,
  fileType = 'image/*',
  filePrefix = null,
  onUploadDone = log,
}) => {
  const [uniqueId, setUniqueId] = useState(null)
  const [ossClient, setOSSClient] = useState(null)

  const labelRef = useRef(null)

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
        onChange={(e) =>
          handleUploadFile(ossClient, e, filePrefix, onUploadDone)
        }
      />
      <Label htmlFor={`file-${uniqueId}`} ref={labelRef}>
        {children}
      </Label>
      <HintIcon onClick={() => labelRef.current.click()} />
    </Wrapper>
  )
}

export default memo(OSSUploader)
