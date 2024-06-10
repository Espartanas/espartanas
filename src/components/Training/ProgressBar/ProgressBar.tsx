import { Box, Center, HStack, Text } from "native-base";

type Props = {
  data: any,
  actualExercise: number,
}

export default function ProgressBar({ data, actualExercise }: Props) {
  return (
    <Center mt={'30px'}>
      <HStack>
        {
          data.map((exercise: any, index: number) => (
            <Box
              borderLeftRadius={index === 0 ? '5px' : '0px'}
              borderRightRadius={index === data.length - 1 ? '5px' : '0px'}
              borderWidth={1}
              borderColor={'#ffffff'}
              w={`${100/data.length}%`}
              h={'10px'}
              bg={actualExercise >= index ? '#5968DF' : '#ffffff'}
              key={index}
            />
          ))
        }
      </HStack>
    </Center>
  )
}