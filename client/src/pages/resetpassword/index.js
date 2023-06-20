import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {useState} from 'react'
import Link from 'next/link';

import {setUserDetails} from '../../redux/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';
const resetPassword = ( )=> {
 
  const [error, setError] = useState('')
  const {token} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const triggerLogin = async(values)=>{
      try{
            const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
      };
      const res = await fetch('http://localhost:3001/change-password', requestOptions)
      const data = await res.json()
      if(data.isLoggedIn){
        dispatch(setUserDetails(data))
      }else{
        setError(data.msg)
      }
  
    }catch(err){
        setError('something went wrong!')
      }
    
    
     
    }

 
    return (
        <div>
   
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
          }}
          onSubmit={values => {
            triggerLogin(values)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="oldPassword" type="password" placeholder="Current Password"/>
              {errors.oldPassword && touched.oldPassword ? (
                <div>{errors.oldPassword}</div>
              ) : null}
              <br/>
              <Field name="newPassword" type="password" placeholder="New password"/>
              {errors.newPassword && touched.newPassword? (
                <div>{errors.newPassword}</div>
              ) : null}
              <br/>
              <span style={{color:'crimson'}}>{error}</span>
              <br/>
              <button type="submit">Submit</button>
             Dont have an account yet ?   <Link href="/register">Sign Up</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default resetPassword