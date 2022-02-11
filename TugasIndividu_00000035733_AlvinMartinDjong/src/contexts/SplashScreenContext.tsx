import { createContext, useContext, useState } from "react"

// Interface for context
interface Context {
  showSplashScreen: boolean,
  setShowSplashScreen: (showSplashScreen: boolean) => void
}

// Interface for children components
interface Props {
  children: React.ReactNode
}

// Default value for context
const defaultValue = {
  showSplashScreen: true,
  setShowSplashScreen: () => {},
}

// Create context for splash screen
const SplashScreenContext = createContext<Context>(defaultValue)

// Export context for other components to use
export const useSplashScreen = () => {
  return useContext(SplashScreenContext)
}

// Context provider
export const SplashScreenProvider: React.FC<Props> = ({ children }) => {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
  
  return (
    <SplashScreenContext.Provider
      value={{ showSplashScreen, setShowSplashScreen }}
    >
      {children}
    </SplashScreenContext.Provider>
  )
}