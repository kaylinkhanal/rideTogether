import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Style } from '../../styles/users.module.css';
const Register = ( )=> {
    return (
        <div className='register page' style={{ textAlign: 'center' }}>
    
      
        <Formik
          initialValues={{
            phoneNumber: '',
            password: '',
            email: '',
            role: ''
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
             <h2 className="form-signin-heading">Register Here,</h2>
              <Field name="phoneNumber" placeholder="phoneNumber"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/><br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/><br/>
              <Field name="email"  placeholder="email"/>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br/><br/>
              <Field name="role"  placeholder="role"/>
              {errors.role && touched.role ? <div>{errors.role}</div> : null}
              <br/><br/>
              
              <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button><br/>
              Already User <Link href="/">Sign in</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register