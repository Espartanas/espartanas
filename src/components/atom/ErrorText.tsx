import {ITextProps, Text} from 'native-base';
import React from 'react';


type Props = ITextProps & {
  error: string | undefined;
};

/**
 * Renders an error text component.
 * @param {Props} error - The error message to be displayed.
 * @return {React.ReactElement} The rendered error text component.
 */
export default function ErrorText({error}: Props): React.ReactElement {
  return (
    <Text
      mb={'3px'}
      height={'20px'}
      w={'auto'}
      bold
      fontSize={'10px'}
      color="#DC2426">
      {error}
    </Text>
  );
}
