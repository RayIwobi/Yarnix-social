import rayicon from './assets/rayicon.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import './port.css'
import { Link } from 'react-router-dom' 

function Home() {


    
  return (
    <div className='main-container'>
        <div className='top-navigation'>
            <div className='ray'>Rayicon</div>
            <div className='top-links'>
                <Link to='/'><h3 style={{color:'blue'}}>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
        </div>
        <div className='topInfo1'>
        <div className='newclass'>
            <div>
                <h2>Hey, I am Raymond, a <br/><span>Full-Stack Developer</span></h2>
                <p>I am a fullstack developer and i will help you build beautiful applications</p>
            <div className='buttons'>
                <Link to='/contact'><button className='getintouch'>Get in touch</button></Link>
                <Link to='/projects'><button className='browseproject'>Browse projects</button></Link>
            </div>
            </div>
       
        </div >
             <div className='profilepic'>
                <img src={rayicon} alt='ray' /> 
            </div>
         </div >


            <div id='projects-home'>
            <div className='aboutme' >
            <h3>Projects</h3>
            <div className='under-aboutme'>
                <div className='straightline'></div>
                <p>Here’s a collection of some of my favorite projects that 
                highlight my skills in full-stack development, UI/UX design, and 
                problem-solving. Each project was an opportunity to explore new 
                technologies, overcome unique challenges, and deliver meaningful 
                digital experiences.</p>
            </div>
            <Link to='/projects'><button className='browseproject'>Browse projects</button></Link>
        </div>
        </div>


        {/* ---------My experience section -----------*/}
        <div className='stackTitle2'>My Stack</div>
        <div className='stack2Container'>
            
            {/* <div className='yellow-circle'></div>
            <div className='yellow-square'></div> */}
            <div className='allskills'>
            <div className='skillContainer2'>
                    <label>Website</label>
                    <ul className='configure'>
                        <li>Responsive Design</li>
                        <li>Wireframing</li>
                        <li>UserResearch</li>
                        <li>UI/UX Design</li>
                    </ul>
            </div>
            <div className='skillContainer2'>
                    <label>Frontend</label>
                    <ul className='configure'>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>Redux toolkit</li>
                        <li>HTML5</li>
                        <li>Vanilla CSS / Tailwind</li>
                        <li>Materia ui design</li>
                    </ul>
            </div>
            <div className='skillContainer2'>
                    <label>Backend</label>
                    <ul className='configure'>
                        <li >Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Render</li>
                        <li>Vercel</li>
                    </ul>
            </div>
            <div className='skillContainer2'>
                    <label>Soft Skils</label>
                    <ul className='configure'>
                        <li>Effective communication</li>
                        <li>Collaboration</li>
                        <li>Committment</li>
                        <li>Leadership</li>
                        <li>Quick learner</li>
                        <li>Creative</li>
                    </ul>
            </div>
            </div>
        </div>


        <div className='mystory'>
            <h2>My Story</h2>
            <p>
                Hi, I’m a passionate Full-Stack Developer with 4 years of 
                experience crafting dynamic, user-focused applications using the 
                React ecosystem and beyond. With a background in Computer Science, 
                I’ve built a strong foundation in both front-end and back-end 
                development, allowing me to create complete, scalable, and intuitive 
                digital experiences.<br/><br/>

                I specialize in JavaScript technologies like React, Node.js, and 
                MongoDB, but I also have hands-on experience with Python, PostgreSQL, 
                and MySQL. From responsive layouts with HTML/CSS to efficient APIs and 
                data models, I enjoy bringing ideas to life across the full stack. I 
                have a deep appreciation for beautiful design and functional user 
                experiences—whether it's a sleek e-commerce interface or a robust 
                dashboard...<Link to='/about' id='more'>more</Link>
            </p>
        </div>

        <div className='baselink-container'>
            <div className='top-links'>
                <Link to='/'><h3 style={{color:'blue'}}>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
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
                <h3 style={{color:'black'}}>I look forward to working with you</h3>
            <div className='buttons'>
                <Link to='/contact'><button className='getintouch'>Get in touch</button></Link>
                <Link to='/projects'><button className='browseproject'>Browse projects</button></Link>
            </div>
            </div>
            <div className='footerinfo'>
                <h4 style={{color:'black'}}>&copy; 2025 All Rights Reserved. Designed By Raymond Iwobi<br/>Built with React</h4>
            </div>
        </div>
      
    </div>
  )
}

export default Home
