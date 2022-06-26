import React, { ChangeEvent, useEffect, useState } from 'react';
import { professions, useHealthSchema } from '../../hooks/useHealthSchema';
import { cpfMask } from '../../utils/cpfValidate';
import { TextField } from '../Input';
import { Steps } from '../Steps';
import * as S from './style';

const allInputs = [
  {
    kind: 'input',
    label: "Nome do aluno",
    id: 'name',
    placeholder: 'Nome sobrenome',
    type: 'text',
    max: undefined,
  },
  {
    kind: 'input',
    label: "Digite o seu CPF",
    id: "cpf",
    placeholder: "ex: 111.111.111-11",
    type: "text",
    max: 14,
  },
  {
    kind: 'select',
    label: 'Selecione uma das profissões',
    id: 'professions',
    values: professions,
    className: 'select'
  },
]
export const FormComponent: React.FC = () => {

  const { formikHealth } = useHealthSchema();
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    cpfMask(formikHealth.values.cpf, formikHealth)
  }, [formikHealth.values.cpf]);

  useEffect(() => {

    if(showErrors){
      setTimeout(() => setShowErrors(false), 1000)
    }
  }, [ showErrors ])

  return (
    <S.Container>
      <Steps>
        <form onSubmit={formikHealth.handleSubmit}>
          <>
            {
              allInputs.map((input, index) => (
                
                <div key={index + input.id}>
                  <TextField
                    formik={formikHealth}

                    values={input.values}
                    kind={input.kind}
                    id={input.id}
                    label={input.label}
                    name={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    maxLength={input.max}

                  />
                </div>
              ))
            }
          </>

          <button type='submit' onClick={() => {
            
            }}>Submit</button>
          <button type='button'>Verificar</button>
        </form>

      </Steps>

    </S.Container>
  );
}
