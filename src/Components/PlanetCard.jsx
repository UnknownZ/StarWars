import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../context/AppContext'

function Planets({ name, orbital_period, population, index}) {
  const { store: { planets, favorites }, actions: { addFavorite } } = useContext(Context)

  return (
    <>
      <div className='col'>
        <div className="card cols-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{"Orbital period: "+orbital_period}</p>
            <p className="card-text">{"Population: "+population}</p>
            <Link className="btn btn-primary" 
            to={'/planet/'+index}
            >Learn more!</Link>
            <button className='btn btn-warning'
            onClick={() => { addFavorite(name) }}
            ><FontAwesomeIcon icon={faHeart} color="white" /></button>          </div>
        </div>
      </div>
    </>
  )
}

export default Planets