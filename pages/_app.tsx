import '@/styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page:any)=>page)

  // return <Component {...pageProps} />
  return getLayout ( <Component {...pageProps} /> )
}


//TODA ESTA SECCION ESTA MODIFICADA SIGUIENDO EL EJEMPLO DE LA DOCUMENTACION DE NEXT
//BUSCAR EN PAGES AND LAYOUTS>> EXAMPLES >> WITH TYPESCRIPT