import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import '../App.css';
import Button from 'react-bootstrap/Button';
const Form = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
            errors.password = "Password required"
        }
        else if (
            (values.password.length < 8)
          ) {
            errors.password = 'Minimum of 8 chars required';
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
            <div className = "dInput">
                <div>
                    <label>Email<span className='mandatory'>*</span></label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                   <div style={{ color: 'red'}}>
                        <ErrorMessage name="email" />
                    </div>
                    
                    {/* {errors.email && touched.email && errors.email} */}
                </div>
                <div>
                    <label>Password<span className='mandatory'>*</span></label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <div style={{ color: 'red'}}>
                        <ErrorMessage name="password" />
                    </div>
                </div>
                <div>
                    <label>Email2:</label>
                    <input
                        type="email"
                        name="email2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email2}
                    />
                    <div style={{ color: 'red'}}>
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>
            <div className = "dInput">
                <div>
                    <label>Email3:</label>
                    <input
                        type="email"
                        name="email3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email3}
                    />
                    {errors.email && touched.email && errors.email}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                </div>
                <div>
                    <label>Email3:</label>
                    <input
                        type="email"
                        name="email4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email4}
                    />
                    {errors.email && touched.email && errors.email}
                </div>
            </div>
          <Button  variant="primary" type = "submit" disabled={isSubmitting}>Submit</Button>{' '}
        </form>
      )}
    </Formik>
  </div>
);

export default Form;