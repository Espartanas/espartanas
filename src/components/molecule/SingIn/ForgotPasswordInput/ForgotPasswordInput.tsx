import { Box, Input, Text, VStack } from "native-base";
import Button from "../../Button.molecule";
import { useNavigation } from "@react-navigation/native";
import api from "../../../../services/api";
import { useState } from "react";

export default function ForgotPasswordInput() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  function sendEmailToRecover() {
    api
      .post('/forgot_password', email)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.response.data))
  }

  return (
    <VStack>
       <Input
          borderColor={'#ffffff'}
          placeholder="Digite o seu e-mail"
          bg={'#ffffff'}
          placeholderTextColor={'gray.700'}
          onChangeText={text => setEmail(text)}
          _focus={{bg: '#ffffff'}}
          mb="20px"
        />

        <Button onPress={sendEmailToRecover} mb={'10px'} text="Confirmar" />

        <Button onPress={() => navigation.goBack()} variant text="Voltar" />
    </VStack>
  );
}