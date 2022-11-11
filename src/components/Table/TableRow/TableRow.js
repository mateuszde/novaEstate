import {
  Wrapper,
  NumberWrapper,
  AreaWrapper,
  LandAreaWrapper,
  AvailabilityWrapper,
  PriceWrapper,
} from './style';

const TableRow = ({ number, area, landArea, availability, price, bold = false }) => {
  return (
    <Wrapper bold={bold}>
      <NumberWrapper>
        <p>{number}</p>
      </NumberWrapper>
      <AreaWrapper>
        <p>{area}</p>
      </AreaWrapper>
      <LandAreaWrapper>
        <p>{landArea}</p>
      </LandAreaWrapper>
      <AvailabilityWrapper>
        <p>{availability}</p>
      </AvailabilityWrapper>
      <PriceWrapper>
        <p>{price}</p>
      </PriceWrapper>
    </Wrapper>
  );
};

export default TableRow;
