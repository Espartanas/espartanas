import { Center, HStack, Image, Text, VStack } from "native-base";
import Button from "../Button.molecule";

type Props = {
  name: string,
  big_price: number,
  little_price: string,
  text_discount: string,
  text_installments: string,
  description: string 
}

export default function PlanCard({name, big_price, little_price, text_discount, text_installments, description}: Props) {
  return (
    <VStack position={'relative'} alignItems={'center'} borderWidth={1} borderColor={'#ffffff'} rounded={10} bg={'#9E2292'} w={275} h={350}>
      {
        name === 'Semestral' &&
        <Image
        top={-95}
        left={-70}
        position={'absolute'}
        w={150}
        h={150}
        mt={'20px'} source={require('../../../assets/images/crown.png')}
      />
      }

      <Text mt={'20px'} fontSize={26} color={'#ffffff'} bold>
        Plano {name}
      </Text>
      
      <HStack alignItems={'baseline'}>
        <Text color={'#ffffff'} fontSize={26} bold>
          R$ {big_price}
        </Text>
        <Text color={'#ffffff'} fontSize={10} bold>
          {little_price}
        </Text>
      </HStack>

      <Text w={'80%'} mt={'20px'} color={'#ffffff'} fontSize={12} textAlign={"center"}>
        {text_discount}
      </Text>

      <Text w={'80%'}  mt={'20px'} color={'#ffffff'} fontSize={12} textAlign={"center"}>
        {text_installments}
      </Text>

      <Center mt={'20px'} bg={'#DAA520'} w={'100%'} h={30}>
        <Text bold fontSize={12}>
          PAGUE E COMECE A TREINAR HOJE!
        </Text>
      </Center>

      <Button onPress={() => console.log('Comprar plano')} w={'50%'} h={'40px'} bg={'#DAA520'} mt={'20px'} text="Comprar" />

      <Text mt={'10px'} color={'#ffffff'} fontSize={10} textAlign={"center"}>
       {description}
      </Text>
    </VStack>
  )
}