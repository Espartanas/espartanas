import React, {ReactNode} from 'react';
import {View, Text} from 'native-base';
import { creditCardPreview } from './CreditCardPreview';
import RenderIcon from '../../atom/RenderIcon';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  flag: boolean | string;
  testID: string;
};

const CreditCard = ({
  cardNumber,
  cardName,
  expiryDate,
  flag,
  testID,
}: Props) => {
  /**
   * Handles the flag of the credit card preview.
   *
   * @return {string} The icon of the credit card brand.
   */
  const handleFlag = (): string => {
    const brand = creditCardPreview.find(element => element.name === flag);
    return brand?.icon;
  };

  /**
   * Renders the card number by formatting it into chunks of four digits.
   *
   * @return {ReactNode[]} An array of React Text components, each representing a chunk of the formatted card number.
   */
  const renderCardNumber = (): ReactNode[] => {
    if (cardNumber) {
      const cardNumberArray =
        cardNumber.replace(/\s/g, '').match(/.{1,4}/g) || [];

      return cardNumberArray.map((chunk, index) => (
        <Text
          key={index}
          fontSize={'16px'}
          fontWeight="bold"
          marginRight={'10px'}
          color="white">
          {chunk}
        </Text>
      ));
    }

    return (
      <Text fontSize={'16px'} color="#ccc" marginRight={'10px'}>
        XXXX XXXX XXXX XXXX
      </Text>
    );
  };

  /**
   * Renders the card name.
   *
   * @return {ReactNode} The rendered card name component.
   */
  const renderCardName = (): ReactNode => {
    if (cardName) {
      return (
        <Text fontSize={'14px'} marginBottom={'10px'} textTransform="uppercase">
          {cardName?.toUpperCase()}
        </Text>
      );
    }

    return (
      <Text
        fontSize={'14px'}
        color="#ccc"
        marginBottom={'10px'}
        textTransform="uppercase">
        NOME COMPLETO
      </Text>
    );
  };

  /**
   * Renders the expiry date.
   *
   * @return {JSX.Element} The rendered expiry date component.
   */
  const renderExpiryDate = (): JSX.Element => {
    if (expiryDate) {
      return <Text fontSize={'14px'}>{expiryDate}</Text>;
    }

    return (
      <Text fontSize={'14px'} color="#ccc">
        MM/AA
      </Text>
    );
  };

  return (
    <LinearGradient 
      colors={['#5968DF', '#0A3E89' ]}
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 50,
        height: '100%',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
      testID={testID}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      {flag && (
        <View
          alignItems={'center'}
          justifyContent={'center'}
          position="absolute"
          right={'20px'}
          bg={flag === 'visa' && 'white'}
          top={'20px'}
          width={'100px'}
          height={'50px'}
          borderRadius={'5px'}>
          <RenderIcon>{handleFlag()}</RenderIcon>
        </View>
      )}
      <Text
        fontSize={'12px'}
        color="white"
        marginBottom={'5px'}
        fontWeight="bold">
        Número do Cartão
      </Text>
      <View flexDirection="row" marginBottom={'10px'} color="white">
        {renderCardNumber()}
      </View>
      <View marginTop={'20px'} flexDirection="row" width="100%">
        <View width={'150px'}>
          <Text
            fontSize={'12px'}
            color="white"
            marginBottom={'5px'}
            fontWeight="bold">
            Nome
          </Text>
          <Text flexDirection="row" marginBottom={'10px'} color="white">
            {renderCardName()}
          </Text>
        </View>
        <View ml={'30px'}>
          <Text
            fontSize={'12px'}
            color="white"
            marginBottom={'5px'}
            fontWeight="bold">
            Data de Expiração
          </Text>
          <Text flexDirection="row" marginBottom={'10px'} color="white">
            {renderExpiryDate()}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CreditCard;
