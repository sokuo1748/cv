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
  handleChangeTab: (tab: AppTabId) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<AppTabId>("about-me");

  const handleChangeTab = useCallback((tab: AppTabId) => {
    setActiveTab(tab);
  }, []);

  const value = useMemo(
    () => ({ activeTab, handleChangeTab }),
    [activeTab, handleChangeTab],
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
