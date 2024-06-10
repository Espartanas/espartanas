import { Box, Pressable, Text, VStack } from "native-base";
import { useState } from "react";

type Props = {
  observacao: string
}

export default function Observations({observacao}: Props) {
  const [showObservations, setShowObservations] = useState(false)
  return (
    <VStack my={'20px'} w={'100%'}>
      <Pressable onPress={() => setShowObservations(!showObservations)} alignItems={'center'} bg={'#5968DF'} p={'10px'} borderRadius={showObservations ? 0 : '5px'} _pressed={{opacity: 0.5}}>
        <Text color={'#ffffff'} bold>Observações</Text>
      </Pressable>

      {
        showObservations &&<Box bg={'#5968DF'} px={'10px'} py={'5px'} borderRadius={showObservations ? 0 :'5px'}>
          <Text
            color={'#ffffff'}
            textAlign={'justify'}
            fontSize={'12px'}
          >
            {observacao}
          </Text>
        </Box>
      }
    </VStack>
  )
}