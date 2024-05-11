import {Pressable, Text, useTheme} from 'native-base';
import {InterfacePressableProps} from 'native-base/lib/typescript/components/primitives/Pressable/types';
import React from 'react';

type Props = InterfacePressableProps & {
  text: string;
  width?: string;
  height?: string;
  bg?: string;
  borderRadius?: string;
  alignItems?: string;
  justifyContent?: string;
  fontSize?: string;
  variant?: boolean;
  borderColorVariant?: string;
  testID?: string;
};

export default function Button({
  variant = false,
  text,
  width = '100%',
  borderRadius = '5px',
  height = '48px',
  alignItems = 'center',
  justifyContent = 'center',
  fontSize = '20px',
  borderColorVariant = '#ffffff',
  testID,
  ...rest
}: Props): JSX.Element {
  const {colors} = useTheme();
  return (
    <Pressable
      testID={testID}
      _pressed={{
        opacity: 0.5,
      }}
      width={width}
      height={height}
      bg={variant ? '#02041B' : '#5968DF'}
      borderWidth={variant ? '1px' : 0}
      borderColor={variant ? borderColorVariant : colors.white}
      borderRadius={borderRadius}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...rest}>
      <Text
        bold
        color={variant ? borderColorVariant : colors.white}
        fontSize={fontSize}>
        {text}
      </Text>
    </Pressable>
  );
}
