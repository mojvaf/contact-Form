import React, {useState} from 'react'

 const Register = () => {
     const [user,setUser]=useState({
         name: '',
         email:'',
         password:'',
         password2:''
     })

     const onChange = e =>{
       setUser({...user, [e.target.name]: e.target.value})
     }

     const onSubmit = e =>{
       e.preventDefault()
       console.log('Register submit')
     }
     const {name,email,password,password2} = user; 
    return (
        <div className='form-container'>
            <h1>
             Account <span className='text-primary'>Register</span>   
            </h1>
            <from onSubmit={onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>  
                <input type='text' name='name' value={name} onChange={onChange}/>
              </div>  
              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>  
                <input type='email' name='email' value={email} onChange={onChange}/>
              </div> 
              <div className='form-group'>
                <label htmlFor='password'>password</label>  
                <input type='password' name='password' value={password} onChange={onChange}/>
              </div> 
              <div className='form-group'>
                <input type='password' name='password2' value={password2} onChange={onChange}/>
                
              </div>  
              <input type='submit' value='Register' className='btn btn-primary btn-block'/>
            </from>
        </div>
    )
}
export default Register