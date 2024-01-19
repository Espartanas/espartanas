import React, {useState} from 'react';
import {Image, Pressable, Text} from 'native-base';

type Props = {
  item: any;
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};

export default function Slide({item, category, setCategory}: Props) {
  const [selected, setSelected] = useState(false);
  function selectCategory() {
    setCategory(item.value);
    setSelected(!selected);
  }

  return (
    <Pressable
      alignItems={'center'}
      mt={'40px'}
      px={'20px'}
      bg={'gray.50'}
      borderRadius={'10px'}
      borderWidth={'1px'}
      borderColor={category === item.value ? 'green.500' : 'rgba(0,0,0,0.2)'}
      py={'30px'}
      onPress={selectCategory}>
      <Text fontSize={'20px'} bold>
        {item.title}
      </Text>
      <Image
        my={'20px'}
        w={'200px'}
        h={'200px'}
        source={item.image}
        alt={item.title}
      />
      <Text fontSize={'16px'} textAlign={'center'}>
        {item.description}
      </Text>
    </Pressable>
  );
}
