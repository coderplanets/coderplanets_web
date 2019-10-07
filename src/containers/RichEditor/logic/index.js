// import R from 'ramda'
import { useEffect } from 'react'

// import EditorJS from '@editorjs/editorjs'
import EditorJS from '@groupher/editor'
import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import Checklist from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'

import Header from '@groupher/editor-header'
import Quote from '@groupher/editor-quote'
import LinkTool from '@groupher/editor-link'
import Code from '@groupher/editor-code'
import ImageTool from '@groupher/editor-image'

// import Prism from 'mastani-codehighlight'

// import { TYPE, EVENT, ERR } from '@constant'
import { buildLog } from '@utils'

import { initUploaderClient, uploadFile } from './uploader'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:RichEditor')

export const someMethod = () => {}

// ###############################
// init & uninit
// ###############################

export const useInit = (_store, uploaderLoaded) => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)

    if (uploaderLoaded) {
      // eslint-disable-next-line
      const editor = new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        holderId: 'codex-editor',
        tools: {
          header: {
            class: Header,
            inlineToolbar: false,
          },
          quote: Quote,
          list: {
            class: List,
            inlineToolbar: true,
          },
          marker: {
            class: Marker,
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          delimiter: Delimiter,
          inlineCode: InlineCode,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: 'http://localhost:4001/api/og-info',
            },
          },
          code: {
            class: Code,
            inlineToolbar: false,
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
              },
              ossKeys: {
                ALI_OSS_RESION: 'ALI_OSS_RESION',
                // region: process.env.ALI_OSS_RESION,
                ALI_ACCESS_KEY: 'ALI_ACCESS_KEY',
                // accessKeyId: process.env.ALI_ACCESS_KEY,
                ALI_ACCESS_SECRET: 'ALI_ACCESS_SECRET',
                // accessKeySecret: process.env.ALI_ACCESS_SECRET,
                ALI_OSS_BUCKET: 'ALI_OSS_BUCKET',
                // bucket: process.env.ALI_OSS_BUCKET,

                // region: process.env.ALI_OSS_RESION,
                // accessKeyId: process.env.ALI_ACCESS_KEY,
                // accessKeySecret: process.env.ALI_ACCESS_SECRET,
                // bucket: process.env.ALI_OSS_BUCKET,
              },
              uploader: {
                /**
                 * Upload file to the server and return an uploaded image data
                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByFile(file) {
                  // your own uploading logic here
                  return uploadFile(file)
                  // return MyAjax.upload(file).then(() => {
                  //   return {
                  //     success: 1,
                  //     file: {
                  //       url:
                  //         'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                  //       // any other image data you want to store, such as width, height, color, extension, etc
                  //     },
                  //   }
                  // })
                },
              },
            },
          },
        },
        data: {
          time: 1552744582955,
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: 'this is @',
              },
            },
            {
              type: 'code',
              data: {
                lang: 'css',
                text:
                  'body {\n  color: tomato;\n  margin-left: 20px;\n};\n\nconsole.log("hello fuck")',
              },
            },
          ],
          version: '2.15.1',
        },
        onChange: () => {
          editor.save().then(data => {
            console.log('onChange data: ', data)
            // Prism.highlightAll()
          })
        },
      })
      initUploaderClient(store)
    }

    return () => {
      // log('effect uninit')
    }
  }, [_store, uploaderLoaded])
}
