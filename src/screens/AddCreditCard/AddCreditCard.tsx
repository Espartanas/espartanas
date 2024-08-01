import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Animated, ActivityIndicator} from 'react-native';
import {Box, CheckIcon, HStack, Select, useToast, View} from 'native-base';

import { useApp } from '../../context/appContext';

import Input from '../../components/atom/Input';
import Button from '../../components/molecule/Button.molecule';
import creditCardType from 'credit-card-type';
import CreditCard from '../../components/molecule/AddCreditCard/CCImageForm';

import {useNavigation} from '@react-navigation/native';

import { maskCreditCardNumber, maskExpiredCreditCardDate, maskLetters } from '../../utils/masks';

import CVCCard from '../../components/molecule/AddCreditCard/CVCCArd';
import Screen from '../../components/molecule/Screen.molecule';
import { Header } from '../../components/molecule/Header.molecule';

type Props = {
  route: any,
}

const CreditCardForm = ({route}: Props) => {
  const navigation = useNavigation();
  const toast = useToast();

  const {setCreditCardData} = useApp();
  
  const [creditCard, setCreditCard] = useState({
    name: '',
    number: '',
    expireDate: '',
    cvc: '',
    cpfCnpj: '',
  });

  const [flag, setFlag] = useState<boolean | string>('');
  const [isCVCVisible, setIsCVCVisible] = useState<boolean>(false);

  const [numberInstallments, setNumberInstallments] = useState('1');

  const flipAnimation = useRef<Animated.Value>(new Animated.Value(0)).current;

  function validarCartaoDeCredito(numero: string) {
    numero = numero.replace(/\s+/g, '');

    if (!/^\d+$/.test(numero)) {
        return false;
    }

    let soma = 0;
    let deveDobrar = false;

    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero.charAt(i));

        if (deveDobrar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;
        deveDobrar = !deveDobrar;
    }

    return (soma % 10) === 0;
  }

  function validarDataMMYY(data: string) {
    if (!/^\d{2}\/\d{2}$/.test(data)) {
        return false;
    }

    const [mes, ano] = data.split('/').map(Number);

    if (mes < 1 || mes > 12) {
        return false;
    }

    if (ano < 0 || ano > 99) {
        return false;
    }

    const mesAtual = 7;
    const anoAtual = 24;

    if (ano < anoAtual || (ano === anoAtual && mes < mesAtual)) {
        return false;
    }

    return true;
  }

  function validarCVV(cvv: string) {
    const regex = /^[0-9]{3,4}$/;
    return regex.test(cvv);
  }

  const onSubmit = () => {
    if (!creditCard.name || !creditCard.number || !creditCard.expireDate || !creditCard.cvc || !creditCard.cpfCnpj) {
      toast.show({
        title: 'Por favor, preencha todos os campos.',
        placement: 'top',
        bgColor: 'red.500',
      })

      return;
    }

    if (!validarCartaoDeCredito(creditCard.number)) {
      toast.show({
        title: 'Digite um número de cartão de crédito valido.',
        placement: 'top',
        bgColor: 'red.500',
      })

      return;
    }

    if (!validarDataMMYY(creditCard.expireDate)) {
      toast.show({
        title: 'Digite uma data válida para o cartão de crédito.',
        placement: 'top',
        bgColor: 'red.500',
      })

      return;
    }

    if (!validarCVV(creditCard.cvc)) {
      toast.show({
        title: 'Digite um CVV válido para o cartão de crédito.',
        placement: 'top',
        bgColor: 'red.500',
      })

      return
    }

    if (creditCard.cpfCnpj.length < 11 || creditCard.cpfCnpj.length > 15) {
      toast.show({
        title: 'Digite um CPF ou CNPJ válido para o cartão de crédito.',
        placement: 'top',
        bgColor: 'red.500',
      })

      return
    }

    const card = {
      holderName: creditCard.name,
      number: creditCard.number,
      expiryMonth: creditCard.expireDate.substring(0, 2),
      expiryYear: '20' + creditCard.expireDate.substring(3, 5),
      ccv: creditCard.cvc,
      cpfCnpj: creditCard.cpfCnpj,
      installmentCount: numberInstallments,
      installmentValue: route.params.big_price_number / +numberInstallments,
    }

    setCreditCardData(card);

    navigation.navigate({name: 'AddAddressData', params: {...route.params}} as never);
  };

  useEffect(() => {
    setFlag(
      creditCardType(creditCard.number).length === 1 &&
        creditCardType(creditCard.number)[0].type,
    );
  }, [creditCard.number]);

  const handleCVCInputFocus = () => {
    setIsCVCVisible(true);
    Animated.spring(flipAnimation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleCVCInputBlur = () => {
    setIsCVCVisible(false);
    Animated.spring(flipAnimation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const cardContainerFrontAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const cardContainerBackAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <Screen paddingX={'20px'} mt={'20px'}>
      <Header title={'Cartão de Crédito'} />

      <Animated.View
        style={[
          styles.cardContainer,
          cardContainerFrontAnimatedStyle,
          {display: isCVCVisible ? 'none' : 'flex'},
        ]}>
        <CreditCard
          flag={flag}
          testID="creditCardView"
          cardNumber={creditCard.number}
          cardName={creditCard.name}
          expiryDate={creditCard.expireDate}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.cardContainerBack,
          cardContainerBackAnimatedStyle,
          {display: isCVCVisible ? 'flex' : 'none'},
        ]}>
        <CVCCard cvc={creditCard.cvc} />
      </Animated.View>

      <View width={'100%'} mt={10}>
        <Input
          style={{
            backgroundColor: 'white',
          }}
          testID="cardNumber"
          placeholder="Número do Cartão"
          onChangeText={text => {
            setCreditCard({...creditCard, number: maskCreditCardNumber(text)});
          }}
          keyboardType="numeric"
          maxLength={16}
          value={creditCard.number}
        />

        <Input
          style={{
            backgroundColor: 'white',
          }}
          testID="cardName"
          placeholder="Nome"
          onChangeText={text => {
            setCreditCard({...creditCard, name: maskLetters(text)});
          }}
          value={creditCard.name}
        />

        <Input
          style={{
            backgroundColor: 'white',
          }}
          testID="cpfCnpj"
          placeholder="CPF ou CNPJ titular"
          keyboardType="numeric"
          onChangeText={text => {
            setCreditCard({...creditCard, cpfCnpj: text});
          }}
          value={creditCard.cpfCnpj}
        />

        <View>
          <Input
            style={{
              backgroundColor: 'white',
            }}
            w={'100%'}
            testID="expireDate"
            placeholder="MM/AA"
            onChangeText={text => {
              setCreditCard({...creditCard, expireDate: maskExpiredCreditCardDate(text)});
            }}
            keyboardType="numeric"
            value={creditCard.expireDate}
          />

          <Input
            style={{
              backgroundColor: 'white',
            }}
            w={'100%'}
            placeholder="CVC"
            onChangeText={text => {
              setCreditCard({...creditCard, cvc: text});
            }}
            keyboardType="numeric"
            onFocus={handleCVCInputFocus}
            onBlur={handleCVCInputBlur}
            value={creditCard.cvc}
            maxLength={4}
          />
        </View>
        
        <Box>
          <Select
            mb={'20px'}
            bg={'white'}
            w={'100%'}
            selectedValue={numberInstallments}
            minWidth="200"
            accessibilityLabel="Número de parcelas"
            placeholder="Número de parcelas"
            _selectedItem={{bg: "white", endIcon: <CheckIcon size="5" />}}
            onValueChange={itemValue => setNumberInstallments(itemValue)}
          >
            <Select.Item label={`1x parcela de R$ ${route.params.big_price_number},00`} value="1" />
            <Select.Item label={`2x parcela de R$ ${(route.params.big_price_number / 2).toFixed(2)}`} value="2" />
            <Select.Item label={`3x parcela de R$ ${(route.params.big_price_number / 3).toFixed(2)}`} value="3" />
            <Select.Item label={`4x parcela de R$ ${(route.params.big_price_number / 4).toFixed(2)}`} value="4" />
            <Select.Item label={`5x parcela de R$ ${(route.params.big_price_number / 5).toFixed(2)}`} value="5" />
            <Select.Item label={`6x parcela de R$ ${(route.params.big_price_number / 6).toFixed(2)}`} value="6" />
          </Select>
        </Box>

        <Button
          mb={'20px'}
          text="Adicionar Cartão"
          onPress={() => (onSubmit())}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backfaceVisibility: 'hidden',
  },
  cardContainerBack: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backfaceVisibility: 'hidden',
  },
});

export default CreditCardForm;
