import { JSXElementConstructor } from "react";
import { AmexIcon, AuraIcon, DinnerIcon, DiscoverIcon, EloIcon, HiperCardIcon, JCBIcon, MasterCardIcon, UnionPayIcon, VisaIcon } from "../../../assets/iconsCreditCard";
import React from "react";

export interface IMenuITems {
  icon: JSXElementConstructor<any>;
  name: string;
}

export const creditCardPreview = [
  {
    name: 'mastercard',
    iconName: 'MasterCardIcon',
    icon: <MasterCardIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'visa',
    icon: <VisaIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'amex',
    icon: <AmexIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'diners',
    icon: <DinnerIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'elo',
    icon: <EloIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'jcb',
    icon: <JCBIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'aura',
    icon: <AuraIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'hipercard',
    icon: <HiperCardIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'unionpay',
    icon: <UnionPayIcon width={'75px'} height={'50px'} />,
  },
  {
    name: 'discover',
    icon: <DiscoverIcon width={'75px'} height={'50px'} />,
  },

]