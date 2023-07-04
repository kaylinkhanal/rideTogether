import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react'
import Link from 'next/link';

import {setUserDetails} from '../../redux/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Img from '@/components/Image';

import { io } from 'socket.io-client';


export const socket = io('http://localhost:3001',{
  cors: {
    origin: "*"
  }
});


const Login = ( )=> {
  useEffect(()=>{
    socket.on('connection')
  },[])
 
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
      const res = await fetch('http://localhost:3001/login', requestOptions)
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
          <Img/>
        <Formik
          initialValues={{
            phoneNumber: '',
            password: '',
          }}
          onSubmit={values => {
            triggerLogin(values)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="phoneNumber" placeholder="phoneNumber"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
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


export default Login