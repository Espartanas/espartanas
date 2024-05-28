import { Box, Center, HStack, Image, Pressable, Text, VStack } from "native-base";
import {ArrowRight} from '../../../assets/icons/arrow-right';
import crown from '../../../assets/images/crown.png';

type Props = {
  name: string,
  big_price: number,
  little_price: string,
  text_discount: string,
  text_installments: string,
  description: string,
  big_square_color: string,
  little_square_color: string,
}

export default function PlanCard({name, big_price, little_price, text_discount, text_installments, description, big_square_color, little_square_color}: Props) {
  return (
    <Pressable
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
      rounded={'10px'}
      w={'100%'}
      h={'150px'}
      bg={big_square_color}
      mb={'20px'}
      onPress={() => console.log('clicou no plano ' + name)}
      _pressed={{opacity: 0.5}}
    >
      <VStack
        position={'relative'}
        rounded={'10px'}
        w={'97%'}
        h={'140px'}
        bg={little_square_color}
        px={'10px'}
        py={'5px'}
      >
        <HStack
          justifyContent={'space-between'}
        >
          <Text
            fontSize={'28px'}
            color={'white'}
            bold
          >
            Plano {name}
          </Text>
         
          <HStack>
            <Text
              fontSize={'28px'}
              color={'white'}
              bold
            >
              R$ {big_price}
            </Text>
            
            <Text
              mt={'7px'}
              fontSize={'12px'}
              color={'white'}
              bold
            >
              {little_price}
            </Text>
          </HStack>
        </HStack>

        <Text
          fontSize={'12px'}
          color={'white'}
          width={'95%'}
          bold
          mt={'5px'}
        >
          {text_discount || ''}
        </Text>

        <Text
          fontSize={'12px'}
          color={'white'}
          bold
          mt={'6px'}
        >
          {text_installments || ''}
        </Text>

        <Text 
          position={'absolute'}
          bottom={'5px'}
          left={'10px'}
          fontSize={'10px'}
          color={'white'}
          bold
        >
          {description}
        </Text>
      </VStack>

      <Box
        alignItems={'center'}
        justifyContent={'center'}
        borderWidth={1}
        borderColor={'#ffffff'}
        right={'-20px'}
        bg={little_square_color}
        position={'absolute'}
        rounded={'500px'}
        w={'40px'}
        h={'40px'}
      >
        <ArrowRight />
      </Box>

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