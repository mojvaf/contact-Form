import React from 'react'
import PropTypes from 'prop-types'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
const NavBar=({ title, icon})=> {
    return (
        <div className="navbar bg-primary">
           <h1>
            <FontAwesomeIcon icon={faHome} />
               <i className={icon}/> {title}
           </h1>  
           <ul>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/about'>About</Link>
               </li>
           </ul>
        </div>
    )
}


NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
NavBar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}
export default NavBar