import React, { useState } from 'react'
import api from '../../services/api'
import './index.css'

function Main() {

  const [url, setUrl] = useState('http://streammus.com.br')
  const [preview, setPreview] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
  	const { data: og } = await api.post('main', { url })

    setPreview(og.data)
    console.log(og.data)
  }

  function extractHostname(url){
    let hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2]
    }
    else {
        hostname = url.split('/')[0]
    }

    hostname = hostname.split(':')[0]
    hostname = hostname.split('?')[0]

    return hostname
}

  return (
    <div className="main">
      <form action="" className="formulario" onSubmit={handleSubmit}>
      	<input type="url" placeholder="http://" onChange={e => setUrl(e.target.value)} value={url}/>
      	<button>preview</button>
      </form>

      <div className="preview">
        {preview && <div className="container_preview">
          <a href={preview.ogUrl} target="_blank" rel="noopener noreferrer">
            <img src={preview.ogImage.url} alt={preview.ogTitle}/>
            <div className="info">
              <strong>{preview.ogTitle}</strong>
              <p>{preview.ogDescription} <span>{extractHostname(preview.ogUrl)}</span></p>
            </div>
          </a>
        </div>}
      </div>
    </div>
  )
}

export default Main
