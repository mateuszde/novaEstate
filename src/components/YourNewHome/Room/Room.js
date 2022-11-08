import RoomRow from '../RoomRow/RoomRow';
import { Wrapper } from './style';

const Room = ({ nameOfRoom, area }) => {
  return (
    <Wrapper>
      <RoomRow title={nameOfRoom} valueOfData={area} unit="m2" />
    </Wrapper>
  );
};

export default Room;
