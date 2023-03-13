import { ThemeProvider } from 'styled-components'
import { TransationProvider } from './context/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransationProvider>
        <Transactions />
      </TransationProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
