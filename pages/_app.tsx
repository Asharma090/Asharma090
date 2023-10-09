import { AppProps } from 'next/app';
import ReduxProvider from '../app/ReduxProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    );
  }
  
  export default MyApp;
  