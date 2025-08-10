import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import './port.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='main-container'>
        <div className='top-navigation'>
            <div className='ray'>Rayicon</div>
            <div className='top-links'>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
                <Link to='/about'><h3 style={{color:'blue'}}>About</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
        </div>

        <div className='aboutme'>
            <h3>About me</h3>&nbsp;
            <div className='under-aboutme'>
                <div className='straightline'></div>
                <p >
                    Hi, I’m a passionate Full-Stack Developer with 4 years of experience 
                    crafting dynamic, user-focused applications using the React ecosystem and beyond. With a background 
                    in Computer Science, I’ve built a strong foundation in both front-end and back-end development, 
                    allowing me to create complete, scalable, and intuitive digital experiences.<br/><br/>

                    I specialize in JavaScript technologies like React, Node.js, and MongoDB, but I also have hands-on 
                    experience with Python, PostgreSQL, and MySQL. From responsive layouts with HTML/CSS to efficient 
                    APIs and data models, I enjoy bringing ideas to life across the full stack.

                    I have a deep appreciation for beautiful design and functional user experiences—whether it's a sleek 
                    e-commerce interface or a robust dashboard. <br/><br/> I’m a creative problem solver who loves thinking outside 
                    the box, and I thrive in collaborative environments where communication and innovation go hand in hand.

                    Beyond the screen, I’m a travel enthusiast who enjoys exploring new cultures and perspectives—which 
                    often inspires my approach to building inclusive and globally minded apps.

                    I’m also flexible with working hours, reliable, and always ready to learn and adapt. Whether working 
                    independently or as part of a team, I bring strong communication skills, curiosity, and a can-do attitude to every project.

                    Let’s build something amazing together!
                </p>
            </div>
            
        </div>

        <div className='baselink-container'>
            <div className='top-links'>
                <Link to='/'><h3 >Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
                <Link to='/about'><h3 style={{color:'blue'}}>About</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
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

export default About
