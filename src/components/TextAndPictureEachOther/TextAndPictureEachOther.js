import { forwardRef } from 'react';
import { StyledParagraph } from '../TextOnImage/style';
import { Wrapper, StyledImage, Title, StyleParagraph, TextWrapper, ImageWrapper } from './style';
import image from '../../images/mapWithPointsSRC.jpg';

const TextAndPictureEachOther = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <TextWrapper>
        <Title>Wypełniona cisza enklawa</Title>
        <StyleParagraph>
          NoVa w Łęgowie to inwestycja która znajduje się w bezpośrednim sąsiedztwie domów
          jednorodzinnych, dzięki czemu masz zapewnioną idealną ciszę i niezmącony spokój. Otoczenie
          gwarantuje zdrowy klimat oraz czyste powietrze o każdej porze roku.
        </StyleParagraph>
        <StyledParagraph>
          W NoVa będziesz cieszyć się ciszą, niewielką ilością sąsiadów, własnym ogródkiem na którym
          wieczorem rozsiądziesz się wygodnie, by podziwiać malowniczy zachód słońca; To idealnie
          miejsce zarówno do tego, by odpocząć od zgiełku miasta, jak i pracować w pełnym skupieniu.
          W okolicy nie brakuje również punktów usługowych czy sklepów, w których zrobisz codzienne
          zakupy.
        </StyledParagraph>
      </TextWrapper>
      <ImageWrapper>
        <StyledImage src={image} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
});

export default TextAndPictureEachOther;
