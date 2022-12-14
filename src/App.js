import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';
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

import GlobalStyle from './components/globalStyles';
import { FullWidthWrapper } from './AppStyle';

import Cards from './components/Cards/Cards/Cards';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TextOnImage from './components/TextOnImage/TextOnImage';
import TextAndPictureEachOther from './components/TextAndPictureEachOther/TextAndPictureEachOther';
import SliderWithText from './components/SliderWithText/SliderWithText';
import Table from './components/Table/Table';
import YourNewHome from './components/YourNewHome/YourNewHome/YourNewHome';
import Photo from './components/Photo/Photo';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import { textOnImageData } from './textOnImageData';
import { first, second } from './cardsData';
import { contactData } from './contactData';
import { images } from './components/SliderWithText/imagesForSlider';
import buildings from './images/numberOfBuildings.JPG';

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
            title="Poznaj sw??j wymarzony dom"
            subTitle="Dom z ogrodem | 3 sypialnie | 97,58 m??"
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
          <CookieConsent
            style={{
              background: `${theme.colors.primary}`,
              fontSize: '14px',
            }}
            buttonText="Rozumiem"
            buttonStyle={{
              color: `${theme.colors.white}`,
              background: `${theme.colors.secondary}`,
              fontSize: '14px',
              borderRadius: '20px',
              padding: '10px 15px',
            }}
          >
            Ta strona korzysta z plik??w cookie w celu zwi??kszenia komfortu u??ytkowania.
          </CookieConsent>
        </FullWidthWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
