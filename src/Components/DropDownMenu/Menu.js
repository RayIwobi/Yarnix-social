import {useState} from 'react'
import './menu.css' 
import {Link} from 'react-router-dom'

function Menu() { 
    //CODE FOR MOBILE MENU
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

  return (
        <div className="dropdown">  
            <button 
                className="dropdown-toggle" 
                onClick={toggleMenu} 
                aria-expanded={isOpen} 
            >
                ☰ Menu 
                <div className='webname'>rayicon</div>
            </button>

            {isOpen && (
            <div className='dropdown-menu' style={{marginLeft:'0.3px', backgroundColor:'#fcf3cf'}}>
                <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
                <hr/>
                <Link to='/experience' onClick={() => setIsOpen(false)}>Experience</Link>
                <hr/>
                <Link to='/projects' onClick={() => setIsOpen(false)}>Projects</Link>
                <hr/>
                <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
                <hr/>
                <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
                <hr/>
                </div>
            )}
            
        </div>
  )
}

export default Menu




