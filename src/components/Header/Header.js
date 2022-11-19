import { forwardRef } from 'react';
import { BackgroundWrapper, Wrapper, TextWrapper, ExtraContentWrapper } from './style';

const Header = forwardRef((props, ref) => {
  return (
    <BackgroundWrapper
      ref={ref}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/img/1.JPG'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
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
});

export default Header;
