import { Center, HStack, Image, Input, NumberInput, Pressable, Text, VStack } from "native-base";
import Screen from "../../components/molecule/Screen.molecule";
import Button from "../../components/molecule/Button.molecule";
import { useState } from "react";
import { maskOnlyNumbers } from "../../utils/masks";
import api from "../../services/api";
import { useAuth } from "../../context/authContext";

type Props = {
  route: any
}

export default function ValidateAccount({route}: Props) {
  const [code, setCode] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
  })

  const {setToken, setUser, setAuth} = useAuth()

  function logIn() {
    api
      .post('/auth', {email: route.params.email, password: route.params.password})
      .then((res) => {
        setToken(res.data.token)
        setUser(res.data.user)
        setAuth(true)
      })
      .catch((err) => console.log(err.response.data))

  }

  function handleSubmit() {
    const fullCode = `${code.code1}${code.code2}${code.code3}${code.code4}`
    api
      .put('/validate_account', {email: route.params.email, code: fullCode})
      .then((res) => {
        console.log('foi');
        logIn()
      })
      .catch((err) => console.log(err.response.data))
  }

  return (
    <Screen paddingX={'20px'}>
      <Center mt={'40px'}>
        <Text color={'white'} fontSize={28} py={5} bold>Código de Verificação</Text>

        <Image
          width={56}
          height={56}
          tintColor={'#ffffff'}
          source={require('../../assets/images/logo.png')}
          alt="logo"
        />
      </Center>

      <HStack justifyContent={'space-evenly'} mb={'40px'}>
        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code1: text
            })
          }}
        />

        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code2: maskOnlyNumbers(text)
            })
           }}
        />

        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code3: text
            })
           }}
        />

        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code4: text
            })
           }}
        />
      </HStack>

      <Pressable _pressed={{opacity: 0.5}} onPress={() => console.log('clicked')} alignItems={'center'} justifyContent={'center'} mb={'30px'} flexDirection={'row'}>
        <Text color={'#ffffff'}>Não recebeu o código?</Text>
        <Text ml={'5px'} color={'#5968DF'} textDecorationLine={'underline'}>Clique aqui!</Text>
      </Pressable>

      <Button onPress={handleSubmit} text="Confirmar" />
    </Screen>
  )
}