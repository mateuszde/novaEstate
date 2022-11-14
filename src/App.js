import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { FullWidthWrapper } from './AppStyle';
import Cards from './components/Cards/Cards/Cards';
import GlobalStyle from './components/globalStyles';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { textOnImageData } from './textOnImageData';
import { first, second } from './cardsData';
import { contactData } from './contactData';
import { images } from './components/SliderWithText/imagesForSlider';
import TextOnImage from './components/TextOnImage/TextOnImage';
import TextAndPictureEachOther from './components/TextAndPictureEachOther/TextAndPictureEachOther';
import SliderWithText from './components/SliderWithText/SliderWithText';
import Table from './components/Table/Table';
import YourNewHome from './components/YourNewHome/YourNewHome/YourNewHome';
import Photo from './components/Photo/Photo';
import buildings from './images/numberOfBuildings.JPG';
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faBuildingCircleCheck,
  faEnvelope,
  faFileMedical,
  faGraduationCap,
  faHouse,
  faMap,
  faMapLocationDot,
  faMobileScreen,
  faRoute,
  faUser,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

library.add(
  faFileMedical,
  faMap,
  faRoute,
  faBuildingCircleCheck,
  faHouse,
  faUsersLine,
  faGraduationCap,
  faUser,
  faBriefcase,
  faMobileScreen,
  faEnvelope,
  faMapLocationDot
);

//Theme for ThemeProvider
const theme = {
  colors: {
    primary: '#383E42',
    // primary: '#111C26',
    // primary: '#262F3E',
    secondary: '#A6A6A6',
    black: '#0D0D0D',
    lightGray: '#F2F2F2',
    darkGray: '#737373',
    white: '#fff',
  },
  fontSize: {
    extraS: '14px',
    xs: '17px',
    s: '18px',
    m: '24px',
    l: '27px',
    xl: '36px',
    xxl: '65px',
  },
};

function App() {
  const localization = useRef(null);
  const aboutInvestment = useRef(null);
  const houses = useRef(null);
  const availability = useRef(null);
  const investor = useRef(null);
  const contact = useRef(null);
  const header = useRef(null);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FullWidthWrapper>
          <Navbar
            refs={{
              localization,
              aboutInvestment,
              houses,
              availability,
              investor,
              contact,
              header,
            }}
          />
          <Header ref={header} />
          <Cards data={first} moveUp />
          <TextAndPictureEachOther
            ref={localization}
            nameOfImageFromPublicWithExtension="mapWithPoints.jpg"
          />
          <Cards data={second} />
          <TextOnImage
            ref={aboutInvestment}
            title={textOnImageData[0].title}
            textData={textOnImageData[0].texts}
            nameOfImageFromPublicWithExtension={textOnImageData[0].imageBgc}
          />
          <SliderWithText images={images} />
          <YourNewHome
            ref={houses}
            title="Poznaj swój wymarzony dom"
            subTitle="Dom z ogrodem | 3 sypialnie | 97,58 m²"
          />
          <Photo ref={availability} image={buildings} />
          <Table />
          <TextOnImage
            ref={investor}
            title={textOnImageData[1].title}
            textData={textOnImageData[1].texts}
            nameOfImageFromPublicWithExtension={textOnImageData[1].imageBgc}
          />

          <Contact ref={contact} data={contactData} />

          <Footer />
        </FullWidthWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
