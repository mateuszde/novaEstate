import { ThemeProvider } from 'styled-components';
import { FullWidthWrapper } from './AppStyle';
import Cards from './components/Cards/Cards/Cards';
import GlobalStyle from './components/globalStyles';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import { first } from './cardsData';
import TextOnImage from './components/TextOnImage/TextOnImage';
import TextAndPictureEachOther from './components/TextAndPictureEachOther/TextAndPictureEachOther';

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
          <Cards data={first} moveUp />
          <TextAndPictureEachOther nameOfImageFromPublicWithExtension="view.jpg" />
          <Cards data={first} />
          <TextOnImage
            title="Przestrzeń, w której doskonale czuje się każdy domownik"
            text="Leśne Zacisze to kameralna inwestycja, która obejmuje cztery budynki w zabudowie bliźniaczej, czyli osiem domów. Lokale dostępne są w dwóch wariantach: o powierzchni 92,93 m² z trzema sypialniami lub 92,38 m² z czterema sypialnialniami lub 92,38 m² z cztzeb. Dodatkowy pokój na parterze może służyć Ci nie tylko za sypialnię, ale taiami, dzięki czemu komfortowo dopasujesz przestrzeń do swoich indywidualnych potrzeb. Dodatkowy pokój na parterze może służyć Ci nie tylko za sypialnię, ale także np. za praktyczny gabinet do pracy zdalnej.

            W tych funkcjonalnych wnętrzach każdy członek rodziny znajdzie miejsce, zapewniające mu prywatność i przestrzeń do odpoczynku lub rozwijania swoich pasji. Domy mają także indywidualne ogródki, które idealnie sprawdzają się do uprawy roślin, spotkań ze znajomymi czy zabaw z dziećmi."
            nameOfImageFromPublicWithExtension="headerBgc.jpg"
          />
        </FullWidthWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
