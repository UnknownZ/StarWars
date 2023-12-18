import React from 'react'
import { useLocation } from 'react-router-dom'

function PlanetPage () {
  const location = useLocation()
  const name = location.state.variables.name
  console.log(name)

  return(
    <>
      <h1>{name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum sit amet metus sit amet faucibus. In hac habitasse platea dictumst. Curabitur accumsan risus quis elementum mollis. Curabitur porta lorem non ullamcorper porttitor. Duis porttitor rhoncus magna, vel rutrum eros. Nulla convallis sed est at lobortis. Pellentesque vitae purus justo. Proin sed lacus et elit ultricies commodo non suscipit erat. </p>
    </>
  )
}

export default PlanetPage