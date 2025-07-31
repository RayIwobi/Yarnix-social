import React from 'react'
import Signup from '../../components/Authentication/Signup'
import HomeTopbar from './HomeTopbar'
import connect from './assets/connect.png'
import './home.css'

function Frontpage() {
  return (
    <div className='container'>
      <div className='hometopbar'>
        <HomeTopbar/>
      </div><br/>
    <div className='frontpage-settings' >
       <div className='frontpage-writeup' style={{marginTop:'-39px'}}>
        <img src={connect} alt='' style={{width:'100px', height:'100px'}}/>
        <h4>Thread your life into the world - every post is a story, every story builds a bond.</h4>
       </div>
       <div>
        <Signup/>
       </div>
      
    </div>
    </div>
  )
}

export default Frontpage
