import React from 'react'
import './hometopbar.css'

function HomeTopbar() {
  return (
    <div className='mainContainer'>
        <div className='inncerContainer'>
            <div className='logonamephrase'>
               {/* <img src={yarnix} alt=''/> */}
               <h2>Yarnix</h2>
                <h3>A place to weave and share your stories</h3> 
            </div>
            <div className='helpabout'>
                <h3>Help</h3>
                <h3>About</h3>
            </div>
        </div>
      
    </div>
  )
}

export default HomeTopbar
