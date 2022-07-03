import React, { ChangeEvent, useEffect, useState } from 'react';
import { professions, useHealthSchema } from '../../hooks/useHealthSchema';
import { cpfMask } from '../../utils/cpfValidate';
import { TextField } from '../TextField';
import { Steps } from '../Steps';
import * as S from './style';

const allInputs = [
  {
    kind: 'input',
    label: "Nome do aluno",
    id: 'name',
    placeholder: 'Nome sobrenome',
    type: 'text',
  },
  {
    kind: 'input',
    label: "Digite o seu CPF",
    id: "cpf",
    placeholder: "ex: 111.111.111-11",
    type: "text",
    maxLength: 14,
  },
  {
    kind: 'select',
    label: 'Selecione uma das profissões',
    id: 'professions',
    values: professions,
    className: 'select'
  },
  {
    kind: 'radio',
    label: 'Selecione o número total de parcelas',
    id: 'parcelTotal',
    options: [
      {
        label: '1x de 360,00 R$',
        name: 'parcel',
        value: '1x-360',
        color: "#22f148"
      },
      {
        label: '2x de 180,00 R$',
        name: 'parcel',
        value: '2x-180',
        color: '#22f148'
      },
      {
        label: '3x de 120,00 R$',
        name: 'parcel',
        value: '3x-120',
        color: '#22f148'
      },

    ]
  },
  {
    kind: 'checkbox',
    label: 'Quais linguagens você domina?',
    id: 'languages',
    options: [
      {
        value: 'english',
        label: 'Inglês'
      },
      {
        value: 'portuguese',
        label: 'Português'
      },
      {
        value: 'spanish',
        label: 'Espanhol'
      },
      {
        value: 'french',
        label: 'Francês'
      },
      {
        value: 'german',
        label: 'Alemão'
      },
      {
        value: 'chinese',
        label: 'Chinês'
      }
    ]
  }
]
export const FormComponent: React.FC = () => {

  const { formikHealth } = useHealthSchema();
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    cpfMask(formikHealth.values.cpf, formikHealth)
  }, [formikHealth.values.cpf]);

  useEffect(() => {

    if (showErrors) {
      setTimeout(() => setShowErrors(false), 1000)
    }
  }, [showErrors])

  return (
    <S.Container>
      <Steps>
        <form onSubmit={formikHealth.handleSubmit}>
          <>
            {
              allInputs.map((input, index) => (

                <div key={index}>
                  <TextField {...input} formik={formikHealth} />
                </div>
              ))
            }
          </>

          <button type='submit'>Submit</button>
          <button type='button' onClick={() => {
            formikHealth.submitForm()
          }}>Verificar</button>
        </form>

      </Steps>

    </S.Container>
  );
}
