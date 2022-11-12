import { forwardRef } from 'react';
import { BackgroundWrapper, Wrapper, TextWrapper, Title, StyledParagraph } from './style';

const TextOnImage = forwardRef((props, ref) => {
  return (
    <BackgroundWrapper
      ref={ref}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + `/img/${props.nameOfImageFromPublicWithExtension}`
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Wrapper>
        <TextWrapper>
          <Title>{props.title}</Title>
          {props.textData.map((p) => (
            <StyledParagraph key={p.id}>{p.text}</StyledParagraph>
          ))}
        </TextWrapper>
      </Wrapper>
    </BackgroundWrapper>
  );
});

export default TextOnImage;
