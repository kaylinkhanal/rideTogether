import { Formik, Form, Field } from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router'


const AddVehicle = ( )=> {
    const hanldeImageSave = (e)=>{
        console.log(e.target.files[0])
    }
  const handleSave = async(values) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: "hi"
  };
  const res= await fetch('http://localhost:3001/register', requestOptions)

  }

    return (
        <div>
        <Formik
          initialValues={{
            vehicleType: '',
            maxSeats: '',
            perKmPrice: ''
          }}
          onSubmit={values => {
            handleSave(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="vehicleType" placeholder="vehicleType"/>
              {errors.vehicleType && touched.vehicleType ? (
                <div>{errors.vehicleType}</div>
              ) : null}
              <br/>
              <Field name="maxSeats" placeholder="maxSeats"/>
              {errors.maxSeats && touched.maxSeats? (
                <div>{errors.maxSeats}</div>
              ) : null}
              <br/>
              <Field name="perKmPrice"  placeholder="perKmPrice"/>
              {errors.perKmPrice && touched.perKmPrice ? <div>{errors.perKmPrice}</div> : null}
              <br/>
              <input type="file" onChange={hanldeImageSave}/>
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
        </div>
    )
}


//

export default AddVehicle