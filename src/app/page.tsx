'use client';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react';
import { useEffect } from 'react';

import { WalletButton, WalletLayout, WalletPaper, WalletTypography } from '@/ui-kit';
import { themeMuiBase } from '@/assets/styles/theme-mui';
import { useOwnerList } from '@/queries/safe-accounts';
import { safeNetworksObj } from '@/constants/networks';

import {
  GridStepsStyled,
  IconDoneOpacityStyled,
  IconPlusStyled,
  IconProgressStyled,
  ItemStepPaperStyled,
  WrapperStyled,
  styledBtn,
} from './home.styles';
import routes from './routes';

export default function Home() {
  const { address, chainId } = useWeb3ModalAccount();
  const { data } = useOwnerList(address);
  const { open } = useWeb3Modal();
  const router = useRouter();

  const handleCreateTransaction = async () => {
    if (address) {
      router.push(routes.newTransaction);
    } else {
      await open();
    }
  };

  useEffect(() => {
    if (chainId && data) {
      const fetchedList = data[chainId];
      const localList = localStorage.getItem('createdSafes');
      const localListParsed = localList ? JSON.parse(localList) : safeNetworksObj;
      if (fetchedList === undefined || fetchedList.concat(localListParsed[chainId]).length === 0) {
        router.push(routes.safeAccountCreate);
      }
    } else {
      if (!address) {
        open();
      }
    }
  }, [data, chainId]);

  const handleAddfunds = async () => {
    if (address) {
      router.push(routes.walletPage);
    } else {
      await open();
    }
  };

  return (
    <WalletLayout>
      <WrapperStyled>
        <Box mb={9} display={'flex'} alignItems={'center'} gap={4}>
          <IconProgressStyled />
          <Box display={'flex'} flexDirection={'column'} gap={4}>
            <WalletTypography fontSize={22} fontWeight={600}>
              Activate your Safe Account
            </WalletTypography>
            <WalletTypography color={themeMuiBase.palette.tetriaryGrey}>
              0 of 2 steps completed. Finish the next steps to start using all Safe Account
              features:
            </WalletTypography>
          </Box>
        </Box>
        {/*  */}
        <GridStepsStyled>
          <ItemStepPaperStyled>
            <WalletPaper>
              <IconPlusStyled />
              <Box display={'flex'} flexDirection={'column'} gap={4}>
                <WalletTypography fontSize={22} fontWeight={600}>
                  Add native assets
                </WalletTypography>
                <WalletTypography color={themeMuiBase.palette.tetriaryGrey}>
                  Receive Dai to start interacting with your account.
                </WalletTypography>
              </Box>
              <WalletButton variant="contained" styles={styledBtn} onClick={handleAddfunds}>
                Add funds
              </WalletButton>
            </WalletPaper>
          </ItemStepPaperStyled>
          <ItemStepPaperStyled>
            <WalletPaper>
              <IconPlusStyled />
              <Box display={'flex'} flexDirection={'column'} gap={4}>
                <WalletTypography fontSize={22} fontWeight={600}>
                  Create your first transaction
                </WalletTypography>
                <WalletTypography color={themeMuiBase.palette.tetriaryGrey}>
                  Simply send funds, add a new signer or swap tokens through a safe app.
                </WalletTypography>
              </Box>
              <WalletButton variant="outlined" styles={styledBtn} onClick={handleCreateTransaction}>
                Create Transaction
              </WalletButton>
            </WalletPaper>
          </ItemStepPaperStyled>
        </GridStepsStyled>
        {/*  */}
        <WalletPaper>
          <IconDoneOpacityStyled />

          <Box display={'flex'} flexDirection={'column'} gap={4}>
            <WalletTypography fontSize={22} fontWeight={600} opacity={0.3}>
              Safe Account is ready!
            </WalletTypography>
            <WalletTypography opacity={0.3}>
              Continue to improve your account security and unlock more features.
            </WalletTypography>
          </Box>
        </WalletPaper>
      </WrapperStyled>
    </WalletLayout>
  );
}
