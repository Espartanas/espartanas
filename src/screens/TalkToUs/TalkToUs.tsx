import { Input, Text, TextArea, TextField, useToast } from "native-base";
import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import Button from "../../components/molecule/Button.molecule";
import { useState } from "react";
import api from "../../services/api";
import { ActivityIndicator } from "react-native";

export default function TalkToUs() {
  const toast = useToast();

  const [data, setData] = useState({
    name: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  function sendMessage() {
    setLoading(true);
    api
      .post('/support', data)
      .then((res) => {
        console.log(res.data)
        toast.show({
          title: res.data,
          placement: 'bottom',
          bgColor: 'green.700'
        })
      })
      .catch((err) => {
        toast.show({
          title: err.response.data.message,
          placement: 'bottom',
          bgColor: 'red.700'
        })
        console.log(err.response.data)
      })
      .finally(() => {
        setData({ name: '', message: '' })
        setLoading(false);
      });
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

      <Button onPress={sendMessage} text={loading ? <ActivityIndicator size="small" color="#fff" /> : "Enviar"} />

    </Screen>
  )
}