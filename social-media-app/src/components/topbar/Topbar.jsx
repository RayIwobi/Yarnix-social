import './topbar.css'
import {Search} from '@mui/icons-material'
import Menu from '../DropDownMenu/Menu'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import avatar from './assets/avatar.png'
import chat from './assets/chat.png'
import bell from './assets/bell.png'




function Topbar() {

  const navigate = useNavigate()

  axios.defaults.withCredentials = true
      const handleLogout = () => {
        // axios.get('https://nediecom.onrender.com/auth/logout' , { withCredentials: true })
         axios.get('http://localhost:12000/auth/logout' , { withCredentials: true })
        .then(res => {
          if(res.data.status){
            navigate('/')
            window.location.reload()
          }
          else{}
        })
        .catch(err => {
          console.log(err)
        })
    }
  return (
    <div className="topbarContainer" >
       <div className='mobile-dropdown' style={{color:'black'}}> 
        <Menu/>
      </div>
      <div className="topbarLeft">
        <Link to='/home'><span className="logo">Yarnix</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input className="searchinput" placeholder="Search for items"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <Link to='/home'><span className="topbarLink">Timeline</span></Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <img src={avatar} alt='' style={{width:'25px', height:'25px'}}/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <img src={chat} alt='' style={{width:'25px', height:'25px'}} />
            <span className="topbarIconBadge">10</span> 
          </div>
          <div className="topbarIconItem">
            <img src={bell} alt='bell' style={{width:'25px', height:'25px'}}/>
            <span className="topbarIconBadge">24</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarimg"/> 
        <h6 onClick={handleLogout} style={{cursor:'pointer', color:'white'}}>
          logout
        </h6>
      </div>

    </div>
  )
}

export default Topbar