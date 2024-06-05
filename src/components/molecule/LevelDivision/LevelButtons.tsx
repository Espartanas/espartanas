import { HStack, Pressable, Text } from "native-base";
import { useEffect, useState } from "react";

type Props = {
  getLevelSelected: (level: number) => void
}

export default function LevelButtons({ getLevelSelected }: Props) {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    getLevelSelected(selected)
  }, [selected])

  return (
    <HStack mt={'30px'} alignItems={'center'} justifyContent={'center'} space={2}>
      <Pressable
        _pressed={{ opacity: 0.9 }}
        onPress={() => setSelected(0)}
        borderTopLeftRadius={'5px'}
        alignItems={'center'}
        justifyContent={'center'}
        w={'110px'}
        h={'50px'}
        bg={selected === 0 ? '#555C66' : '#ffffff'}
      >
        <Text color={selected === 0 ? '#ffffff' : '#000000'} bold fontSize={'16px'}>Iniciante</Text>
      </Pressable>

      <Pressable
        onPress={() => setSelected(1)}
        _pressed={{ opacity: 0.9 }}
        alignItems={'center'}
        justifyContent={'center'}
        w={'110px'}
        h={'50px'}
        bg={selected === 1 ? '#EB6A6A' : '#ffffff'}
      >
        <Text color={selected === 1 ? '#ffffff' : '#000000'} bold fontSize={'16px'}>Intermediário</Text>
      </Pressable>

      <Pressable
        onPress={() => setSelected(2)}
        _pressed={{ opacity: 0.9 }}
        borderTopRightRadius={'5px'}
        alignItems={'center'}
        justifyContent={'center'}
        w={'110px'}
        h={'50px'}
        bg={selected === 2 ? '#5968DF' : '#ffffff'}
      >
        <Text color={selected === 2 ? '#ffffff' : '#000000'} bold fontSize={'16px'}>Avançado</Text>
      </Pressable>
    </HStack>
  )
}