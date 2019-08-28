import React from 'react'
import './index.css'

function Main() {

  function handleSubmit(e){
  	console.log(e.target)
  }

  return (
    <div className="main">
      <form action="" className="formulario" onSubmit={handleSubmit}>
      	<input type="url" placeholder="httpp://"/>
      	<button>salvar</button>
      </form>

      <div className="preview"></div>
    </div>
  )
}

export default Main
