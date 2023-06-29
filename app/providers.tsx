// app/providers.tsx

// import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from './lib/chakraui'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <ChakraProvider>
        {children}
      </ChakraProvider>
  )
}