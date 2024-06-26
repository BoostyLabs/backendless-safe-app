import React from 'react';

import BNBIcon from '@/assets/svg/BNB.svg';
import GnosisIcon from '@/assets/svg/gnosis.svg';
import MaticIcon from '@/assets/svg/matic.svg';
import ETHIcon from '@/assets/svg/eth-icon.svg';
import USDTIcon from '@/assets/svg/USDT.svg';
import USDCIcon from '@/assets/svg/USDC.svg';
import DefaultIcon from '@/assets/svg/default-network.svg';

const iconMapping: {
  [key: number | string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  '0': DefaultIcon,
  '1': ETHIcon,
  '4': ETHIcon,
  '11155111': ETHIcon,
  '100': GnosisIcon,
  '10200': GnosisIcon,
  '56': BNBIcon,
  '97': BNBIcon,
  '137': MaticIcon,
  '250': ETHIcon,
  USDT: USDTIcon,
  USDC: USDCIcon,
  ETH: ETHIcon,
};

export const formatterIcon = (
  value: number | string,
  width: string = '21px',
  height: string = '21px'
): React.ReactNode => {
  const IconComponent = iconMapping[value];
  if (IconComponent) {
    return <IconComponent width={width} height={height} />;
  } else {
    const IconComponent = iconMapping[0];
    return <IconComponent width={width} height={height} />;
  }
};
