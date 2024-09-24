import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react'

interface PolicyholderContextProps extends PolicyholderProviderProps {
  code?: string,
  changeCode: (code: string) => void,
}

export const PolicyholderContext = createContext<PolicyholderContextProps | null>(null)

interface PolicyholderProviderProps {
  children: ReactNode,
}

export const PolicyholderProvider = ({ children }: PolicyholderProviderProps) => {
  const [code, setCode] = useState('')
  const changeCode = useCallback((code: string) => setCode(code), [])

  const contextValue = useMemo(
    () => ({
      code,
      changeCode,
      children,
    }),
    [code, changeCode, children]
  )

  return (
    <PolicyholderContext.Provider value={contextValue}>
      {children}
    </PolicyholderContext.Provider>
  )
}
