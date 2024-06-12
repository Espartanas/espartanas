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
  const [limitCharacter, setLimitCharacter] = useState(50);

  function limit (string = '', limit = 0) {  
    return `${string.substring(0, limit)}${limit === 50 ? "..." : ""}`
  }

  return (
    <Box w={'100%'}>
      <Pressable
        _pressed={{ opacity: 0.5 }}
        onPress={() => {
          setShowSerie(!showSerie)
          showSerie ? setLimitCharacter(50) : setLimitCharacter(10000)
        }}
        w={'100%'}
        mb={'20px'}
        p={'10px'}
        borderRadius={'5px'}
        bg={'#555C66'}
        borderWidth={1}
        borderColor={'#ffffff'}
      >
        <HStack mb={'10px'} alignItems={'center'}>
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
          <Text mb={'10px'} color={'#ffffff'} fontSize={'12px'} bold textAlign={'justify'}>
            {limit(exercise.explicacao, limitCharacter)}
          </Text>
        }

        {
          showSerie ?
          <Box alignItems={'center'}>
            <ArrowDownSeries />
          </Box> :
          <Box style={{transform: [{ rotate: '180deg'}]}} alignItems={'center'}>
            <ArrowDownSeries />
          </Box>
        }
        
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