import { HStack, Select, Text } from "native-base";
import { useEffect, useState } from "react";

type Props = {
  getTrainingDaysAmount: (amount: string) => void
}

export default function TrainingDaysAmount({ getTrainingDaysAmount }: Props) {
  const [service, setService] = useState("3");

  useEffect(() => {
    getTrainingDaysAmount(service);
  }, [service])

  return (
    <HStack alignItems={'center'} justifyContent={'center'} mt={'20px'}>
      <Text bold color={'#ffffff'} fontSize={14} w={'60%'}>Quantos dias você pretende treinas?</Text>

      <Select minWidth={'100px'} h={'40px'} w={'100%'} color={'#ffffff'} selectedValue={service} accessibilityLabel="Choose Service" placeholder="3" mt={1} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="3 dias" value="3" />
        <Select.Item label="4 dias" value="4" />
        <Select.Item label="5 dias" value="5" />
        <Select.Item label="6 dias" value="6" />
      </Select>
    </HStack>
  )
}