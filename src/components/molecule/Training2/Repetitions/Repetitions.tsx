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
    <Box 
      borderWidth={1}
      borderTopWidth={0}
      borderColor={'#5968DF'}
      mb={'20px'}
    >
      {
        getRepetitions().map((repetition, index) => (
          data[actualExercise][`serie${repetition}`].length > 0 &&
          <>
            <Pressable
              mt={'10px'}
              _pressed={{ opacity: 0.9 }}
              onPress={() => showRepetition === index ? setShowRepetition(1000) : setShowRepetition(index)}
              justifyContent={'center'}
              p={'5px'}
              borderTopRadius={'5px'}
              borderBottomRadius={showRepetition === index ? '0px' : '5px'}
              key={index}
            >
              <HStack>
                <Text
                  color={'#ffffff'}
                  bold
                  fontSize={'24px'}
                  mr={'10px'}
                >
                  {repetition}
                </Text>

                <Text textAlign={'justify'} w={'90%'} color={'#ffffff'} fontSize={'10px'}>
                  {data[actualExercise][`serie${repetition}`]}
                </Text>
              </HStack>
            </Pressable>
            
            {/* {
              showRepetition === index &&
              <Box
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
            } */}
          </>
        ))
      }
    </Box>
  )
}