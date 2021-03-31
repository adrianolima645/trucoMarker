import '../styles/global.css';
import { MatchProvider } from '../contexts/MatchContext';

function MyApp({ Component, pageProps }) {
  return (
    <MatchProvider>
      <Component {...pageProps} />
    </MatchProvider>
  );
}

export default MyApp;
