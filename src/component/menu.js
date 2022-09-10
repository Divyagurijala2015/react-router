import React from 'react' 
import { NavLink } from 'react-router-dom'
function Menu(props){
    return(
        <nav>
            <div className='navbar navbar-expand-md navbar-dark bg-secondary'>
                <div className="container">
                    <NavLink to={`/`}  className='navbar-brand'>react router</NavLink>

                    <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="collapse navbar-collapse" id='menu'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to={`/home`} className='nav-link'>HOME</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to={`/about`} className='nav-link'>About</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to={`/portfolio`} className='nav-link'>Portfolio</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to={`/resume`} className='nav-link'>Resume</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to={`/contact`} className='nav-link'>Contact</NavLink>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Menu