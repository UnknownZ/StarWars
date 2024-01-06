import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../context/AppContext'

function CharacterCard({ name, hairColor, eyeColor, index }) {
  const { store: { people, favorite, storeIndex}, actions: { addFavorite, setIndex } } = useContext(Context)

  return (
    <>
      <div className='col'>
        <div className="card cols-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{"Hair color: " + hairColor}</p>
            <p className="card-text">{"Eye color: " + eyeColor}</p>
            <Link className="btn btn-primary" to={'/character/'+index}>Learn more!</Link>
            <button className='btn btn-warning'
              onClick={() => { addFavorite(name) }}
            ><FontAwesomeIcon icon={faHeart} color="white" /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CharacterCard