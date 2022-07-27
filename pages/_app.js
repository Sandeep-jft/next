import 'styles/globals.css';
import 'components/navbar.css';
import Navbar from 'components/navbar';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session} >
  <Navbar />
  <Component {...pageProps} />
</SessionProvider>
}

export default MyApp
