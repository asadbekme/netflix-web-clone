export interface ContextType {
  account: AccountType | null;
  setAccount: Dispatch<SetStateAction<AccountType | null>>;
}

export type AccountType = {
  _id: string;
  name: string;
  uid: string;
  pin: string;
};

export interface ChildType {
  children: ReactNode;
}
