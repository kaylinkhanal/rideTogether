import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setUserDetails } from '../../redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/login.module.css'
import { Input } from 'postcss';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const triggerLogin = async (values) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      };
      const res = await fetch('http://localhost:3001/login', requestOptions);
      const data = await res.json();
      if (data.isLoggedIn) {
        dispatch(setUserDetails(data));
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div className={styles['form-container']} >
      <div className={styles['login_form']}>
      <Formik
        initialValues={{
          phoneNumber: '',
          password: '',
        }}
        onSubmit={(values) => {
          triggerLogin(values);
        }}
        validationSchema={Yup.object({
          phoneNumber: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 className={styles['form-signin-heading']}>Please login</h2>
            <Field name="phoneNumber" placeholder="Phone Number" />
            {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
            <br />
            <br />
            <Field name="password" placeholder="Password" type="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <br />
            <span style={{ color: 'crimson' }}>{error}</span>
            <br />
            <button className={styles['btn btn-lg btn-primary btn-block']}  type="submit">
           Login
            </button>
            <br />
            


           
            Don't have an account yet? <Link href="/register">Sign Up</Link>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default Login;
