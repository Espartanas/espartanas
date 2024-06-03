import { useEffect, useState } from "react";

import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import TrainingDaysAmount from "../../components/molecule/TrainingDivision/TrainingDaysAmount/TrainingDaysAmount";
import TrainingSeriesTicket from "../../components/molecule/TrainingDivision/TrainingSeriesTicket/TrainingSeriesTicket";
import { days, trainingWeeks } from "../../utils/TrainingDivision";
import { Box, Center, HStack, Image, Text } from "native-base";
import Observations from "../../components/molecule/TrainingDivision/Observations/Observations";

export default function TrainingDivision() {
  const [trainingDaysAmout, setTrainingDaysAmout] = useState('3');

  function getTrainingDaysAmount(amount: string) {
    setTrainingDaysAmout(amount)
  }

  console.log(trainingDaysAmout)

  return (
    <Screen paddingX={'20px'}>
      <Header title="Divisão de treinos" />

      <TrainingDaysAmount getTrainingDaysAmount={getTrainingDaysAmount} />

      <TrainingSeriesTicket />

      <Center mt={'20px'} flexDirection={'row'} flexWrap={'wrap'}>
        {
          days.map((day: string, index: number) => (
            <Box key={index} rounded={'5px'} m={'5px'} w={'100px'} h={'80px'} bg={'#ffffff'}>
              <HStack>
                <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

                <Text bold color={'#02041B'}>{day}</Text>
              </HStack>

              <HStack p={'5px'}>
                {
                  trainingWeeks[+trainingDaysAmout-3].week_days[index].map((trainning: any, index, array) => (
                    <HStack alignItems={'center'}>
                      {
                        trainning?.icon ? <trainning.icon /> : <Text>{trainning}</Text>
                      }

                      {
                        array.length > 1 && index < array.length - 1 && <Text mx={'5px'}>ou</Text>
                      }
                    </HStack>
                  ))
                }
              </HStack>
            </Box>  
          ))
        }
      </Center>

      <Observations trainingDaysAmout={trainingDaysAmout} />
    </Screen>
  )
}