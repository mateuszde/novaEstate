import ListCards from '../ListCards/ListCards';
import { Wrapper } from './style';

const Cards = ({ data, moveUp }) => {
  return (
    <Wrapper
      style={{
        marginTop: `${moveUp ? '-160px' : '0'}`,
      }}
    >
      <ListCards data={data} />
    </Wrapper>
  );
};

export default Cards;
