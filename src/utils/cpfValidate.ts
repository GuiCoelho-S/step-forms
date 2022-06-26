export const validateCPF = (strCPF: any) => {
  const replaceString = strCPF.replace(/[^\d]+/g,'')
  var i = 0;
  var Soma;
  var Resto;
  Soma = 0;
  if(strCPF === "") return strCPF;
  if (replaceString === "00000000000")
    return null;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(replaceString.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(replaceString.substring(9, 10)))
    return null;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(replaceString.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(replaceString.substring(10, 11)))
    return null;

  return strCPF;
}

export const cpfMask = (cpfValue: string, formik: any) => {
  cpfValue = cpfValue.replace(/\D/g, "");

  if (cpfValue.length <= 11) {
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2");
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2");
    cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  formik.setFieldValue("cpf", cpfValue);
};
