import React from 'react'
import {Col} from 'react-bootstrap'
import './index.scss'


function WishCard({data}) {

  const {name, wish} = data;
  
  return (
    <div className='mt-3 cst-wish-card'>
        <h5>{name}</h5>
        <p className='fst-italic cst-text-darken'>{wish}</p>
    </div>
  )
}

export default WishCard