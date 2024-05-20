import { HStack, Image, Pressable, Text, VStack } from "native-base";
import Screen from "../../components/molecule/Screen.molecule";
import { ArrowBack } from "../../assets/icons/arrow-back";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/molecule/Header.molecule";

export default function About() {
  const navigation = useNavigation();

  return (
    <Screen paddingX={'20px'}>
      <Header title="Espartanas" />

      <Image
        mt={'40px'}
        alignSelf={'center'}
        w={72}
        h={72}
        tintColor={'#ffffff'}
        source={require('../../assets/images/logo.png')}
        alt={'logo'}
      />
      
      <VStack>
        <Text textAlign={'justify'} mb={'20px'} color={'#ffffff'}>
          Bem-vindo ao Espartanas, onde a paixão pelo fitness se encontra com a inovação tecnológica para criar uma experiência única de treinamento pessoal. Fundada com a missão de tornar o condicionamento físico acessível, conveniente e inspirador para todos, a Espartanas é muito mais do que apenas um aplicativo - é um estilo de vida.
        </Text>

        <Text textAlign={'justify'} mb={'20px'} color={'#ffffff'}>
          Nossa empresa nasceu da crença inabalável de que todos merecem os benefícios de uma vida ativa e saudável, independentemente de sua agenda lotada ou localização geográfica. Desde o nosso lançamento, temos sido pioneiros em um novo paradigma de fitness, capacitando indivíduos de todas as idades e origens a alcançarem seus objetivos de saúde e bem-estar de maneira inteligente e sustentável.
        </Text>

        <Text textAlign={'justify'} mb={'20px'} color={'#ffffff'}>
          O que nos diferencia é o nosso compromisso inabalável com a excelência. Trabalhamos incansavelmente para oferecer uma plataforma que não apenas atenda, mas exceda as expectativas dos nossos usuários. Combinando a expertise de profissionais do fitness com a última tecnologia em aplicativos móveis, criamos uma experiência de treino que é personalizada, motivadora e incrivelmente eficaz.
        </Text>

        <Text textAlign={'justify'} mb={'20px'} color={'#ffffff'}>
          Na Espartanas, acreditamos que o fitness vai além dos números na balança ou das estatísticas de desempenho. É sobre se sentir forte, confiante e capacitado em seu próprio corpo. É sobre superar obstáculos, desafiar limites e descobrir o seu verdadeiro potencial. É por isso que estamos aqui, não apenas como um aplicativo, mas como um parceiro dedicado em sua jornada de transformação.
        </Text>
      </VStack>

    </Screen>
  )
}