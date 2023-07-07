import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Register = ( )=> {
  const router = useRouter()
  const handleRegister = async(values) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const res= await fetch('http://localhost:3001/register', requestOptions)
  const data= await res.json()
  if(data.success){
    router.push('/')
  }
  }

    return (
        <div>
    
      
        <Formik
          initialValues={{
            phoneNumber: '',
            password: '',
            email: '',
            role: ''
          }}
          onSubmit={values => {
            handleRegister(values)
          }}
        >
          {({ errors, touched, handleChange }) => (
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
              <Field name="email"  placeholder="email"/>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field as="select" name="role">
                <option value="User">User</option>
                  <option value="Rider">Rider</option>
             </Field>
              <br/>
              {errors.role && touched.role ? <div>{errors.role}</div> : null}
              <br/>
              <button type="submit">Submit</button>
              Already User <Link href="/">Sign in</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}
export default Register


