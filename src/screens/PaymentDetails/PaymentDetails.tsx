import { Box, List, Pressable, Text, VStack } from "native-base";
import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";
import { Linking } from "react-native";
import Button from "../../components/molecule/Button.molecule";
import { useNavigation } from "@react-navigation/native";

type Props = {
  route: any
}

export default function PaymentDetails({route}: Props) {
  const navigation = useNavigation();

  console.log("routes", route.params.dados.billingType)
  return (
    <Screen paddingX={'20px'}>
      <Header title="Detalhes do pagamento" />

      <VStack>
        <Text my={'20px'} textAlign={'center'} fontWeight={'700'} fontSize={'20px'} color={'#ffffff'}>Você está quase lá!</Text>
        
        <Text textAlign={'center'} fontWeight={'400'} fontSize={'14px'} color={'#ffffff'}>Realize o pagamento do boleto acessando o link abaixo.</Text>
      
        <Pressable _pressed={{ opacity: 0.9 }} onPress={() => Linking.openURL(route.params.dados.bankSlipUrl)}>
          <Text
            textAlign={'center'}
            my={'20px'}
            fontWeight={'400'}
            fontSize={'16px'}
            color={'#7887fa'}
            textDecorationLine={'underline'}
          >
            Link download boleto
          </Text>
        </Pressable>
      </VStack>

      <Box>
        <Text fontWeight={'700'} fontSize={'20px'} color={'#ffffff'} mb={'10px'}>Detalhes da compra:</Text>

        <List p={'10px'} bg={'#5968DF'} borderRadius={'5px'}>
          <Text color={'#ffffff'}><Text fontWeight={'700'}>Tipo de cobrança:</Text> {route.params.dados.billingType}</Text>
          <Text color={'#ffffff'}><Text fontWeight={'700'}>Status:</Text> {route.params.dados.status}</Text>
          <Text color={'#ffffff'}><Text fontWeight={'700'}>Valor:</Text> {route.params.dados.value}</Text>
          <Text color={'#ffffff'}><Text fontWeight={'700'}>Descricão:</Text> {route.params.dados.description}</Text>
          <Text color={'#ffffff'}><Text fontWeight={'700'}>Data da compra:</Text> {route.params.dados.dateCreated.split('-').reverse().join('/')}</Text>
          <Text color={'#ffffff'}><Text fontWeight={'700'}>Data validade boleto:</Text> {route.params.dados.dueDate.split('-').reverse().join('/')}</Text>
          <Text color={'#ffffff'}><Text fontWeight={'700'}>Valor da compra:</Text> R$ {route.params.dados.value},00</Text>
        </List>
      </Box>

      <Button variant text="Tela inicial" mt={'20px'} onPress={() => navigation.navigate('Home' as never)} />
    </Screen>
  )
}