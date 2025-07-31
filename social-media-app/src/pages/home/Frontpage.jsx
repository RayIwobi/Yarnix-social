import React from 'react'
import Login from '../../components/Authentication/Login'
import HomeTopbar from './HomeTopbar'
import './home.css'
import connect from './assets/connect.png'

function Frontpage() {
  return (
    <div className='container'>
      <div className='hometopbar'>
        <HomeTopbar />
      </div>
    <div className='frontpage-settings'>
       <div className='frontpage-writeup'>
        <img src={connect} alt='' style={{width:'100px', height:'100px'}}/>
        <h4>Thread your life into the world - every post is a story, every story builds a bond.</h4>
       </div>
       <div>
        <Login/>
       </div>
      
    </div>
    </div>
  )
}

export default Frontpage
