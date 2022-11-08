import styled, { ThemeProvider } from 'styled-components';
import { FullWidthWrapper } from './AppStyle';
import Cards from './components/Cards/Cards/Cards';
import GlobalStyle from './components/globalStyles';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { textOnImageData } from './textOnImageData';

import { first, second } from './cardsData';
import { images } from './components/SliderWithText/imagesForSlider';
import TextOnImage from './components/TextOnImage/TextOnImage';
import TextAndPictureEachOther from './components/TextAndPictureEachOther/TextAndPictureEachOther';
import SliderWithText from './components/SliderWithText/SliderWithText';
import Table from './components/Table/Table';
import YourNewHome from './components/YourNewHome/YourNewHome/YourNewHome';

//Fontawesome
import { library, text } from '@fortawesome/fontawesome-svg-core';
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
            title={textOnImageData[0].title}
            textData={textOnImageData[0].texts}
            nameOfImageFromPublicWithExtension={textOnImageData[0].imageBgc}
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
            title={textOnImageData[1].title}
            textData={textOnImageData[1].texts}
            nameOfImageFromPublicWithExtension={textOnImageData[1].imageBgc}
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
