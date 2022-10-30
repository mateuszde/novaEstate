import { StyledImg } from './style';

const Image = ({ img, alternativeText }) => {
  return (
    <div>
      <StyledImg src={img} alt={alternativeText} />
    </div>
  );
};

export default Image;
