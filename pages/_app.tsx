
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import '../styles/cardstyle.scss';
import '../styles/mainnavbar.css';
import '../styles/footer.css';
import 'normalize.css';
import '../styles/globals.css';
import '../styles/homepage.css';
import '../styles/herosection.css';
import '../styles/loginpage.css'
import { AppWrapper } from '../components/Wrappers/appwrapper';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>)
}

export default MyApp
