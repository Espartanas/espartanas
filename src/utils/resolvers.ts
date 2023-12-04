import * as yup from 'yup';

export const RegisterSchema = yup.object({
  firstName: yup
    .string()
    .required('Necessário preencher o seu nome.')
    .min(3, 'Digite um nome válido.'),
  lastName: yup.string().required('Necessário preencher o seu sobrenome.'),
  birthDate: yup
    .string()
    .required('Necessário preencher a sua data de nascimento.'),
  phone: yup.string().required('Necessário preencher o seu telefone.'),
  email: yup
    .string()
    .required('Necessário preencher o seu e-mail.')
    .email('O e-mail deve possuir um formato válido.'),
});

export type RegisterFormData = yup.InferType<typeof RegisterSchema>;
