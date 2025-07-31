import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './sidebar.css';
// import RssFeedIcon from '@mui/icons-material/RssFeed';
import feed from '../sidebar/sidebar_assets/feed.png'
import chat from '../sidebar/sidebar_assets/chat.png'
import youtube from '../sidebar/sidebar_assets/youtube.png'
import group from '../sidebar/sidebar_assets/group.png'
import bookmark from '../sidebar/sidebar_assets/bookmark.png'
import question from '../sidebar/sidebar_assets/question.png'
import job from '../sidebar/sidebar_assets/job.png'
import event from '../sidebar/sidebar_assets/event.png'
import course from '../sidebar/sidebar_assets/course.png'

import {Users} from '../../pages/home/dummyData'
// import Menu from '../DropDownMenu/Menu';
import {Link} from 'react-router-dom'


function Sidebar() {

        const [currentUser, setCurrentUser] = useState('')
        
        useEffect(() => {
           axios.get('https://yarnix-social.onrender.com/auth/dashboard', { withCredentials: true })
       // axios.get('http://localhost:10000/auth/dashboard', { withCredentials: true })
            .then(res => {
              setCurrentUser(res.data);
            })
            .catch(err => {
              console.error('Error fetching user:', err);
            });
        }, []);
  
  
  return (
    <div className="sidebar">
        <div style={{fontSize:'16px', fontStyle:'italic', marginLeft:'5px'}}>Welcome: {currentUser.username}</div>
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <Link to='/feed'>
            <li className="sidebarListItem">
              <img src={feed} alt='feed'  className='sidebarimage'/>
              <span className="sidebarlistItenText">Feed</span>             
            </li>
            </Link>
            <li className="sidebarListItem">
              <img src={chat} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <img src={youtube} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <img src={group} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <img src={bookmark} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <img src={question} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <img src={job} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <img src={event} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Events</span>
            </li>
            <li className="sidebarListItem">
              <img src={course} alt='feed' className='sidebarimage'/>
              <span className="sidebarlistItenText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton" >Show more</button>
          <hr className='sidebarHr'/>
          

          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <div key={u.id}>
              <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src={u.profilePicture} alt=""/>
              <span className='sidebarFriendName'>{u.username}</span>
            </li>
            </div>
            ))}
            
            
          </ul>
        </div>
    </div>
  )
}

export default Sidebar
