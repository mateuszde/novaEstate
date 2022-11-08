import styled, { ThemeProvider } from 'styled-components';
import { FullWidthWrapper } from './AppStyle';
import Cards from './components/Cards/Cards/Cards';
import GlobalStyle from './components/globalStyles';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import { first, second } from './cardsData';
import { images } from './components/SliderWithText/imagesForSlider';
import TextOnImage from './components/TextOnImage/TextOnImage';
import TextAndPictureEachOther from './components/TextAndPictureEachOther/TextAndPictureEachOther';
import SliderWithText from './components/SliderWithText/SliderWithText';
import Table from './components/Table/Table';
import YourNewHome from './components/YourNewHome/YourNewHome/YourNewHome';

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBuildingCircleCheck,
  faFileMedical,
  faGraduationCap,
  faHouse,
  faMap,
  faRoute,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFileMedical,
  faMap,
  faRoute,
  faBuildingCircleCheck,
  faHouse,
  faUsersLine,
  faGraduationCap
);

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

const TemporaryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FullWidthWrapper>
          <Navbar />

          <Header />

          <Cards data={first} moveUp />

          <TextAndPictureEachOther nameOfImageFromPublicWithExtension="mapWithPoints.jpg" />

          <Cards data={second} />

          <TextOnImage
            title="Przestrzeń, w której doskonale czuje się każdy domownik"
            text="Leśne Zacisze to kameralna inwestycja, która obejmuje cztery budynki w zabudowie bliźniaczej, czyli osiem domów. Lokale dostępne są w dwóch wariantach: o powierzchni 92,93 m² z trzema sypialniami lub 92,38 m² z czterema sypialnialniami lub 92,38 m² z cztzeb. Dodatkowy pokój na parterze może służyć Ci nie tylko za sypialnię, ale taiami, dzięki czemu komfortowo dopasujesz przestrzeń do swoich indywidualnych potrzeb. Dodatkowy pokój na parterze może służyć Ci nie tylko za sypialnię, ale także np. za praktyczny gabinet do pracy zdalnej.

            W tych funkcjonalnych wnętrzach każdy człosnek rodziny znajdzie miejsce, zapewniające mu prywatność i przestrzeń do odpoczynku lub rozwijania swoich pasji. Domy mają także indywidualne ogródki, które idealnie sprawdzają się do uprawy roślin, spotkań ze znajomymi czy zabaw z dziećmi."
            nameOfImageFromPublicWithExtension="textOnImage2.jpg"
          />

          <SliderWithText images={images} />

          <YourNewHome title="Poznaj swój wymarzony dom" subTitle="Dom z ogrodem - 3 sypialnie" />

          <TemporaryWrapper>
            <h2>
              ZDJĘCIE Z DRONA Z OZNACZONYMI BUDYNKAMI WRAZ Z KÓŁKAMI OZNACZAJĄCYMI NUMERY BUDYNKÓW -
              OD MM
            </h2>
          </TemporaryWrapper>

          <Table />

          <TextOnImage
            title="O inwestorze"
            text="W branży deweloperskiej skupiamy się na nietuzinkowych, oryginalnych rozwiązaniach, które łączą maksymalny komfort mieszkania w funkcjonalnych wnętrzach z wyjątkową lokalizacją inwestycji. Tworzymy nowoczesne domy z zachowaniem najwyższych standardów, przy wykorzystaniu sprawdzonych materiałów i pracy doświadczonych specjalistów.

            Każdy realizowany przez nas projekt ma gwarantować przyszłym mieszkańcom satysfakcję z dokonanego wyboru. Oferujemy domy, które odpowiadają na potrzeby nawet najbardziej wymagających klientów."
            nameOfImageFromPublicWithExtension="textOnImage1.jpg"
          />

          <TemporaryWrapper>
            <h2>DANE KONTAKTOWE</h2>
          </TemporaryWrapper>

          <TemporaryWrapper>
            <h2>STOPKA</h2>
          </TemporaryWrapper>
        </FullWidthWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
