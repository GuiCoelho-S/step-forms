import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './style';

interface TextFieldProps {
  label: string,
  id?: string,
  kind: string,
  name?: string,
  className?: string,
  type?: string,
  placeholder?: string,
  maxLength?: number,
  values?: any
  formik: any,
  options?: {
    label: string,
    name?: string,
    value: number | string,
    color?: string
  }[],

}
export const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {

  let key = props.id as keyof typeof props.formik.values
  const [isError, _] = useState(props.formik.errors[key])

  useEffect(() => {
    console.log(props.formik.values)
  }, [props.formik.values])

  const addNewItem = (formik: any, key: keyof typeof props.formik.values, currentValue: string | number) => {

    let arrContent = formik.values[key];

    let existValue = formik.values[key].some((item: any) => item === currentValue);

    if (existValue === false) {

      arrContent.push(currentValue)
      formik.setFieldValue(key, arrContent)
    }
    return;
  }

  const removeNewCheckbox = (formik: any, key: keyof typeof props.formik.values, currentValue: string | number) => {

    let existValue = formik.values[key].some((item: any) => item === currentValue);

    if (existValue) {
      let arrContent = formik.values[key].filter((item: any) => item !== currentValue);

      formik.setFieldValue(key, arrContent)
    }
    return;
  }

  return (
    <S.Container isError={isError}>
      <label htmlFor={props.id}>{props.label}</label>

      {
        props.kind === 'input' && (


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
        )
      }
      {

        props.kind === 'select' &&

        (
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              props.formik.setFieldValue(key, e.target.value)

            }}
            value={props.formik.values[key]}
          >
            {
              props.values?.map((option: string) => (
                <option>{option}</option>
              ))
            }
          </select>
        )
      }

      {
        props.kind === 'radio' && (
          <S.RadioContainer>
            {
              props.options?.map((option, index) => {

                if (index === 0) return (
                  <li>
                    <S.RadioInput
                      inputColor={option.color}
                      defaultChecked
                      type={props.kind}
                      name={option.name}
                      value={option.value}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        props.formik.setFieldValue(key, e.target.value)
                      }}
                    />
                    <label>{option.label}</label>
                  </li>
                )
                return (
                  <li>
                    <S.RadioInput
                      inputColor={option.color}
                      type={props.kind}
                      name={option.name}
                      value={option.value}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        props.formik.setFieldValue(key, e.target.value)
                      }}
                    />
                    <label>{option.label}</label>
                  </li>
                )
              })
            }
          </S.RadioContainer>
        )
      }

      {
        props.kind === 'checkbox' && (
          <S.CheckboxContainer>
            {props.options?.map((item, index) => (
              <li key={index + item.label}>
                <input
                  type={props.kind}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (e.target.checked) return addNewItem(props.formik, key, item.value)
                    return;
                  }}
                />
                <label>{item.label}</label>
              </li>))}
          </S.CheckboxContainer>
        )}

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
