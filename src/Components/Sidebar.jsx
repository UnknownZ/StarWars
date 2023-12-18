import React from 'react'
import Favorite from "./Favorite"


function Sidebar() {
    return (
        <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Favorites list</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <p>Here you will find your favorites:</p><br/>                   
                    </div>
                    <ul className='list-group'>
                        <Favorite
                         name = "Favorite 1"
                        />                        
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Sidebar