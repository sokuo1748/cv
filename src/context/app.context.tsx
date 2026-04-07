import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const APP_TAB_IDS = [
  "about-me",
  "resume",
  "projects",
  "contact",
] as const;

export type AppTabId = (typeof APP_TAB_IDS)[number];

type AppContextValue = {
  activeTab: AppTabId;
  isTransitioning: boolean;
  handleChangeTab: (tab: AppTabId) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<AppTabId>("about-me");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChangeTab = useCallback((tab: AppTabId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    },500); 
  }, []);

  const value = useMemo(
    () => ({ activeTab, isTransitioning, handleChangeTab }),
    [activeTab, isTransitioning, handleChangeTab],
  );

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return ctx;
}