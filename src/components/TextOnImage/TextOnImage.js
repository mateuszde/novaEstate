import { BackgroundWrapper, Wrapper, TextWrapper, Title, StyledParagraph } from './style';

const TextOnImage = ({ title, text, nameOfImageFromPublicWithExtension }) => {
  return (
    <BackgroundWrapper
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + `/img/${nameOfImageFromPublicWithExtension}`
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Wrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <StyledParagraph>{text}</StyledParagraph>
        </TextWrapper>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default TextOnImage;