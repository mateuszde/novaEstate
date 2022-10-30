import { ThemeProvider } from 'styled-components';
import { FullWidthWrapper } from './AppStyle';
import GlobalStyle from './components/globalStyles';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const theme = {
  colors: {
    primary: '#383E42',
    secondary: '#A6A6A6',
    black: '#0D0D0D',
    lightGray: '#F2F2F2',
    darkGray: '#737373',
    white: '#fff',
  },
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FullWidthWrapper>
          <Navbar />
          <Header />
        </FullWidthWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
