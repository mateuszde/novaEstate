import { StyledParagraph } from '../TextOnImage/style';
import { Wrapper, Title, StyleParagraph, TextWrapper, ImageWrapper } from './style';

const TextAndPictureEachOther = ({ nameOfImageFromPublicWithExtension }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Wypełniona zielenią oaza</Title>
        <StyleParagraph>
          Leśne Zacisze w Głogoczowie, jak sama nazwa wskazuje, to przede wszystkim okolica, która
          zachwyca niezwykle bogatą fauną i florą. Inwestycję otaczają pełne wyjątkowego uroku
          zalesienia, łąki i pola. W bezpośrednim sąsiedztwie znajduje się tylko kilka domów
          jednorodzinnych, dzięki czemu masz zapewnioną idealną ciszę i niezmącony spokój. Otoczenie
          zieleni gwarantuje zdrowy klimat oraz czyste powietrze o każdej porze roku.
        </StyleParagraph>
        <StyledParagraph>
          W Leśnym Zaciszu o poranku będziesz cieszyć się śpiewem ptaków i oddychać pełną piersią,
          chłonąc cudowny zapach lasu. Wieczorem rozsiądziesz się wygodnie, by podziwiać najpierw
          malowniczy zachód słońca, a następnie obserwować rozgwieżdżone niebo. To idealnie miejsce
          zarówno do tego, by odpocząć od zgiełku miasta, jak i pracować w pełnym skupieniu. W
          okolicy nie brakuje również punktów usługowych czy sklepów, w których zrobisz codzienne
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
