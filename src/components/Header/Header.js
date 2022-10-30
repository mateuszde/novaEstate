import { BackgroundWrapper, Wrapper, TextWrapper, ExtraContentWrapper } from './style';

const Header = () => {
  return (
    <BackgroundWrapper
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/img/headerBgc.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Wrapper>
        <TextWrapper>
          <h1>Nova</h1>
          <ExtraContentWrapper>
            <h2>Osiedle domów w spokojnej okolicy pod Gdańskiem</h2>
          </ExtraContentWrapper>
        </TextWrapper>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default Header;
