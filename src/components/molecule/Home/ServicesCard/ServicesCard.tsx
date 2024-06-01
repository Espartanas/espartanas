import { Box, Center, Image, Text } from "native-base";
import Button from "../../Button.molecule";
import { ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  textImage: string;
  textSign: string;
  buttonText: string;
  image: ImageSourcePropType | undefined;
  variant: boolean;
  premium: string;
  screen: string;
}

export default function ServicesCard({ textImage, textSign, buttonText, image, variant, premium, screen }: Props) {
  const navigation = useNavigation();

  return (
    <Center mb={'30px'}>
      <Box
        borderWidth={1}
        borderColor={'#ffffff'}
        w={'100%'}
        bg={{
          linearGradient: variant
            ? {
                colors: ['#ffffff', '#000000', '#000000'],
                start: [0.9, 0],
                end: [0, 0],
              }
            : {
                colors: ['#ffffff', '#616161', '#000000'],
                start: [0, 0],
                end: [0.55, 0],
              },
        }}
        flexDirection={'row'}
        alignItems={'center'}
      >
        {
          variant 
          ? <>
              <Text ml={'10px'} color={'#ffffff'} fontWeight={'bold'} fontSize={'16px'} w={'180px'}>{textImage}</Text>
              
              <Image opacity={0.75} w={'45%'} h={'125px'} source={image} alt={'logo'} />
            </>
          : <>
              <Image opacity={0.75} w={'45%'} h={'125px'} source={image} alt={'logo'} />

              <Text ml={'10px'} color={'#ffffff'} fontWeight={'bold'} fontSize={'16px'} w={'180px'}>{textImage}</Text>
            </>
        }
      </Box>

      <Box alignItems={'center'} bg={'#ffffff'} w={'100%'} py={'10px'}>
        <Text w={'90%'} pb={'5px'} fontSize={'12px'} textAlign={'center'}>{textSign}</Text>

        <Button
          onPress={() => {
            premium !== 'gratuito' ? navigation.navigate('Planos' as never) : navigation.navigate(screen as never)
          }}
          w={'90%'}
          fontSize={'16px'}
          h={'30px'}
          text={premium === 'gratuito' ? buttonText : 'Acessar'}
        />
      </Box>
    </Center>
  )
}