import {IInputProps, Input as InputText, Text, VStack} from 'native-base';
import ErrorText from './ErrorText';
import React from 'react';

type Props = IInputProps & {
  error?: string;
  testID?: string;
  title?: string;
};

/**
 * Renders an input component with an optional title, error message, and additional props.
 *
 * @param {Object} props - The props for the Input component.
 * @param {string} props.error - The error message to display.
 * @param {string} props.testID - The test ID for the component.
 * @param {string} props.title - The title to display.
 * @param {...rest} props - Additional props to pass to the InputText component.
 * @return {ReactElement} The rendered input component.
 */
export default function Input({
  error,
  testID,
  title,
  ...rest
}: Props): React.ReactElement {
  return (
    <VStack space={2}>
      {title && <Text>{title}</Text>}
      <InputText
        {...rest}
        testID={testID}
        fontSize={'14px'}
        placeholderTextColor="#2525258d"
        borderRadius={'10px'}
        width={'100%'}
        height={'48px'}
      />
      <ErrorText error={error} />
    </VStack>
  );
}
