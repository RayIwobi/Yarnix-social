import {useState} from 'react'
import './menu.css' 
import {Link} from 'react-router-dom'


function Menu() {

  

    //CODE FOR MOBILE CATEGORIES
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
                 ☰  {/*<img src={dropdown} alt='' style={{width:'15px', height:'10px', position:'absolute', marginTop:'10px',marginLeft:'3px'}} /> */}
            </button>

            {isOpen && (
            <div className='dropdown-menu' style={{marginLeft:'0.3px', backgroundColor:'#fcf3cf'}}>
                <Link to='/staples-and-grains' onClick={() => setIsOpen(false)}>Staples & Grains</Link>
                <hr/>
                <Link to='/tubers-and-root-crops' onClick={() => setIsOpen(false)}>Tubers & Root Crop</Link>
                <hr/>
                <Link to='/spices-and-seasoning' onClick={() => setIsOpen(false)}>Spices & Seasonings</Link>
                <hr/>
                <Link to='/vegetables-and-greens' onClick={() => setIsOpen(false)}>Vegetables & Greens</Link>
                <hr/>
                <Link to='/oils-and-condiments' onClick={() => setIsOpen(false)}>Oils & Condiments</Link>
                <hr/>
                <Link to='/meat-fish-and-seafood' onClick={() => setIsOpen(false)}>Meat, Fish & Sea Food</Link>
                <hr/>
                <Link to='/dairy-and-beverages' onClick={() => setIsOpen(false)}>Dairy & Beverages</Link>
                <hr/>
                <Link to='/snacks-and-sweets' onClick={() => setIsOpen(false)}>Snacks & Sweets</Link>
                <hr/>
                <Link to='/frozen-and-canned-food' onClick={() => setIsOpen(false)}>Frozen & Canned Foods</Link>
                </div>
            )}
            
        </div>
  )
}

export default Menu




