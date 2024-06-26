import { Box } from '@mui/system';
import { ChangeEvent, useState } from 'react';

import { WalletButton, WalletInput } from '@/ui-kit';
import DeleteIcon from '@/assets/svg/delete.svg';

import { InputWrapperStyled, styledButton, styledButtonDelete } from './wallet-item.styles';

interface IDataWallet {
  id: number;
  value?: string;
}

interface IWalletItem {
  dataItem: IDataWallet;
  handleAddWallet: (elem: IDataWallet) => void;
  handleRemoveWallet: (walletId: number) => void;
}

export const WalletItem = ({ dataItem, handleAddWallet, handleRemoveWallet }: IWalletItem) => {
  const [value, setValue] = useState(dataItem.value);
  const onChangeInput = (elem: ChangeEvent<HTMLInputElement>) => {
    setValue(elem.target.value);
  };

  return (
    <InputWrapperStyled key={dataItem.id}>
      <Box width={'100%'}>
        <WalletInput
          onChange={onChangeInput}
          label={`Wallet address ${dataItem.id}`}
          placeholder="Placeholder text"
          value={value}
        />
      </Box>
      <WalletButton
        onClick={() => handleAddWallet(dataItem)}
        variant="contained"
        styles={styledButton}
      >
        Add Wallet
      </WalletButton>
      {dataItem.id !== 1 && (
        <WalletButton
          onClick={() => handleRemoveWallet(dataItem.id)}
          variant="outlined"
          styles={styledButtonDelete}
        >
          <DeleteIcon />
        </WalletButton>
      )}
    </InputWrapperStyled>
  );
};
