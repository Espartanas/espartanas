import { CheckIcon, Select } from "native-base";
import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import { useState } from "react";
import Button from "../../components/molecule/Button.molecule";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

type Props = {
  route: any
}

export default function PaymentMethod({route}: Props) {
  const [paymentType, setPaymentType] = useState("");
  const navigation = useNavigation();

  function payment() {
    if (paymentType === 'credit') {
      return  
    }

    const obj = {
      billing_type: paymentType,
      value: route.params.big_price_number,
      points: route.params.premium_points
    }

    if (paymentType === 'boleto') {
      api
        .post('/payment', obj)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.response.data))
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
        <Button onPress={() => {paymentType === 'credit' ? navigation.navigate('AddCreditCard' as never) : payment()}} text={paymentType === 'credit' ? "Digitar Cartão" : "Gerar Boleto"} />
      }
    </Screen>
  )
}