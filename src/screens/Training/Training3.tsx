import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";
import api from "../../services/api";
import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { Box, Center, HStack, Pressable, Text } from "native-base";
import CardExercise from "../../components/molecule/Training2/CardExercise/CardExercise";
import Button from "../../components/molecule/Button.molecule";
import { useNavigation } from "@react-navigation/native";
import { ArrowDownSeries } from "../../assets/icons/Arrow-down-series";

type Props = {
  route:any
}

export default function Training3({ route }: Props) {
  const {id, selectedLevel, codigo} = route.params;
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([] as any);

  const [actualExercise, setActualExercise] = useState(0);

  const [showModalTreino, setShowModalTreino] = useState(false);

  function getSeries() {
    const today = new Date();
    const month = today. toLocaleString('pt-br', { month: 'long' })

    api
      .get(`/${selectedLevel}/${month}/${id}`)
      .then((response) => {
        setData(response.data.workouts);
      })
      .catch((error) => {
        console.log(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getSeries()
  }, [])
  
  if (loading) {
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

  return (
    <>
      <Screen paddingX={'20px'}>
        <Header title={'Treino'} />

        <Center mb={showModalTreino ? '200px' : '100px'} mt={'20px'}>
          {
            data.map((exercise: any, index: number) => (
              <Box w={'100%'} key={index}>
                <CardExercise
                  getRepetitions={getRepetitions}
                  selectedLevel={selectedLevel}
                  data={data}
                  index={index}
                  exercise={exercise}
                />
              </Box>
            ))
          }
        </Center>

      </Screen>
      
      <>
        <Pressable alignItems={'center'} justifyContent={'center'} onPress={() => setShowModalTreino(!showModalTreino)} position={'absolute'} bottom={showModalTreino ? '130px' : '0px'} bg={'#000000'} borderTopRadius={'100px'} w={'100%'} h={'40px'} borderWidth={1} borderColor={'#ffffff'}>
          {
            showModalTreino ?
              <ArrowDownSeries /> :
              <HStack alignItems={'center'} justifyContent={'center'}>
                <Text mr={'5px'} color={'#ffffff'}>
                  Inicie aqui o seu treino
                </Text>
                <Box style={{transform: [{ rotate: '180deg'}]}}>
                  <ArrowDownSeries />
                </Box>
              </HStack>
          }
        </Pressable>
        {
          showModalTreino &&
          <Box px={'20px'} bottom={0} position={'absolute'} w={'100%'} bg={'rgba(52, 52, 52, 0.95)'} h={'130px'}>
            <Text py={'10px'} p={'5px'} color={'#ffffff'} fontSize={'18px'} bold>Deseja começar seu treino e acumular pontos? Vamos lá!</Text>

            <Button onPress={() => navigation.navigate({name: 'TrainingSystem', params: {data, id, selectedLevel, codigo}} as never)} text={'Iniciar Treino'} />
          </Box>
        }
      </>
    </>
  )
}