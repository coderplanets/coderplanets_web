/* eslint-disable jsx-a11y/label-has-for */
/*
 * OSSUploader
 */

import {
  FC,
  memo,
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react'

import { buildLog } from '@/utils/logger'
import uid from '@/utils/uid'

import { Wrapper, Label, HintIcon, TurboIcon, InputFile } from './styles'
import { initOSSClient, handleUploadFile } from './helper'

/* eslint-disable-next-line */
const log = buildLog('w:OSSUploader:index')

type TProps = {
  children: ReactNode
  onUploadDone?: (url: string) => void
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
  const [loading, setLoading] = useState(false)
  const [ossClient, setOSSClient] = useState(null)

  const labelRef = useRef(null)

  useEffect(() => {
    const ossClient = initOSSClient()

    setOSSClient(ossClient)
    setUniqueId(uid.gen())
  }, [])

  const onStart = useCallback(() => {
    setLoading(true)
  }, [])

  const onDone = useCallback(
    (url) => {
      setLoading(false)
      onUploadDone(url)
    },
    [onUploadDone],
  )

  const onError = useCallback((msg) => {
    alert(msg)
    setLoading(false)
  }, [])

  const callbacks = { onStart, onDone, onError }

  return (
    <Wrapper>
      <InputFile
        type="file"
        name={`file-${uniqueId}`}
        id={`file-${uniqueId}`}
        accept={fileType}
        onChange={(e) => handleUploadFile(ossClient, e, filePrefix, callbacks)}
      />
      <Label htmlFor={`file-${uniqueId}`} ref={labelRef} $loading={loading}>
        {children}
      </Label>

      {!loading && <HintIcon onClick={() => labelRef.current.click()} />}
      {loading && <TurboIcon />}
    </Wrapper>
  )
}

export default memo(OSSUploader)
