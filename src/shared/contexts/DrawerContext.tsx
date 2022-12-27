import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

interface DrawerProviderProps {
  children: React.ReactNode;
}

//ver o curso anterior
const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrowerOpen] = useState(false);

  //useCallback armazena funções
  const toggleDrawerOpen = useCallback(() => {
    setIsDrowerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen,  toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
