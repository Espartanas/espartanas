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
  cpf: yup.string().required('Necessário preencher o seu telefone.'),
  email: yup
    .string()
    .required('Necessário preencher o seu e-mail.')
    .email('O e-mail deve possuir um formato válido.'),
});

export type RegisterFormData = yup.InferType<typeof RegisterSchema>;

// -----------------------------------X------------------------------------

export const ProfileSchema = yup.object({
  firstName: yup.string().min(3, 'Digite um nome válido.'),
  lastName: yup.string(),
  phone: yup.string(),
  email: yup.string().email('O e-mail deve possuir um formato válido.'),
  birthDate: yup.string(),
  cpf: yup.string()
});

export type ProfileFormData = yup.InferType<typeof ProfileSchema>;

// -----------------------------------X------------------------------------

export const CreditCardYupSchema = yup.object({
  cardNumberYup: yup
    .string()
    .min(14, 'Mínimo 14 números.')
    .max(16, 'Máximo 16 números')
    .required('Digite um número válido')
    .test(
      'test-number',
      'Número do cartão de crédito inválido',
      value => valid.number(value).isValid,
    ),
  cardNameYup: yup.string().required('Necessário digitar o nome no cartão.'),
  cardExpireDateYup: yup
    .string()
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Date has past',
      expirationDate => {
        if (!expirationDate) {
          return false;
        }

        const today = new Date();
        const monthToday = today.getMonth() + 1;
        const yearToday = today.getFullYear().toString().substr(-2);

        const [expMonth, expYear] = expirationDate.split('/');

        if (Number(expYear) < Number(+yearToday - 1)) {
          return false;
        } else if (
          Number(expMonth) < monthToday &&
          Number(expYear) <= Number(+yearToday - 1)
        ) {
          return false;
        }

        return true;
      },
    )
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Month',
      expirationDate => {
        if (!expirationDate) {
          return false;
        }
        const today = new Date().getFullYear().toString().substr(-2);

        const [expMonth] = expirationDate.split('/');

        if (Number(expMonth) > 12) {
          return false;
        }

        return true;
      },
    )
    .required('Digite uma data válida.'),
  cardCVCYup: yup
    .string()
    .min(3, 'Mínimo de 3 dígitos')
    .max(4, 'Máximo de 3 dígitos')
    .required('Digite um CVC válido.'),
});

export type CreditCardFormData = yup.InferType<typeof CreditCardYupSchema>;

// -----------------------------------X------------------------------------
