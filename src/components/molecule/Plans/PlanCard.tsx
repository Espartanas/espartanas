import { Image, Pressable, Text, VStack } from "native-base";
import crown from '../../../assets/images/crown.png';
import logo from '../../../assets/images/logo.png';
import bgImagePremium from '../../../assets/images/bgPlanPremium.png';
import { useNavigation } from "@react-navigation/native";

type Props = {
  name: string,
  big_price: number,
  big_price_number: number,
  text_discount: string,
  premium_points: number
}

export default function PlanCard({name, big_price, big_price_number, text_discount, premium_points}: Props) {
  const navigation = useNavigation();
  return (
    <Pressable
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
      rounded={'5px'}
      w={'140px'}
      h={'130px'}
      bg={'#5968DF'}
      onPress={() => navigation.navigate({name: 'PaymentMethod', params: {big_price_number, name, premium_points}} as never)}
      _pressed={{opacity: 0.5}}
    >
      <Image
        position={'absolute'}
        w={'136px'}
        h={'126px'}
        rounded={'5px'}
        source={bgImagePremium}
        alt="bgImagePremium"
      />

      <VStack alignItems={'center'} justifyContent={'center'}>
        <Text
          fontSize={'20px'}
          color={'white'}
          bold
        >
          {big_price}
        </Text>
        
        <Text
          fontSize={'10px'}
          color={'white'}
          width={'95%'}
          bold
        >
          {text_discount || ''}
        </Text>

        <Image source={logo} w={'55px'} h={'55px'} tintColor={'#ffffff'} alt="logo"/>

        <Text
          fontSize={'16px'}
          color={'white'}
          bold
        >
          {premium_points} dias
        </Text>
      </VStack>


      {
        name === 'Anual' &&
        <Image
          w={'120px'}
          h={'120px'}
          position={'absolute'}
          left={'-43px'}
          top={'-73px'}
          source={crown}
          alt="coroa melhor plano"
          style={{
            transform: [
              { rotate: '20deg' },
            ]
          }}
        />

      }
    </Pressable>
  )
}