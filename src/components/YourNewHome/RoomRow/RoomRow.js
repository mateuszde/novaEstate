import { Wrapper, StyledTitle } from './style';

const RoomRow = ({ title, valueOfData, unit, bold = false }) => {
  return (
    <Wrapper bold={bold}>
      <StyledTitle>{title}</StyledTitle>
      <p>
        {valueOfData} {unit}
      </p>
    </Wrapper>
  );
};

export default RoomRow;
