"use client";

import { AccountType, ChildType, ContextType } from "@/types";
import React, { createContext, useState } from "react";

export const Context = createContext<ContextType | null>(null);

const GlobalContext = ({ children }: ChildType) => {
  const [account, setAccount] = useState<AccountType | null>(null);

  return (
    <Context.Provider value={{ account, setAccount }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
