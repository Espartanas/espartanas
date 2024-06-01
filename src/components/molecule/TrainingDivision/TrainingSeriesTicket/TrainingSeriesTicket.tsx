import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { ArrowCircleUp } from "../../../../assets/icons/ArrowCircleUp";
import { useState } from "react";
import { trainingDivision } from "../../../../utils/TrainingDivision";

export default function TrainingSeriesTicket() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <VStack>
      <Pressable 
        _pressed={{ opacity: 0.9 }}
        onPress={() => setShowInfo(!showInfo)}
        flexDirection={'row'}
        borderTopRadius={'5px'}
        borderRadius={!showInfo ? '5px' : '0px'}
        borderWidth={1}
        borderColor={'#ffffff'}
        px={'20px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w={'100%'}
        bg={'#5968DF'}
        h={'50px'}
        mt={'30px'}
      >
        <Text color={'#ffffff'} bold>Clique aqui e veja nossa lista de treinos!</Text>

        {
          showInfo
          ? <Box style={{transform: [{ rotate: '180deg'}]}}>
              <ArrowCircleUp />
            </Box>
          : <ArrowCircleUp />
        }
      </Pressable>

      {
      showInfo &&
      <VStack
        bg={'#ffffff'}
        p={'5px'}
        borderBottomRadius={'5px'}
      >
        {
          trainingDivision.map((training, index) => (
            <HStack
              key={index}
              alignItems={'center'}
              mb={'5px'}
            >
              <training.icon />
              <Text ml={'10px'} fontSize={'12px'} bold>{training.name}</Text>
            </HStack>
          ))
        }
      </VStack>
      }
    </VStack>
  )
}