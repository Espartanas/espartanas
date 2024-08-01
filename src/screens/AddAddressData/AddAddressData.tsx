import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";

import React, { useState } from 'react';
import { VStack, Input, FormControl, WarningOutlineIcon, useToast } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from "../../components/molecule/Button.molecule";
import { useApp } from "../../context/appContext";
import { maskZipCode } from "../../utils/masks";
import { useAuth } from "../../context/authContext";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

const validationSchema = yup.object().shape({
  postalCode: yup.string().required('CEP é obrigatório').min(9, 'CEP tem que ter 9 caracteres').max(9, 'CEP tem que ter 9 caracteres'),
  addressNumber: yup.string().required('Número é obrigatório').min(1, 'Número tem que ter pelo menos 1 caracter'),
  phone: yup.string().required('Celular é obrigatório').min(11, 'Celular tem q ter 11 caracteres').max(11, 'Celular tem q ter 11 caracteres'),
});

type Props = {
  route: any,
}

export default function AddAddressData({route}: Props) {
  const { user } = useAuth();
  const { creditCardData} = useApp();

  const toast = useToast();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  return (
    <Screen paddingX={'20px'}>
      <Header title={'Dados complementares'} />

      <Formik
        initialValues={{
          postalCode: '',
          addressNumber: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setLoading(true);
          const obj = {
            ...values,
            ...creditCardData,
            email: user.email,
            value: route.params.big_price_number,
            points: route.params.premium_points
          }

          console.log(obj);

          api
            .post("/payment_credit", obj)
            .then((res) => {
              toast.show({
                description: res.data.message,
                placement: 'top',
                bgColor: 'green.700',
              })

              navigation.navigate("Congratulations" as never)
              console.log(res.data)
            })
            .catch((err) => {
              toast.show({
                description: err.response.data.erro[0] ?? err.response.data.message,
                placement: 'top',
                bgColor: 'red.700',
              })
            })
            .finally(() => {
              setLoading(false);
            })
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <VStack space={4} w="100%" mt={12}>
            <FormControl isInvalid={touched.postalCode && !!errors.postalCode}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="CEP - 00000-000"
                onChangeText={(value) => {
                  handleChange('postalCode')(maskZipCode(value));
                }}
                onBlur={handleBlur('postalCode')}
                keyboardType="numeric"
                value={values.postalCode}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.postalCode}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.addressNumber && !!errors.addressNumber}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={handleChange('addressNumber')}
                onBlur={handleBlur('addressNumber')}
                value={values.addressNumber}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.addressNumber}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.phone && !!errors.phone}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Número telefone com DDD"
                keyboardType="numeric"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.phone}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button text={loading ? <ActivityIndicator size="small" color="#ffffff" /> : "Avançar"} onPress={handleSubmit} />
          </VStack>
        )}
      </Formik>
    </Screen>
  );
}
