import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Animated, ActivityIndicator} from 'react-native';
import {useToast, View} from 'native-base';

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

const CreditCardForm = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const {setCreditCardData} = useApp();
  
  const [creditCard, setCreditCard] = useState({
    name: '',
    number: '',
    expireDate: '',
    cvc: '',
  });
  const [flag, setFlag] = useState<boolean | string>('');
  const [isCVCVisible, setIsCVCVisible] = useState<boolean>(false);

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
    if (!creditCard.name || !creditCard.number || !creditCard.expireDate || !creditCard.cvc) {
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
    }

    const card = {
      holderName: creditCard.name,
      number: creditCard.number,
      expiryMonth: creditCard.expireDate.substring(0, 2),
      expiryYear: '20' + creditCard.expireDate.substring(3, 5),
      cvc: creditCard.cvc,
    }

    setCreditCardData(card);

    navigation.navigate('AddAddressData' as never);
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
    <Screen paddingX={'20px'} flex={1} mt={'30px'}>
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

        <View w={'100%'}>
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
            testID="cvc"
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

        <Button
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
