import { Box, Pressable, Text, VStack } from "native-base";
import { useState } from "react";
import { ArrowCircleUp } from "../../../../assets/icons/ArrowCircleUp";
import { trainingWeeks } from "../../../../utils/TrainingDivision";

type Props = {
  trainingDaysAmout: string
}

export default function Observations({trainingDaysAmout}: Props) {
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
        <Text fontSize={'12px'} bold color={'#02041B'}>{trainingWeeks[+trainingDaysAmout-3].observations.first}</Text>
        <Text fontSize={'12px'} bold color={'#02041B'}>{trainingWeeks[+trainingDaysAmout-3].observations.second}</Text>
        <Text fontSize={'12px'} bold color={'#02041B'}>{trainingWeeks[+trainingDaysAmout-3].observations.third}</Text>
        <Text fontSize={'12px'} bold color={'#02041B'}>{trainingWeeks[+trainingDaysAmout-3].observations.forth}</Text>
        <Text fontSize={'12px'} bold color={'#02041B'}>{trainingWeeks[+trainingDaysAmout-3].observations.fifth}</Text>
      </VStack>
      }
    </VStack>
  )
}