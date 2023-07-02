// app/providers.tsx

// import { CacheProvider } from '@chakra-ui/next-js'
import { UserContextProvider } from '@/context/userContext'
import { ChakraProvider } from './lib/chakraui'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </ChakraProvider>
  )
}