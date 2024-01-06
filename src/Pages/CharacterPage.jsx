import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/AppContext'


function CharacterPage() {
  const { index } = useParams()
  const [person, setPerson] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { store: { people }, actions: { fetchURL } } = useContext(Context)
  const charURL = people[index].url

  useEffect(() => {
    if (person.length === 0) {
      fetchObject(charURL);
    }
    else {
      setIsLoading(false);
    }
  }, []);

  const fetchObject = async (URL) => {
    let data = await fetchURL(URL)
    setIsLoading(false)
    setPerson(data)
  }

  return (
    <>
      {isLoading ? (
        <div>
          Loading data...
        </div>
      ) :
        <div>
          <h1>{person.name}</h1>
          <p>Height: {person.height}</p>
          <p>Birth year: {person.birth_year}</p>
          <p>Gender: {person.gender}</p>
          <p>Hair color: {person.hair_color}</p>
          <p>Eye color: {person.eye_color}</p>
        </div>
      }
    </>
  )
}

export default CharacterPage