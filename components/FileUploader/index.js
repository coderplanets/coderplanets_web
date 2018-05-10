/*
 *
 * FileUploader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { FileUploaderWrapper, InputFile } from './styles'

// style reference: https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
// accept reference: https://stackoverflow.com/questions/4328947/limit-file-format-when-using-input-type-file

class FileUploader extends React.Component {
  componentDidMount() {}

  /* eslint-disable */
  handleCHange(e) {
    console.log('handleCHange files: ', e.target.files)
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
          onChange={this.handleCHange}
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
}

FileUploader.defaultProps = {}

export default FileUploader
