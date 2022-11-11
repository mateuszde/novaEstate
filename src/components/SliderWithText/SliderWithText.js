import SliderGallery from '../SliderGallery/SliderGallery';
import { Wrapper, SliderWrapper, TextWrapper } from './style';

const SliderWithText = ({ images }) => {
  return (
    <Wrapper>
      <SliderWrapper>
        <SliderGallery showPlayButton={false} showNav={false} showBullets={true} images={images} />
      </SliderWrapper>
      <TextWrapper>
        <p>
          Budynki wyróżniają się nowoczesną, miłą dla oka architekturą. Łączą elegancki styl z
          naturalnymi akcentami w postaci kamienia. Do ich budowy wykorzystano sprawdzone, dobrej
          jakości materiały. Zadbano o doskonałą izolację akustyczną i termiczną. Wnętrza są pełne
          naturalnego światła, zadbano o to aby było również w górnej łazience, co zdecydowanie
          wyróżnia ten projekt.
        </p>
        <p>
          Nie będziesz mieć także żadnych problemów z parkowaniem – do każdego domu przypisane są
          dwa miejsca postojowe, jedno w garażu a jedno na zewnątrz budynku. Osiedla NoVa jest
          doskonałym wyborem dla młodych par i rodzin z dziećmi, które chcą mieszkać w spokojnej,
          zdrowej okolicy z wygodnym dostępem do infrastruktury miasta.
        </p>
      </TextWrapper>
    </Wrapper>
  );
};

export default SliderWithText;
