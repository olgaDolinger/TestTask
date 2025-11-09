import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { SortOrder } from "../components/taskTable/TaskTable";
import { OptionType } from "../components/dropdown/DropDown";

type AppContextStateType = {
  categorySortOrder: SortOrder;
  setCategorySortOrder: Dispatch<SetStateAction<SortOrder>>;
  currentCategory: OptionType;
  setCurrentCategory: Dispatch<SetStateAction<OptionType>>;
};

export const AppContext = createContext<AppContextStateType>(null);


const AppContextProvider = AppContext.Provider;

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [categorySortOrder, setCategorySortOrder] = useState<SortOrder>(null);
  const [currentCategory, setCurrentCategory] = useState<OptionType>(null);

  return (
    <AppContextProvider value={{ categorySortOrder, setCategorySortOrder, currentCategory, setCurrentCategory }}>
      {children}
    </AppContextProvider>
  );
};

export const useAppContext = () => useContext(AppContext)!;