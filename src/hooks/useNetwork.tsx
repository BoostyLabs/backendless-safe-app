import { useWeb3ModalProvider } from '@web3modal/ethers/react';
import { Network, ethers } from 'ethers';
import { useEffect, useState } from 'react';

export function useNetwork() {
  const { walletProvider } = useWeb3ModalProvider();

  const [network, setNetwork] = useState<Network | null>(null);

  useEffect(() => {
    if (walletProvider) getNetworkInfo();
  }, [walletProvider]);

  const getNetworkInfo = async () => {
    if (!walletProvider) return;
    const userProvider = new ethers.BrowserProvider(walletProvider);
    const network = await userProvider.getNetwork();
    setNetwork(network);
  };

  return network;
}
