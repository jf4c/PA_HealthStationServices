import { Children, createContext, useCallback, useContext, useState } from "react";
import { address } from "@/service/getCep";

export const addressContext = createContext({});

export const AddressProvider = ({children}:{children: React.ReactNode}) => {
  const [address, setAddress] = useState<address>({});
  return (
    <addressContext.Provider value={{ address, setAddress}}>
      {children}
    </addressContext.Provider>
  );
}