import { Box, Center, Pressable, Text } from "native-base";
import { ArrowDown } from "../../../../assets/icons/arrow-down";
import { ArrowUp } from "../../../../assets/icons/arrow-up";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export default function FrequentQuestions({ question, answer }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Center mb={'10px'} w={'100%'}>
      <Pressable
        _pressed={{opacity: 0.5}}
        onPress={() => setShowAnswer(!showAnswer)}
        h={'45px'}
        px={'10px'}
        flexDirection={'row'}
        bg={showAnswer ? '#5968DF' : '#555C66'}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Text w={'90%'} fontSize={'14px'} bold color={'#ffffff'}>{question}</Text>
        {
          showAnswer ? <ArrowDown /> : <ArrowUp />
        }
      </Pressable>

      <Box pb={showAnswer ? '20px' : 0} bg={showAnswer ? '#5968DF' : '#555C66'} w={'100%'} px={'10px'}>
        {
          showAnswer && <Text fontSize={'14px'} color={'#ffffff'} w={'100%'} mt={'10px'}>{answer}</Text>
        }
      </Box>
    </Center>
  )
}