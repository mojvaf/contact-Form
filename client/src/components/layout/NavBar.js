import React, {Fragment,useContext} from 'react'
import PropTypes from 'prop-types'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'


const NavBar=({ title, icon})=> {

  const authContext = useContext(AuthContext)

  const {isAuthenticated, logout , user} = authContext   
 
  const onLogout = ()=>{
      logout()
  }
  const authLinks = ( 
      <Fragment>
         <li>Hello { user && user.name }</li>
         <li>
             <a onClick={onLogout} href="/login">
             <i class="fa fa-sign-out" aria-hidden="true"></i> <span className="hide-sm">Logout</span>
             </a>
         </li>
      </Fragment>
  
       )

       const guestLinks = ( 
        <Fragment>
           <li>
               <Link to='/register'>Register</Link>
           </li>
           <li>
               <Link to='/login'>Login</Link>
           </li>
        </Fragment>
    
         )
    return (
        <div className="navbar bg-primary">
           <h1>
            <FontAwesomeIcon icon={faHome} />
               <i className={icon}/> {title}
           </h1>  
           <ul>
               {isAuthenticated ? authLinks : guestLinks}
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