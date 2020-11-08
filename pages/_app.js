import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { GlobalStyle, theme } from '../styles/theme';
import { wrapper } from '../redux/store';
import styled from 'styled-components';


const ProgressBarContainer = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ProgressBarContainer>
        <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} height="3" />
      </ProgressBarContainer>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
