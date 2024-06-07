import { Box, Image, Pressable, Text, VStack } from "native-base";
import { ArrowRight } from "../../../../assets/icons/arrow-right";
import { useNavigation } from "@react-navigation/native";

type Props = {
  id: number;
  codigo: string;
  descricao: string;
  image: any;
  selectedLevel: string;
}

export default function CardSeries({id, codigo, descricao, image, selectedLevel}: Props) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => { selectedLevel.length === 0 ? console.log(`Selecione um nível de treino`) : navigation.navigate({name: 'Training', params: {id, selectedLevel, codigo}} as never) }}
      _pressed={{ opacity: 0.5 }}
      bg={'#000000'}
      borderWidth={1}
      borderColor={'#ffffff'}
      rounded={'5px'}
      justifyContent={'space-between'}
      flexDirection={'row'}
      w={'90%'}
      h={'91px'}
      mb={'15px'}
    >
      <VStack w={'60%'}>
        <Text px={'10px'} color={'#ffffff'} fontSize={20} bold>{codigo}</Text>
        <Text p={'10px'} color={'#ffffff'} fontSize={12}>{descricao}</Text>
      </VStack>

      <Image
        opacity={0.7}
        borderTopRightRadius={'5px'}
        borderBottomRightRadius={'5px'}
        w={122}
        h={89}
        source={image}
        alt="imagem do treino referência"
      />

      <Box bottom={3} right={3} position={'absolute'}>
        <ArrowRight />
      </Box>

      <Box
        top={'15px'}
        left={'55px'}
        position={'absolute'}
        h={'2px'}
        w={'83%'}
        opacity={0.5}
        bg={{
          linearGradient: {
            colors: ['#5D6CED', '#B9BDE1', '#000000'],
            start: [1, 0],
            end: [0, 0],
          }
        }}
      />
    </Pressable>
  )
}