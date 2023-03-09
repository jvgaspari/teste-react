import { CartProvider } from '@/contexts'
import '@/styles/globals.css'
import { theme } from '@/styles/theme'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
