import React, { PropTypes } from 'react'

const Sidebar = () => {
  return <div>
    <div className='sidebar-wrapper'>
      <div className='nick-details'>
        <img src='/images/nick.jpg' alt='Picture of Nick Maskell' id='nickProfile'/>
        <h1>Nick Maskell</h1>
        <div className='social'>
          <ul>
            <a href='https://www.facebook.com/nrmaskell' className='icon facebook'>facebook</a>
            <a href='https://twitter.com/nickmask' className='icon twitter'>twitter</a>
            <a href='https://github.com/nickmask' className='icon github'>github</a>
            <a href='https://www.linkedin.com/in/nickmask' className='icon linkedin'>linkedin</a>
          </ul>
        </div>
        <div className='about'>
          <p>/Web Developer<br/>/Marketer<br/>/Tech Enthusiast</p>
        </div>
      </div>
      <div className='mobile-nav'>
         <div className='menu-btn' id='menu-btn'>
           <div className='spanDiv'></div>
             <span></span>
             <span></span>
             <span></span>
         </div>
      </div>
      <nav className ='responsive-menu'>
        <ul className='sidebar-nav '>
          <li className='nav-item current-page'><a href='/index.html'>Home</a></li>
          <li className='nav-item'><a href='/projects/projects.html'>Projects</a></li>
          <li className='nav-item'><a href='/blog/blog.html'>Blog</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <nav id='sidebar-nav contact'>
        <ul id='contact'>
          <li> <a href='/other/contact.html'>Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
}

Sidebar.propTypes = {
}

export default Sidebar
