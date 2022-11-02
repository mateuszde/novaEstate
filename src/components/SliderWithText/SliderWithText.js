import SliderGallery from '../SliderGallery/SliderGallery';
import { Wrapper, SliderWrapper, TextWrapper } from './style';

const SliderWithText = () => {
  return (
    <Wrapper>
      <SliderWrapper>
        <SliderGallery />
      </SliderWrapper>
      <TextWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium excepturi, non,
          autem quod cumque tempore quisquam inventore expedita esse itaque accusamus blanditiis
          nesciunt impedit nemo animi eos. Officia, fugi
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nobis dolores natus
          quaerat, quibusdam at commodi error quisquam fugit cupiditate itaque assumenda vitae aut
          dolorum perspiciatis autem. Nesciunt, maxime autem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nobis dolores natus
          quaerat, quibusdam at commodi error quisquam fugit cupiditate itaque assumenda vitae aut
          dolorum perspiciatis autem. Nesciunt, maxime autem?
        </p>
      </TextWrapper>
    </Wrapper>
  );
};

export default SliderWithText;
