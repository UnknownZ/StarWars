import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../context/AppContext'

function Starships({ name, model, total_crew, index }) {
  const { store: { starships, favorites }, actions: { addFavorite } } = useContext(Context)

  return (
    <>
      <div className='col'>
        <div className="card cols-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{"Model: " + model}</p>
            <p className="card-text">{"Total crew: " + total_crew}</p>
            <Link className="btn btn-primary" to={'/starship/'+index}>Learn more!</Link>
            <button className='btn btn-warning'
              onClick={() => { addFavorite(name) }}
            ><FontAwesomeIcon icon={faHeart} color="white" /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Starships
