import image1 from './assets/image1.png'
import github from './assets/github.png'
import web from './assets/web.png'
import linkedin from './assets/linkedin.png'
import yarnix from './assets/yarnix.jpg'
import movieplace from './assets/movieplace.jpg'
import meter from './assets/meter.jpg'
import login from './assets/login.jpg'
import productlisting from './assets/productlisting.jpg'


import './port.css'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='main-container'>
        <div className='top-navigation'>
            <div className='ray'>Rayicon</div>
            <div className='top-links'> 
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3 style={{color:'blue'}}>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
        </div>

        <div className='projecttitle'>
            <h3>Some of my Projects</h3><br/>
        </div>
            <div className='project-text'>
                <div className='project-line'></div>
                <p>Here’s a collection of some of my favorite projects that highlight my skills in full-stack development, UI/UX design, and problem-solving. Each project was an opportunity to explore new technologies, overcome unique challenges, and deliver meaningful digital experiences.

                    From dynamic web applications to responsive user interfaces and robust backend systems, these projects reflect my passion for clean code, performance, and user-first design. Dive in and see what I’ve been building!</p>
            </div>
        
        <div className='projects-division'>
            <h1>Projects</h1>
            <div className='over-Container'>
            <div className='projectsContainer'>
                <img src={image1} alt='nedifoods-image' />
                <h2>Nedifoods Ecommerce</h2>
                <p>
                    NediFoods is a full-stack e-commerce web app for browsing, adding to cart, and securely purchasing food products online.
                    It features user authentication, cart management, Stripe checkout, and admin product controls.
                    Built with React, using useContext for state management and react-router-dom for navigation.
                    Backend powered by Express, MongoDB, JWT Auth, and API calls.
                </p>
                <div className='projects-links'>
                    <Link to='https://github.com/RayIwobi/Ecom-backend'><img src={github} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Github</Link>
                    <Link to='https://nedifoods.co.uk'><img src={web} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Live website</Link>
                </div>
            </div>
            <div className='projectsContainer'>
                <img src={yarnix} alt='nedifoods-image' />
                <h2>Yarnix social media App</h2>
                <p>
                    Yarnix is a full-stack social media platform where users can post, comment, like, and manage profiles—similar to Facebook.
                    It supports user auth, real-time updates, and secure content interactions.
                    Frontend built with React, using Axios, useContext, react-router-dom, and Vanilla CSS.
                    Backend includes Node.js, Express, MongoDB, JWT Auth, and Cloudinary for image uploads.
                </p>
                <div className='projects-links'>
                        <Link><img src={github} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Github</Link>
                        <Link><img src={web} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Live website</Link>
                </div>
            </div>
            </div>

            <div className='over-Container'>
            <div className='projectsContainer'>
                <img src={movieplace} alt='nedifoods-image' />
                <h2>Movieplace API App</h2>
                <p>
                    Movie API App is a React-based app that lets users search for movies and view detailed info fetched from the OMDb API.
                    It features a responsive UI with movie search, result listings, and individual movie detail pages.
                    Built with React, using react-router-dom for routing and vanilla CSS for styling.
                    Fetches movie data in real time from the OMDb API at omdbapi.com.
                </p>
                <div className='projects-links'>
                    <Link to='https://github.com/RayIwobi/MovieApp'><img src={github} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Github</Link>
                    <Link to='https://movieapp-y4hw.onrender.com'><img src={web} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Live webapp</Link>
                </div>
            </div>
            
            <div className='projectsContainer'>
                <img src={meter} alt='nedifoods-image' />
                <h2>Metering Website </h2>
                <p>
                    Metering and Instrumentation Website showcases products, services, and technical information related to industrial metering and control systems.
                    Built with React, using react-router-dom for navigation and CSS for responsive design.
                    Dynamic content and user interactions are handled via Axios, with possible backend support for form submissions. The platform is built using the MERN stack technology.
                </p>
                <div className='projects-links'>
                    <Link to='https://github.com/RayIwobi/metering-website'><img src={github} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Github</Link>
                    <Link to='https://metering-website-azure.vercel.app/'><img src={web} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Live website</Link>
                </div>
            </div>

            
            </div>

            <div className='over-Container'>
            <div className='projectsContainer'>
                <img src={login} alt='nedifoods-image' />
                <h2>Map Pinning App</h2>
                <p>
                    Map Pinning App lets users drop pins on a map, add reviews to favorite locations, and save them to a database.
                    It includes user authentication and supports viewing, adding, and deleting location pins.
                    Built with React, Leaflet API, react-router-dom, and styled with vanilla CSS.
                    Backend uses Node.js, Express, MongoDB, JWT, and bcrypt for secure auth and data storage.
                </p>
                <div className='projects-links'>
                    <Link to=''><img src={github} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Github</Link>
                    <Link to=''><img src={web} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Live website</Link>
                </div>
            </div>

            <div className='projectsContainer'>
                <img src={productlisting} alt='nedifoods-image' />
                <h2>Product listing API App</h2>
                <p>
                    Product Listing API App is a frontend app that fetches and displays products from the Fake Store API, simulating a basic shopping experience.
                    Users can browse products, view detailed info, and add items to a cart.
                    Built with React, using Redux Toolkit for state management and react-router-dom for navigation.
                    Styled with vanilla CSS and powered by data from the external Fake Store API.
                </p>
                <div className='projects-links'>
                    <Link to='https://github.com/RayIwobi/product-listing'><img src={github} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Github</Link>
                    <Link to='https://productlisting.valorprojects.com.ng/'><img src={web} alt='' style={{width:'20px', height:'20px'}} />&nbsp;Live website</Link>
                </div>
            </div>
            
            </div>
        </div>

        

        <div className='baselink-container'>
            <div className='top-links'>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3  style={{color:'blue'}}>Projects</h3></Link>
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

export default Projects
