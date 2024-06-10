import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";
import api from "../../services/api";
import { useQuery } from "react-query";
import { ActivityIndicator } from "react-native";
import ProgressBar from "../../components/Training/ProgressBar/ProgressBar";
import { useState } from "react";
import { Box, Center, Pressable, Text } from "native-base";
import { ArrowDownSeries } from "../../assets/icons/Arrow-down-series";
import Button from "../../components/molecule/Button.molecule";
import { useNavigation } from "@react-navigation/native";
import Observations from "../../components/Training/Observations/Observations";

type Props = {
  route:any
}

export default function Training({ route }: Props) {
  const {id, selectedLevel, codigo} = route.params;
  const navigation = useNavigation();

  const [actualExercise, setActualExercise] = useState(0);

  const {data, isLoading} = useQuery([''], async () => {
    const today = new Date();
    const month = today. toLocaleString('pt-br', { month: 'long' })
    const res = await api.get(`/${selectedLevel}/${month}/${id}`);
    return res.data.workouts;
  });

  const [actualRepetition, setActualRepetition] = useState(1);
  const [review, setReview] = useState(false);
  
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
    return array
  }

  function changeRepetition() {
    if (actualRepetition <= getRepetitions()?.length) {
      setActualRepetition(actualRepetition + 1)
    }
  }

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
          bold
        >
          {actualExercise + 1} - {data[actualExercise].nome}
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
          data[actualExercise].observacao.length > 0 &&
          <Observations observacao={data[actualExercise].observacao} />
        }

        {
          getRepetitions()?.map((element, index) => (
            data[actualExercise][`serie${element}`] &&
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
                    <Text textAlign={'justify'} fontSize={'14px'} color={'#ffffff'}>{data[actualExercise][`serie${element}`]}</Text>
                  </Box>
              }
            </Box>
          ))
        }

        <Button
          fontSize={'16px'}
          mt={'20px'}
          text={'Proximo'}
          bg={actualRepetition < getRepetitions()?.length + 1 && !review ? '#555C66' : '#5968DF'}
          onPress={() => {
            setActualExercise(data.length - 1 === actualExercise ? 0 : actualExercise + 1)
            setActualRepetition(1)
            setReview(false)
          }}
        />

        {
          actualRepetition > getRepetitions()?.length &&
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