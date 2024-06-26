'use client';
import { useState } from 'react';

import { WalletLayout, WalletTypography, WalletButton } from '@/ui-kit';

import { TrxBuilder } from './components/trx-builder/trx-builder';
import { SendTokens } from './components/send-tokens/send-tokens';
import { Flex, WrapperStyled } from './new-transaction.styles';

export default function NewTransaction() {
  const [state, setState] = useState<'send' | 'trx-builder'>('send');
  const [btnTitle, setBtnTitle] = useState<'Send Tokens' | 'Transaction Builder'>('Send Tokens');

  const toggleState = () => {
    setState(state === 'send' ? 'trx-builder' : 'send');
  };

  const onHoverHandler = () => {
    setBtnTitle(state === 'send' ? 'Transaction Builder' : 'Send Tokens');
  };

  const onLeaveHandler = () => {
    setBtnTitle(state !== 'send' ? 'Transaction Builder' : 'Send Tokens');
  };

  return (
    <WalletLayout>
      <WrapperStyled>
        <Flex>
          <WalletTypography fontSize={22} fontWeight={600}>
            New Transaction
          </WalletTypography>
          <WalletButton
            onClick={toggleState}
            styles={{ marginLeft: '2rem', width: '12rem', height: '2rem' }}
            onMouseOver={onHoverHandler}
            onMouseLeave={onLeaveHandler}
          >
            {btnTitle}
          </WalletButton>
        </Flex>

        {state === 'send' ? <SendTokens /> : <TrxBuilder />}
      </WrapperStyled>
    </WalletLayout>
  );
}
