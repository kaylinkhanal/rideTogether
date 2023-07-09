import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '@/styles/form.module.css'

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
        <div className={styles.body}>
    
      
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
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <h2 className={styles.title}>Register</h2>
              <Field name="phoneNumber" placeholder="phoneNumber" className={styles.input}/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="password" placeholder="password" className={styles.input}/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <Field name="email"  placeholder="email" className={styles.input}/>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br/>
              <Field as="select" name="role">
                <option value="User">User</option>
                <option value="Rider">Rider</option>
                </Field>
                <br/>
              {errors.role && touched.role ? <div>{errors.role}</div> : null}
              <button type="submit"  className={styles.submit}>Submit</button>
              Already User <Link href="/">Sign in</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register
