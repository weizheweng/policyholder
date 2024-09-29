import { createContext, type Dispatch, type SetStateAction, useMemo, useState, type ReactNode } from 'react'

interface PolicyholderContextProps {
  code: string,
  setCode: Dispatch<SetStateAction<string>>,
}

export const PolicyholderContext = createContext<PolicyholderContextProps | null>(null)

interface PolicyholderProviderProps {
  children: ReactNode,
}

export const PolicyholderProvider = ({ children }: PolicyholderProviderProps) => {
  const [code, setCode] = useState('')

  const contextValue = useMemo(
    () => ({
      code,
      setCode,
    }),
    [code, setCode]
  )

  return (
    <PolicyholderContext.Provider value={contextValue}>
      {children}
    </PolicyholderContext.Provider>
  )
}
