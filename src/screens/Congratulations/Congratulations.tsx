import { Image, Text } from "native-base";
import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";

import congrats from '../../assets/images/congrats.png'
import Button from "../../components/molecule/Button.molecule";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/authContext";

export default function Congratulations() {
  const {updateUser} = useAuth();
  const navigation = useNavigation();

  function handleClick() {
    updateUser();

    navigation.navigate('Home' as never)
  }

  return (
    <Screen paddingX={'20px'}>
      <Header notShowArrowBack title={'Bem vindo ao Espartanas'} />

      <Image mt={'40px'} w={'100%'} h={'180px'} alignSelf={'center'} source={congrats} alt="congrats"/>
      
      <Text mt={'20px'} textAlign={'justify'} color={'#ffffff'} fontSize={'12px'}>
        Parabéns por se tornar o mais novo membro das Espartanas!
        Sua decisão de assinar nosso plano é o primeiro passo em
        direção a uma jornada incrível de transformação e saúde.
        Estamos entusiasmados em te acompanhar em cada treino,
        desafio e conquista. Prepare-se para liberar seu potencial
        máximo e atingir suas metas fitness. Bem-vindo(a) ao time!
      </Text>
      
      <Button mt={'40px'} text={'Tela inicial'} onPress={handleClick} />
    </Screen>
  );
}