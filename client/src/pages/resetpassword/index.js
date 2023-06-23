import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {useState, useEffect} from 'react'
import {setUserDetails} from '../../redux/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';

const resetPassword = ( )=> {
  // const [userDetails, setUserDetails ] = useState({})
  const {id} = useSelector(state=>state.user)
  const fetchUserDetails = async()=> {
    try{
  //     const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(values)
  // };
    const res =  await fetch('http://localhost:3001/users/'+id)
    const data = await res.json()

    setUserDetails(data)
  }catch(err) {
    setError('something went wrong1!')
  }}
  useEffect(()=>{
    fetchUserDetails()
  },[])
  const [error, setError] = useState('')
  // const {token} = useSelector(state=>state.user)
    // const dispatch = useDispatch()
    const triggerLogin = async(values)=>{
      try{
          const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
      };
      const res = await fetch('http://localhost:3001/change-password/'+id, requestOptions)
      const data = await res.json()
      // setUserDetails(data)

      // if(data.isLoggedIn){
      //   dispatch(setUserDetails(data))
      // }else{
      //   setError(data.msg)
      // }
  
    }catch(err){
        setError('something went wrong!')
      }
    
    
     
    }

 
    return (
        <div>
   
        <Formik
          initialValues={{
            phoneNumber: '',
            oldPassword: '',
            newPassword: '',
            // confirmPassword: ''
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
              {/* <Field name="confirmPassword" type="password" placeholder="Confirm password"/>
              {errors.confirmPassword && touched.confirmPassword? (
                <div>{errors.confirmPassword}</div>
              ) : null} */}
              <span style={{color:'crimson'}}>{error}</span>
              <br/>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default resetPassword