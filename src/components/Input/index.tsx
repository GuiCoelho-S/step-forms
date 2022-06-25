import React, { ChangeEvent } from 'react';
import * as S from './style';


interface InputProps{
  label: string;
  id: string;
  type: string;
  onChangeValue?: (evt: ChangeEvent<HTMLInputElement>) => string;

  formik: any;
}
export const InputComponent: React.FC<InputProps> = ({ id, label, type, onChangeValue} : InputProps) => {
  return (
    <S.Container>
      <label htmlFor={id}>{label}</label>

      <input 
        type={type}
        id={id}
        name={id}
        
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeValue && onChangeValue(e)
        }}
      />
    </S.Container>
  )
}
