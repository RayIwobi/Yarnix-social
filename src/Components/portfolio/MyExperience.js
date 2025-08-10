import React from 'react'
import './port.css'
import { Link } from 'react-router-dom'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'


function MyExperience() {
  return (
    <div className='main-container'>
      <div className='top-navigation'>
                  <div className='ray'>Rayicon</div>
                  <div className='top-links'>
                      <Link to='/'><h3>Home</h3></Link>
                      <Link to='/experience'><h3 style={{color:'blue'}}>Experience</h3></Link>
                      <Link to='/projects'><h3>Projects</h3></Link>
                      <Link to='/about'><h3>About</h3></Link>
                      <Link to='/contact'><h3>Contact</h3></Link>
                  </div>
              </div>


      <div className='stack-container'>
          <p id='experience'>My Experience</p>
      </div>
      <div className='experienceBox'>
        <div className='titlesection'>
          <div className='topyear'>
              Full-Stack React Developer<br/>
              NediFoods E-commerce (Freelance | Remote)<br/>
              Jan 2024 – Present<br/>
          </div>
        </div>
        <div className='details'>
            <ul style={{color:'black'}}>
              <li>Developed and deployed a production-ready MERN stack e-commerce platform, featuring product catalog browsing, cart management, secure checkout, order tracking, and admin controls.</li>
              <li>Designed and implemented RESTful APIs for key features such as user registration and authentication, product CRUD, cart operations, checkout processing, and dashboard analytics.</li>
              <li>Integrated Stripe Checkout and Webhooks, enabling secure payment handling, automatic order fulfillment, and real-time email notifications to customers and administrators using Nodemailer + Mailtrap.</li>
              <li>Built a dynamic admin dashboard with charts, tables, and filterable data views using React + Chart.js, enabling insights into orders, revenue trends, inventory, and user activity.</li>
              <li>Implemented JWT-based authentication with HTTP-only cookies, protected routes, and role-based access control (RBAC) to differentiate user and admin privileges.</li>
              <li>Created a modular component architecture using React, enabling shared UI across different features like checkout steps, product cards, and user profiles.</li>
              <li>Integrated Cloudinary for image upload, transformation, and optimization in the product management dashboard.</li>
              <li>Built a comment and review system for products with user validation, average rating calculation, and conditional rendering based on user ownership.</li>
              <li>Refactored multiple APIs and frontend states to use Redux Toolkit + createAsyncThunk for cleaner logic, consistent state handling, and centralized error management.</li>
              <li>Added pagination, filtering, and search to product listings using Express query parameters and MongoDB’s $regex and $limit.</li>
              <li>Used Multer for secure file uploads and MongoDB Aggregation Pipelines to generate backend reports on sales, user growth, and inventory stock levels.</li>
              <li>Set up CI/CD pipelines with GitHub Actions for automated testing and deployments to Vercel (frontend) and Render (backend).</li>
              <li>Collaborated with a small remote team using Agile practices, contributing to sprint planning, code reviews, Git branching strategies, and weekly demos.</li>
            </ul>
      </div>
      </div><br/><br/><br/>

      <div className='experienceBox'>
        <div className='titlesection'>
          <div className='topyear'>
              Junior Web Developer<br/>
              Techlod Nig <br/>
              Aug 2020 – Apr 2023<br/>
          </div>
        </div>
        <div className='details'>
          <div className='detailAdjust'>
            <ul style={{color:'black'}}>
              <li>Contributed to full-stack projects across real estate and travel sectors.</li>
              <li>Developed responsive frontend components with React and styled-components.</li>
              <li>Created and consumed RESTful APIs to power search filters, booking engines, and contact forms.</li>
              <li>Worked closely with designers and QA to ensure accessibility, responsiveness, and pixel-perfect implementation.</li>
              <li>Wrote unit tests for backend endpoints and frontend UI components.</li>
              <li>Participated in code reviews, agile sprint planning, and stand-ups to align with project goals and ensure timely delivery.</li>
              <li>Deployed applications to Netlify, Vercel, and Render, managing environment variables, build pipelines, and custom domain configurations.</li>
              <li>Integrated third-party services such as Google Maps API, Cloudinary (for media management), and location-based search filters to enhance user experience.</li>
            </ul>
      </div>
      </div>
      </div>





     <div className='baselink-container'>
            <div className='top-links'>
                <Link to='/'><h3 >Home</h3></Link>
                <Link to='/experience'><h3 style={{color:'blue'}}>Experience</h3></Link>
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

export default MyExperience
