import { React, useContext, useEffect, useState } from 'react'
import CharacterCard from '../Components/CharacterCard'
import { Context } from '../context/AppContext'
import URLS from '../config'

function CharacterContainer() {
  const {store: { people }, actions: {fetchURL, setCharList }}  = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(people)
    {
      if(people.length === 0){
        fetchCharacters(URLS.URL_Characters)
      }
    }
    else 
    fetchCharacters(URLS.URL_Characters)
  }, [])

  const fetchCharacters = async (URL) => {
    let tempURL = URL
    let characters = [];
    let data
    do {
        data = await fetchURL(tempURL)
        data.results.map((character) => {
            characters.push(character)
        })
        tempURL = data.next
    }
    while (tempURL)
    setIsLoading(false)
    setCharList(characters)
}

  return(
    <div>
    {isLoading ? (
      <div>
        Loading data...
      </div>
    ) : (
      <>
      <div className="row g-4">
        <div className="card-group">
          {
            people.map((item) => {
             return <CharacterCard 
                key={item.url}
                name={item.name}
                hairColor={item.hair_color}
                eyeColor={item.eye_color}
              />
            })
          }
        </div>
      </div>
    </>
    )}
    </div>
  )
}

export default CharacterContainer