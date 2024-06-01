import { useEffect, useState } from "react";

import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import TrainingDaysAmount from "../../components/molecule/TrainingDivision/TrainingDaysAmount/TrainingDaysAmount";
import TrainingSeriesTicket from "../../components/molecule/TrainingDivision/TrainingSeriesTicket/TrainingSeriesTicket";
import { trainingDivision, trainingWeeks } from "../../utils/TrainingDivision";
import { Box, Center, HStack, Image, Text } from "native-base";

type WeekDaysKeys = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab' | 'dom';

export default function TrainingDivision() {
  const [trainingDaysAmout, setTrainingDaysAmout] = useState('3');

  function getTrainingDaysAmount(amount: string) {
    setTrainingDaysAmout(amount)
  }

  return (
    <Screen paddingX={'20px'}>
      <Header title="Divisão de treinos" />

      <TrainingDaysAmount getTrainingDaysAmount={getTrainingDaysAmount} />

      <TrainingSeriesTicket />

      <Center flexDirection={'row'} flexWrap={'wrap'}>

        {
          (Object.keys(trainingWeeks[+trainingDaysAmout-3].week_days) as WeekDaysKeys[]).map((day: string, index: number) => (
            <Box key={index} rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
              <HStack>
                <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

                <Text color={'#02041B'}>{day}</Text>
              </HStack>

              <HStack p={'5px'}>
                {
                  trainingWeeks?.[+trainingDaysAmout-3]?.week_days?.['seg'].map((trainning, index, array) => (
                    <HStack alignItems={'center'}>
                      <trainning.icon />

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

        {/* <Box rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
          <HStack>
            <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

            <Text color={'#02041B'}>Seg</Text>
          </HStack>

          <HStack p={'5px'}>
            {
              trainingWeeks[+trainingDaysAmout-3].week_days['seg'].map((trainning, index, array) => (
                <HStack alignItems={'center'}>
                  <trainning.icon />

                  {
                    array.length > 1 && index < array.length - 1 && <Text mx={'5px'}>ou</Text>
                  }
                </HStack>
              ))
            }
          </HStack>
        </Box>
        
        <Box rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
          <HStack>
            <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

            <Text color={'#02041B'}>Ter</Text>
          </HStack>
        </Box>
        
        <Box rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
          <HStack>
            <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

            <Text color={'#02041B'}>Qua</Text>
          </HStack>
        </Box>
        
        <Box rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
          <HStack>
            <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

            <Text color={'#02041B'}>Qui</Text>
          </HStack>
        </Box>
        
        <Box rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
          <HStack>
            <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

            <Text color={'#02041B'}>Sex</Text>
          </HStack>
        </Box>
        
        <Box rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
          <HStack>
            <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

            <Text color={'#02041B'}>Sab</Text>
          </HStack>
        </Box>
        
        <Box rounded={'5px'} m={'10px'} w={'90px'} h={'60px'} bg={'#ffffff'}>
          <HStack>
            <Image tintColor={'#02041B'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

            <Text color={'#02041B'}>Dom</Text>
          </HStack>
        </Box> */}
      </Center>
    </Screen>
  )
}