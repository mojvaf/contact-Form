import React, {useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER    
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name:'Jill',
                email:'jill@gmail.com',
                phone:'111-111-111',
                type:'personal',
                img_path: '../../components/images/one.jpg'
            },
            {
                id:2,
                name:'sara',
                email:'sara@gmail.com',
                phone:'222-222-222',
                type:'professional'
            },
            {
                id:3,
                name:'harry',
                email:'harry@gmail.com',
                phone:'333-333-333',
                type:'personal'
            }
        ]
    }

    const  [state,dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({ type: ADD_CONTACT, payload: contact})
    }

    // Delete Contact

    //Set current Contact

    //clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

  return (
      <ContactContext.Provider 
      value={{
          contacts: state.contacts, addContact
      }}>
          {props.children}
      </ContactContext.Provider>
  )
}

export default ContactState