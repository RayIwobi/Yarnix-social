import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import rayicon from './assets/rayicon.jpg'
import './port.css'
import { Link } from 'react-router-dom' 

function Contact() {
  return (
    <div className='main-container'>
        <div className='top-navigation'>
            <div className='ray'>Rayicon</div>
            <div className='top-links'>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/contact'><h3 style={{color:'blue'}}>Contact</h3></Link>
            </div>
        </div>


        <div className='topInfo1'>
        <div className='newclass'>
            <div>
            <h1>Get in touch</h1>
                <p>I look forward to hearing from you. </p>
                <p>Reach out through 
                    my contact details below. </p>
            <div className='contact-info'>
                Email: rayicon@gmail.com <br/>
                Phone: +234 7060758339, +234 9131823783, +234 9074403272<br/>
                Whatsapp: +234 7060758339
            </div>
            <p>Thanks for stopping by.</p>
            </div>
       
        </div >
             <div className='profilepic'>
                <img src={rayicon} alt='ray' /> 
            </div>
         </div >


        <div className='baselink-container'>
            <div className='top-links'>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/contact'><h3  style={{color:'blue'}}>Contact</h3></Link>
            </div>
            <div className='baseicone'>
                <Link to='https://www.linkedin.com/in/raymond-iwobi-843785157/'>
                <img src={linkedin} alt='linkedin' /></Link>
                <Link to='https://github.com/RayIwobi'>
                <img src={github} alt='github'  /></Link>
            </div>
        </div>

        <div className='baseinfo'>
            <div>
                <h3>I look forward to working with you</h3>
            <div className='buttons'>
                <Link to='/contact'><button className='getintouch'>Get in touch</button></Link>
                <Link to='/projects'><button className='browseproject'>Browse projects</button></Link>
            </div>
            </div>
            <div className='footerinfo'>
                <h4>&copy; 2025 All Rights Reserved. Designed By Raymond Iwobi<br/>Built with React</h4>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
