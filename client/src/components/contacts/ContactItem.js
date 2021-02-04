import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPhone} from 'react-icons/fa';
import {FaRegEnvelopeOpen} from 'react-icons/fa'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const ContactItem=({contact})=> {
  
const contactContext = useContext(ContactContext)

    const {deleteContact} = contactContext

    const {id, name, email, phone, type,img_path} = contact

   const onDelete = ()=>{
       deleteContact(id)
   }

    return (
        <div className='card bg-light'>
           <h3 className='text-primary text-left'>
              {name}{' '}<span style={{float: 'right'}}
               className={
                   'badge ' +
                 (type === 'professional' ? 'badge-success' : 'badge-primary')}
                 >
                 {type.charAt(0).toUpperCase() + type.slice(1)}
                 </span>
           </h3> 
           <ul className='list'>
               {email && (<li><FaRegEnvelopeOpen/> {email}</li>)}
               {phone && (<li><FaPhone /> {phone}</li>)}
           </ul>
            <p >
            <button className='btn btn-dark btn-sm'>Edit</button>
            <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}
export default ContactItem