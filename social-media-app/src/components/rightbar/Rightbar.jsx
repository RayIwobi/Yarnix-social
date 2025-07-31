import React from 'react'
import './rightbar.css'
import {Users} from '../../pages/home/dummyData'
import ImageSlider from '../imageslider/ImageSlider'


function Rightbar() {
  return (
   
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className='birthdayContainer'>
            <img  className="birthdayImg" src='assets/gift.png' alt=''/>
            <span className='birthdayText'><b>Radlie</b> and <b>3 other friends</b> are having their birthdays today</span>
          </div><br/>
           <ImageSlider className='rightbarAdslider'/><br/>
          <h4 className='rightbarTitle'>online Friends</h4>
          {Users.map((u) => (
            <div key={u.id}>
              <ul className='rightbarFiendList'>
            <li className='rightBarFriend'>
              <div className='rightBarProfileImgContainer'>
                <img className='rightbarProfileImg' src={u.profilePicture} alt=''/>
                <span className='rightbarOnline'></span>
              </div>
              <span className='rightbarUsername'>{u.username}</span>
            </li>
          </ul>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Rightbar