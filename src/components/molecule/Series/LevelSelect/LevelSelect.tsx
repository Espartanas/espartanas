import { Center, Pressable, Text } from "native-base";
import { useEffect, useState } from "react";

type Props = {
  getSelectedLevel: (selected: string) => void;
}

export default function LevelSelect({ getSelectedLevel }: Props) {
  const [selected, setSelected] = useState('iniciante');

  useEffect(() => {
    getSelectedLevel(selected);
  }, [selected]);

  return (
    <Center mt={'30px'} flexDirection={'row'}>
      <Pressable
        bg={selected === 'iniciante' ? '#5968DF' : '#555C66'}
        borderLeftRadius={'100px'}
        alignItems={'center'}
        justifyContent={'center'}
        borderWidth={1}
        borderColor={'#ffffff'}
        h={'50px'}
        w={'33%'}
        onPress={() => setSelected('iniciante')}
        _pressed={{ opacity: 0.5 }}
      >
        <Text color={'#ffffff'} bold fontSize={14}>Iniciante</Text>
      </Pressable>
      
      <Pressable
        bg={selected === 'intermediario' ? '#5968DF' : '#555C66'}
        alignItems={'center'}
        justifyContent={'center'}
        borderWidth={1}
        borderColor={'#ffffff'}
        h={'50px'}
        w={'33%'}
        onPress={() => setSelected('intermediario')}
        _pressed={{ opacity: 0.5 }}
      >
        <Text color={'#ffffff'} bold fontSize={14}>Intermediário</Text>
      </Pressable>
      
      <Pressable
        bg={selected === 'avançado' ? '#5968DF' : '#555C66'}
        borderRightRadius={'100px'}
        alignItems={'center'}
        justifyContent={'center'}
        borderWidth={1}
        borderColor={'#ffffff'}
        h={'50px'}
        w={'33%'}
        onPress={() => setSelected('avançado')}
        _pressed={{ opacity: 0.5 }}
      >
        <Text color={'#ffffff'} bold fontSize={14}>Avançado</Text>
      </Pressable>
    </Center>
  )
}