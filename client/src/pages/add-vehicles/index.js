import { Formik, Form, Field } from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router'


const AddVehicle = ( )=> {
  const [file, setfile] = useState(null)
    const handleImageSave = (e)=>{
      setfile(e.target.files[0])
    }
  const handleSave = async(values) => {
    const formData = new FormData()
 
    Object.entries(values).map(item=>{
      formData.append(item[0], item[1])
    })
    formData.append('vehicleImage', file)

    const requestOptions = {
      method: 'POST',
      body: formData
  };
  const res= await fetch('http://localhost:3001/add-vehicle', requestOptions)

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
              <input type="file" onChange={handleImageSave}/>
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
        </div>
    )
}


//

export default AddVehicle