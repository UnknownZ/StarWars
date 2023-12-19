import {React, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../context/AppContext'

function Favorite({name}) {
  const { store: { favorite }, actions: { deleteFavorite } } = useContext(Context)


  return (
    <>
      <li className="list-group-item">{name}<button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} 
      onClick={() => { deleteFavorite(name) }}
      color="white"/></button></li>                     
    </>
  )
}

export default Favorite