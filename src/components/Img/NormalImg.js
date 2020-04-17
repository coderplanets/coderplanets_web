import React, { useState } from 'react'

const NormalImg = ({ className, src, alt }) => {
  const [loaded, setLoaded] = useState(true)
  return (
    <React.Fragment>
      {loaded ? (
        <img
          className={className}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false)
            console.log('load errored')
          }}
        />
      ) : (
        <div>x</div>
      )}
    </React.Fragment>
  )
}

export default NormalImg // React.memo(NormalImg)
