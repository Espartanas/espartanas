import { Box, Pressable, Text } from "native-base";
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
  return (
    <Box w={'100%'}>
      <Pressable
        _pressed={{ opacity: 0.5 }}
        onPress={() => setShowSerie(!showSerie)}
        w={'100%'}
        mb={'20px'}
        p={'10px'}
        borderRadius={'5px'}
        borderWidth={1}
        borderColor={'#ffffff'}
      >
        <Text
            mb={'20px'}
            color={'#ffffff'}
            fontSize={'18px'}
            bold
          >
            {index + 1} - {exercise.nome}
        </Text>

        {
          exercise.explicacao &&
          <Text color={'#ffffff'} fontSize={'14px'} bold textAlign={'justify'}>
            {exercise.explicacao}
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