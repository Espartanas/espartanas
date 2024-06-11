import { Box, Center, HStack, Pressable, ScrollView, Text, VStack } from "native-base"
import { useState } from "react"

type Props = {
  getRepetitions: () => number[];
  selectedLevel: string;
  actualExercise: number;
  data: any;
}

export default function Repetitions({ getRepetitions, selectedLevel, actualExercise, data }: Props) {
  const [showRepetition, setShowRepetition] = useState(1000);

  return (
    <Box mb={'20px'}>
      {
        getRepetitions().map((repetition, index) => (
          <>
            <Pressable
              mt={'10px'}
              _pressed={{ opacity: 0.9 }}
              onPress={() => showRepetition === index ? setShowRepetition(1000) : setShowRepetition(index)}
              bgColor={'#5968DF'}
              justifyContent={'center'}
              h={'50px'}
              p={'5px'}
              borderTopRadius={'5px'}
              borderBottomRadius={showRepetition === index ? '0px' : '5px'}
              key={index}
            >
              <HStack alignItems={'center'}>
                <Text
                  mx={'10px'}
                  color={'#ffffff'}
                  bold
                  fontSize={'20px'}
                >
                  {repetition}
                </Text>

                <Text
                  color={'#ffffff'}
                  bold
                  fontSize={'16px'}
                >
                  {selectedLevel} - Repetição {repetition} - Exercício {actualExercise + 1}
                </Text>
              </HStack>
            </Pressable>
            
            {
              showRepetition === index &&
              <Box
                bgColor={'#5968DF'}
                justifyContent={'center'}
                px={'15px'}
                pb={'10px'}
                borderBottomRadius={'5px'}
                borderTopRadius={showRepetition === index ? '0px' : '5px'}
              >
                <Text color={'#ffffff'} fontSize={'14px'}>
                  {data[actualExercise][`serie${repetition}`]}
                </Text>
              </Box>
            }
          </>
        ))
      }
    </Box>
  )
}