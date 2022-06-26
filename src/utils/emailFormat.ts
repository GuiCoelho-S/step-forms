
export const emailFormat = (values: any, errors: any) => {

  if(!values.email){
    return errors.email = "Email é um dado necessário"
  } else if ((!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email))) {
    return errors.email = "Endereço de email inválido"
  }
}
