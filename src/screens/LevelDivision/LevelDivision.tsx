import { useState } from "react";
import { Header } from "../../components/molecule/Header.molecule";
import LevelButtons from "../../components/molecule/LevelDivision/LevelButtons";
import Screen from "../../components/molecule/Screen.molecule";
import { levelDivision } from "../../utils/levelDivision";
import { Box, Center, Text, VStack } from "native-base";

export default function LevelDivision() {
  const [levelSelected, setLevelSelected] = useState(0)

  function getLevelSelected(level: number) {
    setLevelSelected(level)
  }

  console.log(levelSelected)

  return (
    <Screen paddingX={'20px'}>
      <Header title="Nivelamento" />

      <LevelButtons getLevelSelected={getLevelSelected} />

      <VStack bg={levelSelected === 0 ? '#555C66' : levelSelected === 1 ? '#EB6A6A' : '#5968DF'} p={'20px'} borderBottomRadius={'10px'} mt={'10px'}>
        <Text color={'#ffffff'} bold>{levelDivision[levelSelected].title}</Text>

        <Text color={'#ffffff'} mt={'5px'}>{levelDivision[levelSelected].description}</Text>

        <Text color={'#ffffff'} mt={'5px'}>O que esperar?</Text>

        {
          levelDivision[levelSelected].strengths.map(strength => (
            <Text color={'#ffffff'} bold>• {strength}</Text>
          ))
        }

        <Text color={'#ffffff'} mt={'5px'}>{levelDivision[levelSelected].conclusion}</Text>
      </VStack>
    </Screen>
  );
}