import { StyledParagraph } from '../TextOnImage/style';
import { Wrapper, Title, StyleParagraph, TextWrapper, ImageWrapper } from './style';

const TextAndPictureEachOther = ({ nameOfImageFromPublicWithExtension }) => {
  return (
    <Wrapper>
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
      <ImageWrapper
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + `/img/${nameOfImageFromPublicWithExtension}`
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></ImageWrapper>
    </Wrapper>
  );
};

export default TextAndPictureEachOther;
