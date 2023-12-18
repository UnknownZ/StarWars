import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Favorite({name}) {
  return (
    <>
      <li className="list-group-item">{name}<button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} color="white"/></button></li>                     
    </>
  )
}

export default Favorite