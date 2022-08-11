import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

type Theme = 'dark' | 'light'

interface ISetThemeFunction {
  (_: Theme): void
}

interface IVoidFunction {
  (): void
}

interface IUseThemeModeFunction {
  <T, V>(_: T, __: V): T | V
}

export const ThemeContext = createContext<{
  theme: Theme
  setTheme: ISetThemeFunction
  toggleTheme: IVoidFunction
}>({
  theme: 'dark',
  setTheme: _ => {},
  toggleTheme: () => {}
})

export const ThemeProvider = props => {
  if (props === undefined)
    throw new Error(
      'Props Undefined. You probably mixed up betweenn default/named import'
    )
  const { initValue, children } = props

  const [value, setValue] = useState<Theme>(initValue)

  const setTheme: ISetThemeFunction = newTheme => {
    window.localStorage.setItem('theme', newTheme)
    setValue(newTheme)
  }

  const toggleTheme: IVoidFunction = () => {
    setTheme(value === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: value,
        setTheme,
        toggleTheme
      }}
    >
      <div className={value}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useThemeMode: IUseThemeModeFunction = <L, D>(
  light: L,
  dark: D
) => {
  const { theme } = useContext(ThemeContext)
  return useMemo(() => (theme === 'dark' ? dark : light), [theme, dark, light])
}
