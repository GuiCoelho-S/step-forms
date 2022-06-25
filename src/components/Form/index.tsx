import React from 'react';
import { useHealthSchema } from '../../hooks/useHealthSchema';
import { Formik, Form, Field } from 'formik';
import { Steps } from '../Steps';
import * as S from './style';

function validateEmail(value: string) {

  let error;

  if (!value) {

    error = 'Required';

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {

    error = 'Invalid email address';

  }

  return error;

}
export const FormComponent: React.FC = () => {

  const { formikHealth } = useHealthSchema();
  return (
    <S.Container>
        <Steps>
      <form onSubmit={formikHealth.handleSubmit}>
        <input type="email" name='email' id='email' onChange={formikHealth.handleChange} placeholder="here"/>


        <label htmlFor="idade">Idade</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={formikHealth.handleChange}
          onBlur={formikHealth.handleBlur}
          value={formikHealth.values.age}
        />   
         {formikHealth.touched.age && formikHealth.errors.age ? (
        <div>{formikHealth.errors.age}</div>
      ) : null}       
        <button type='submit'>Submit</button>
      </form>

        </Steps>
      
    </S.Container>
  );
}
