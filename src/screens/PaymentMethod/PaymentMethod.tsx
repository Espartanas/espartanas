import { CheckIcon, Select, useToast } from "native-base";
import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import { useState } from "react";
import Button from "../../components/molecule/Button.molecule";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

type Props = {
  route: any
}

export default function PaymentMethod({route}: Props) {
  const [paymentType, setPaymentType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();

  function payment() {
    if (paymentType === 'credit') {
      return  
    }

    const obj = {
      billing_type: paymentType,
      value: route.params.big_price_number,
      points: route.params.premium_points
    }

    if (paymentType === 'BOLETO') {
      setLoading(true);
      api
        .post('/payment', obj)
        .then((res) => {
          toast.show({
            description: res.data.message,
            placement: 'top',
            bgColor: 'green.700',
          })
          navigation.navigate({name: 'PaymentDetails', params: {...res.data}} as never)
        })
        .catch((error) => {
          toast.show({
            description: error.response.data.error || error.response.data.message,
            placement: 'top',
            bgColor: 'red.700',
          })
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }

  return (
    <Screen paddingX={'20px'} flex={1}>
      <Header title="Método de pagamento" />

      <Select
        marginTop={'30px'}
        mb={'30px'}
        color={'#ffffff'}
        fontSize={'14px'}
        fontWeight={'700'}
        selectedValue={paymentType}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Selecione o método de pagamento"
        onValueChange={itemValue => setPaymentType(itemValue)}
        _selectedItem={{
          bg: "#5968DF",
          rounded: "5px",
          endIcon: <CheckIcon color="white" size="5" />
        }}
      >
        <Select.Item label="Boleto" value="BOLETO" />
        <Select.Item label="Pix" value="PIX" />
        <Select.Item label="Cartão de Crédito" value="credit" />
      </Select>

      {
        paymentType !== '' &&
        <Button onPress={() => {paymentType === 'credit' ? navigation.navigate('AddCreditCard' as never) : payment()}} text={loading ? <ActivityIndicator size="small" color="#ffffff" /> : (paymentType === 'credit' ? "Digitar Cartão" : "Gerar Boleto")} />
      }
    </Screen>
  )
}