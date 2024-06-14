import { Box, HStack, Pressable, Text, VStack } from "native-base";
import Repetitions from "../Repetitions/Repetitions";
import { useState } from "react";
import { ArrowDownSeries } from "../../../../assets/icons/Arrow-down-series";

type Props = {
  index: number;
  data: any;
  exercise: any;
  getRepetitions: () => number[];
  selectedLevel: string;
}

export default function CardExercise({ data, index, exercise, getRepetitions, selectedLevel }: Props) {
  const [showSerie, setShowSerie] = useState(false);
  const [limitCharacter, setLimitCharacter] = useState(100);

  function limit (string = '', limit = 0) {  
    return `${string.substring(0, limit)}${limit === 100 ? "..." : ""}`
  }

  return (
    <Box w={'100%'}>
      <Pressable
        _pressed={{ opacity: 0.5 }}
        onPress={() => {
          setShowSerie(!showSerie)
          showSerie ? setLimitCharacter(100) : setLimitCharacter(10000)
        }}
        w={'100%'}
        mb={!showSerie ? '20px' : '0'}
        borderRadius={'5px'}
        bg={'rgba(85,92,102, 0.5)'}
        borderWidth={1}
        borderBottomWidth={0}
        borderColor={!showSerie ? '#02041B' : '#5968DF'}
        borderBottomRadius={showSerie ? 0 : '5px'}
      >
        <HStack p={'10px'} borderTopRadius={'5px'} bg={'#5968DF'} h={'65px'} alignItems={'center'}>
          <Text mr={'10px'} color={'#ffffff'} fontSize={'32px'}>
            {index + 1}
          </Text>

          <Text
              color={'#ffffff'}
              fontSize={'14px'}
              bold
              w={'90%'}
            >
              {exercise.nome}
          </Text>

        </HStack>

        {
          exercise.explicacao &&
          <Text p={'10px'} h={!showSerie ? '60px' : 'auto'} color={'#ffffff'} fontSize={'12px'} bold textAlign={'justify'}>
            {limit(exercise.explicacao, limitCharacter)}
          </Text>
        }

        <Box>
          {
            showSerie ?
            <Box my={'10px'} alignItems={'center'}>
              <ArrowDownSeries />
            </Box> :
            <Box my={'10px'} style={{transform: [{ rotate: '180deg'}]}} alignItems={'center'}>
              <ArrowDownSeries />
            </Box>
          }
        </Box>
        
      </Pressable>

      {
        showSerie &&
        <> 
          <Repetitions
            data={data}
            getRepetitions={getRepetitions}
            selectedLevel={selectedLevel}
            actualExercise={index}
          />
        </>
      }
    </Box>
  )
}