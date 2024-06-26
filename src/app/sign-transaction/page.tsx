'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { Box } from '@mui/system';
import Link from 'next/link';

import { WalletTypography } from '@/ui-kit/wallet-typography';
import { WalletButton, WalletLayout, WalletPaper } from '@/ui-kit';
import { themeMuiBase } from '@/assets/styles/theme-mui';
import OpenInNewIcon from '@/assets/svg/open-in-new.svg';
import CopyIcon from '@/assets/svg/copy.svg';
import IconDefaultAddress from '@/assets/svg/defult-icon-address.svg';
import useSafeStore from '@/stores/safe-store';
import { customToasty } from '@/components';
import { useMultySign } from '@/hooks/useMultySign';
import useSignStore from '@/stores/sign-store';
import { formatterIcon } from '@/utils/icon-formatter';
import { formattedLabel } from '@/utils/foramtters';
import { networks } from '@/context/networks';

import {
  BoxOwnerLinkStyled,
  GridButtonStyled,
  OwnerLinkStyled,
  OwnersInfoStyled,
  TransactionInfoStyled,
  WrapperStyled,
  styledBtn,
} from './sing-transaction.styles';

const SignTransactionComponent = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [signedCount, setSignedCount] = useState(0);
  const { safeTransaction, safeSdk } = useSafeStore();
  const { threshold, status, setStatus } = useSignStore();
  const [linkOnScan, setLinkOnScan] = useState<string>('');

  const { address } = useWeb3ModalAccount();

  const safeAddress = typeof window !== 'undefined' ? searchParams.get('address') : null;

  const chainIdUrl = searchParams.get('chainId');
  const amount = searchParams.get('amount');
  const destinationAddress = searchParams.get('destinationAddress');
  const safeTxHash = searchParams.get('safeTxHash');
  const tokenType = searchParams.get('tokenType');
  const networkName = searchParams.get('networkName');

  const multySign = useMultySign({
    safeAddress: safeAddress ?? '',
    safeTxHash: safeTxHash ?? '',
    destinationAddress,
    amount,
    chainIdUrl,
    tokenType,
  });

  useEffect(() => {
    if (chainIdUrl) {
      const linkOnScan = networks.find(elem => elem.chainId === +chainIdUrl)?.explorerUrl;
      if (linkOnScan) {
        setLinkOnScan(linkOnScan);
      }
    }

    const signatures = searchParams.getAll('signatures')[0];
    const signers = searchParams.getAll('signers')[0];

    if (signatures && signers) {
      if (signedCount !== signatures.split(',').length) {
        setSignedCount(signatures.split(',').length);
      }
      if (status !== 'signed' && signers.split(',').some(signer => signer === address)) {
        setStatus('signed');
      }
    }
  }, [router, searchParams]);

  const handleTransaction = async () => {
    if (!safeSdk || !safeTransaction) return;
    if (status === 'success') return;
    signedCount === threshold ? handleExecute() : handleSignTransaction();
  };

  const handleSignTransaction = useCallback(async () => {
    if (!multySign) return;
    if (!safeSdk || !safeTransaction || !safeTxHash) return;

    if (status === 'signed') {
      customToasty('This wallet has already signed', 'error');
      return;
    }

    await multySign.signTransactionMulty();
  }, [safeSdk, safeTransaction, safeTxHash, status]);

  const handleExecute = useCallback(async () => {
    if (!multySign) return;

    await multySign.executeMulty();
  }, [safeSdk, safeTransaction, searchParams]);

  const handleCopy = (address: string | null) => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    customToasty('Was copy', 'success');
  };

  let buttonText = 'Sign Transaction';
  if (status === 'success') {
    buttonText = 'Successfully deployed';
  } else if (signedCount === threshold) {
    buttonText = 'Execute';
  } else if (status === 'loading') {
    buttonText = 'Loading...';
  } else if (status === 'signed') {
    buttonText = 'Signed';
  }

  return (
    <WalletLayout hideSidebar>
      <WrapperStyled>
        <WalletPaper>
          <WalletTypography fontSize={22} fontWeight={600}>
            Sign Transaction
          </WalletTypography>
          <TransactionInfoStyled>
            <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
              Account info
            </WalletTypography>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                Network: {networkName}
              </WalletTypography>
              {chainIdUrl && formatterIcon(+chainIdUrl)}
            </Box>
            <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
              Chain: {chainIdUrl}
            </WalletTypography>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                Address:{' '}
              </WalletTypography>
              <IconDefaultAddress width="21px" height="21px" />
              <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                {safeAddress}
              </WalletTypography>
              <Link href={`${linkOnScan}address/${safeAddress}`} target="_blanck">
                <OpenInNewIcon width="19px" height="22px" />
              </Link>
              <CopyIcon
                width="18px"
                height="19px"
                cursor="pointer"
                onClick={() => handleCopy(safeAddress)}
              />
            </Box>
          </TransactionInfoStyled>

          <TransactionInfoStyled>
            <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
              Transaction Info
            </WalletTypography>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                Amount: {amount} {tokenType}
              </WalletTypography>
              {tokenType && formatterIcon(tokenType)}
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={1}>
              <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                Destination:{' '}
              </WalletTypography>
              <IconDefaultAddress width="21px" height="21px" />
              <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                {destinationAddress}
              </WalletTypography>
              <Link href={`${linkOnScan}address/${destinationAddress}`} target="_blanck">
                <OpenInNewIcon width="19px" height="18px" />
              </Link>
              <CopyIcon
                width="18px"
                height="19px"
                cursor="pointer"
                onClick={() => handleCopy(destinationAddress)}
              />
            </Box>

            {safeTransaction?.data.data && (
              <Box display={'flex'} alignItems={'center'} gap={1}>
                <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                  Calldata:{' '}
                </WalletTypography>
                <IconDefaultAddress width="21px" height="21px" />
                <WalletTypography component="p" color={themeMuiBase.palette.white} fontWeight={600}>
                  {formattedLabel(safeTransaction?.data.data ?? '0x')}
                </WalletTypography>
              </Box>
            )}
          </TransactionInfoStyled>

          <GridButtonStyled>
            {address ? (
              <WalletButton
                disabled={status === 'loading'}
                variant={status === 'success' ? 'outlined' : 'contained'}
                styles={styledBtn}
                onClick={handleTransaction}
              >
                {buttonText}
              </WalletButton>
            ) : (
              <WalletButton variant="outlined" styles={styledBtn}>
                Connect Wallet
              </WalletButton>
            )}
          </GridButtonStyled>

          <WalletTypography fontSize={18} fontWeight={600}>
            Safe URL
          </WalletTypography>

          <BoxOwnerLinkStyled>
            <OwnerLinkStyled>
              <WalletTypography
                style={{
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  maxWidth: '450px',
                }}
                fontSize={17}
                fontWeight={400}
              >
                {formattedLabel(`${pathName}?${searchParams.toString()}`, 17, 40)}
              </WalletTypography>
            </OwnerLinkStyled>

            <Link href={`${pathName}?${searchParams.toString()}`} target="_blanck">
              <OpenInNewIcon width="19px" height="18px" />
            </Link>
            <CopyIcon
              width="18px"
              height="19px"
              cursor="pointer"
              onClick={() => handleCopy(window.location.href)}
            />
          </BoxOwnerLinkStyled>

          <OwnersInfoStyled>
            <WalletTypography fontSize={22} fontWeight={600}>
              Signers
            </WalletTypography>

            <WalletTypography fontSize={17}>
              <WalletTypography fontWeight={600}>{signedCount} </WalletTypography>
              out of <WalletTypography fontWeight={600}>{threshold}</WalletTypography> Threshold
              {threshold > 1 ? '' : 'ers'}
            </WalletTypography>
          </OwnersInfoStyled>
        </WalletPaper>
      </WrapperStyled>
    </WalletLayout>
  );
};

export default function SignTransaction() {
  return (
    <Suspense>
      <SignTransactionComponent />
    </Suspense>
  );
}
