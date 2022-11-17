import { Wrapper, NumberWrapper, AreaWrapper, AvailabilityWrapper, PriceWrapper } from './style';

const TableRow = ({ number, area, availability, price, bold = false }) => {
  return (
    <Wrapper bold={bold}>
      <NumberWrapper>
        <p>{number}</p>
      </NumberWrapper>
      <AreaWrapper>
        <p>{area}</p>
      </AreaWrapper>
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
