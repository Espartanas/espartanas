import { Input, Text, TextArea, TextField } from "native-base";
import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import Button from "../../components/molecule/Button.molecule";
import { useState } from "react";
import api from "../../services/api";

export default function TalkToUs() {
  const [data, setData] = useState({
    name: '',
    message: ''
  });

  function sendMessage() {
    api
      .post('/support', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data))
      .finally(() => setData({ name: '', message: '' }));
  }

  return (
    <Screen paddingX={'20px'}>
      <Header title="Fale Conosco" />

      <Input
        placeholder="Nome"
        value={data.name}
        my={'20px'}
        bg={'#ffffff'}
        placeholderTextColor={'gray.700'}
        _focus={{bg: '#ffffff'}}
        onChangeText={text => setData({ ...data, name: text })}
      />

      <TextArea
        value={data.message}
        h={'200px'}
        mb={'20px'}
        placeholder="Mensagem"
        bg={'#ffffff'}
        placeholderTextColor={'gray.700'}
        _focus={{ bg: '#ffffff' }}
        autoCompleteType={undefined}
        onChangeText={text => setData({ ...data, message: text })}
      />

      <Button onPress={sendMessage} text="Enviar" />

    </Screen>
  )
}