import { Box, Center } from "native-base";
import { frequentQuestions } from "../../utils/FrequentQuestions";
import FrequentQuestions from "../../components/molecule/Home/FrequentQuestions/FrequentQuestions";
import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";

export default function Questions() {
  return (
    <Screen paddingX={'20px'}>
      <Header title='Perguntas Frequentes' />

      <Box mt={'30px'} mb={'100px'}>
        {
          frequentQuestions.map((element, index) => (
            <FrequentQuestions
              key={index}
              question={element.questions}
              answer={element.answer}
            />
          ))
        }
      </Box>
    </Screen>
  )
}