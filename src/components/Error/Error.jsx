import React from 'react'
import './Error.scss'

function Error ({error}) {
  return (
    <div className='error-container'>
      <h3 className='title'>
        Ops............ some error
      </h3>
      <p>
        {error}
      </p>
    </div>
  )
}

export default Error
