// hooks/useAuthAndContract.js
import { useSession, signIn, signOut } from "next-auth/react";
import { useContract, useAddress } from '@thirdweb-dev/react';

export function useAuthAndContract(contractAddress) {
  const { data: session, status } = useSession();
  const address = useAddress();
  const contract = useContract(contractAddress);

  const login = () => signIn();
  const logout = () => signOut();

  return { session, status, address, contract, login, logout };
}
