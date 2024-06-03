'use client'
import { AddressProvider } from "@/context/address";

export const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <AddressProvider>
      {children}
    </AddressProvider>
  );
}