import { Box, Image, Pressable, Text, VStack } from "native-base";
import { ArrowRight } from "../../../../assets/icons/arrow-right";

type Props = {
  codigo: string;
  descricao: string;
  image: any;
}

export default function CardSeries({codigo, descricao, image}: Props) {
  return (
    <Pressable
      onPress={() => { console.log(`Treino ${codigo} Selecionado`) }}
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
    </Pressable>
  )
}