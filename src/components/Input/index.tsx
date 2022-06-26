import React, { ChangeEvent } from 'react';
import * as S from './style';


interface TextFieldProps {
  label: string,
  id: string,
  kind: string,
  name: string,
  formik: any,
  className?: string,
  type?: string,
  placeholder?: string,
  maxLength?: number,
  values?: any
}
export const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {

  let key = props.id as keyof typeof props.formik.values

  return (
    <S.Container>
      <label htmlFor={props.id}>{props.label}</label>

      {
        props.kind === 'input' ? (


          <>
            <input
              type={props.type}
              id={props.id}
              name={props.name}
              maxLength={props.maxLength}
              placeholder={props.placeholder}
              className={props.className}
              onChange={props.formik.handleChange}
              value={props.formik.values[key]}
            />
          </>
        ) : null
      }
      {


        props.kind === 'select' ?

          (
            <select
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                props.formik.setFieldValue(key, e.target.value)

              }}
              value={props.formik.values[key]}
            >
              {
                props.values?.map((option: string, index: number) => (
                  <option key={index + option}>{option}</option>
                ))
              }
            </select>
          ) : null
      }

      <S.ErrorContainer>
        {
          props.formik.touched[key] && props.formik.errors[key] ? (
            <p>{props.formik.errors[key]}</p>
          ) : null
        }
      </S.ErrorContainer>
    </S.Container>
  )
}
