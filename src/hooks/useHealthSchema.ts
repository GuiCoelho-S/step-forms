import { useFormik } from "formik"
import * as yup from "yup";


const healthYupShema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email().required(),
  cpf: yup.string().required("Cpf é um dado obrigatório").typeError("Cpf inválido, verifique e tente novamente"),
  adress: yup.string().required(),
  age: yup.number()
  .required("O campo é obrigatório.")
  .positive("O campo deve ser positivo.")
  .integer("O campo deve ser um número inteiro."),
})
export const useHealthSchema = () => {


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      age:'',
    },
    validationSchema: healthYupShema,
    onSubmit: (value) => console.log(value),
    validateOnChange: true,
    
  });

  return { formikHealth: formik }
}