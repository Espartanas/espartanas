import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";
import api from "../../services/api";
import { useQuery } from "react-query";
import { ActivityIndicator } from "react-native";
import ProgressBar from "../../components/Training/ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import { Box, Center, HStack, Pressable, Text } from "native-base";
import { ArrowDownSeries } from "../../assets/icons/Arrow-down-series";
import Button from "../../components/molecule/Button.molecule";

type Props = {
  route:any
}

export default function Training({ route }: Props) {
  const {id, selectedLevel, codigo} = route.params;

  const [actualExercise, setActualExercise] = useState(0);

  const {data, isLoading} = useQuery([''], async () => {
    const res = await api.get(`/${selectedLevel}/julho/${id}`);
    return res.data.workouts;
  });

  const [arrayRepetitions, setArrayRepetitions] = useState([] as number[]);
  const [actualRepetition, setActualRepetition] = useState(1);
  const [review, setReview] = useState(false);
  const [totalExercises, setTotalExercises] = useState(data.length);

  if (isLoading) {
    return (
      <Screen>
        <ActivityIndicator style={{marginTop: '50%'}} size="large" color="#ffffff" />
      </Screen>
    )
  }
  
  function getRepetitions() {
    let totalRepetitions = 0;
    for(let i = 1; i <= Object.keys(data[actualExercise]).filter((element) => element.includes('serie')).length; i++) {
      if (data[actualExercise][`serie${i}`] !== '') {
        totalRepetitions += 1
      }
    }

    const array = [...Array(totalRepetitions)].map((_, i) => i + 1)
    setArrayRepetitions(array)
  }

  function changeRepetition() {
    if (actualRepetition <= arrayRepetitions.length) {
      setActualRepetition(actualRepetition + 1)
    }
  }

  useEffect(() => {
    getRepetitions()
  }, [])

  return (
    <Screen paddingX={'20px'}>
      <Header title={codigo} />

      <ProgressBar
        data={data}
        actualExercise={actualExercise}
      />

      <Center mb={'200px'} mt={'20px'}>
        <Text
          color={'#ffffff'}
          fontSize={'18px'}
        >
          {data[actualExercise].nome}
        </Text>

        <Text
          color={'#ffffff'}
          mt={'10px'}
          textAlign={'justify'}
          fontSize={'12px'}
        >
          {data[actualExercise].explicacao}
        </Text>

        {
          arrayRepetitions.map((element, index) => (
            <Box w={'100%'}>
              <Pressable
                disabled={element > actualRepetition || element < actualRepetition}
                key={index}
                _pressed={{opacity: 0.5}}
                onPress={changeRepetition}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                px={'10px'}
                bg={element === actualRepetition ? '#5968DF' : element > actualRepetition ? '#EB6A6A' : '#555C66'}
                h={'40px'}
                mt={'10px'}
                borderLeftRadius={'100px'}
                borderRightRadius={element === actualRepetition ? '0px' : '50px'}
                w={'100%'}
              >
                <Text
                  color={'#ffffff'}
                  bold
                  fontSize={'18px'}
                >
                  {element}
                </Text>
                
                <Text
                  fontSize={'12px'}
                  color={'#ffffff'}
                  bold
                >
                  Treino {codigo} - {selectedLevel} - Repetição {element} - Exercício {actualExercise + 1}
                </Text>

                <Box
                  w={'20px'}
                  h={'20px'}
                  borderRadius={'100px'}
                  bg={'#02041B'}
                  style={element !== actualRepetition && {
                    transform: [{ rotate: '180deg'}],
                  }}
                >
                  <ArrowDownSeries />
                </Box>
              </Pressable>
              
              {
                element === actualRepetition &&  
                  <Box borderBottomRadius={'10px'} alignSelf={'flex-end'} w={'95%'} bg={'#5968DF'} p={'5px'}>
                    <Text fontSize={'14px'} color={'#ffffff'}>{data[actualExercise][`serie${element}`]}</Text>
                  </Box>
              }
            </Box>
          ))
        }

        <Button
          fontSize={'16px'}
          mt={'20px'}
          text={'Proximo'}
          bg={actualRepetition < arrayRepetitions.length + 1 && !review ? '#555C66' : '#5968DF'}
          onPress={() => {
            setActualExercise(actualExercise + 1)
            setActualRepetition(1)
            setReview(false)
          }}
        />

        {
          actualRepetition > arrayRepetitions.length &&
            <Button
              fontSize={'16px'}
              bg={'#02041B'}
              borderWidth={1}
              borderColor={'#ffffff'}
              mt={'20px'}
              text={'Rever Treino'}
              onPress={() => {
                setActualRepetition(1)
                setReview(true)
              }}
            />
        }
        
      </Center>
    </Screen>
  )
}