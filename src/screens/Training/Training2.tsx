import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";
import api from "../../services/api";
import { useQuery } from "react-query";
import { ActivityIndicator } from "react-native";
import ProgressBar from "../../components/Training/ProgressBar/ProgressBar";
import { useState } from "react";
import { HStack, Pressable, Text } from "native-base";
import Repetitions from "../../components/molecule/Training2/Repetitions/Repetitions";
import { Teste } from "../../assets/icons/teste";
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

type Props = {
  route:any
}

export default function Training2({ route }: Props) {
  const {id, selectedLevel, codigo} = route.params;

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

  function showExercise(index: number) {
    if (actualRepetition <= getRepetitions()?.length) {
      setActualRepetition(index)
    }
  }

  return (
    <Screen h={windowHeight} paddingX={'20px'}>
      <Header title={codigo} />

      <ProgressBar
        data={data}
        actualExercise={actualExercise}
      />
        
      <Text color={'#ffffff'} fontSize={'16px'} bold textAlign={'justify'} mt={'30px'}>
        {data[actualExercise].explicacao}
      </Text>

      <Repetitions
        data={data}
        getRepetitions={getRepetitions}
        selectedLevel={selectedLevel}
        actualExercise={actualExercise}
      />

      <HStack mb={'20px'} alignSelf={'center'} position={'absolute'} bottom={0} w={'100%'} justifyContent={'space-between'}>
        {
          actualExercise === 0 ? <Text></Text> : <Pressable onPress={() => actualExercise !== 0 && setActualExercise(actualExercise - 1)} _pressed={{opacity: 0.7}} alignItems={'center'} justifyContent={'center'} borderLeftRadius={'100px'} w={'100px'} h={'50px'} bg={'#EB6A6A'}>
            <Teste />
          </Pressable>
        }

        {
          actualExercise === data.length - 1 ? <Text></Text> : <Pressable onPress={() => actualExercise !== data.length - 1 && setActualExercise(actualExercise + 1)} _pressed={{opacity: 0.7}} style={{transform: [{rotate: '180deg'}]}} alignItems={'center'} justifyContent={'center'} borderLeftRadius={'100px'} w={'100px'} h={'50px'} bg={'#5968DF'}>
            <Teste />  
          </Pressable>
        }
      </HStack>
    </Screen>
  )
}